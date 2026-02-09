import os
import wave
import math

SR = 44100  # sample rate

def _clamp(x, lo=-1.0, hi=1.0):
    return lo if x < lo else hi if x > hi else x

def _write_wav(path, samples, sr=SR):
    # samples: list of floats in [-1, 1]
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with wave.open(path, "wb") as wf:
        wf.setnchannels(1)      # mono
        wf.setsampwidth(2)      # 16-bit
        wf.setframerate(sr)
        frames = bytearray()
        for s in samples:
            s = _clamp(s)
            v = int(s * 32767)
            frames += v.to_bytes(2, byteorder="little", signed=True)
        wf.writeframes(frames)

def _sine(freq, t):
    return math.sin(2 * math.pi * freq * t)

def _square(freq, t):
    return 1.0 if _sine(freq, t) >= 0 else -1.0

def _env_adsr(t, attack, decay, sustain_level, release, total):
    # simple ADSR envelope
    if t < 0:
        return 0.0
    if t < attack:
        return t / attack if attack > 0 else 1.0
    t2 = t - attack
    if t2 < decay:
        # linear to sustain_level
        return 1.0 + (sustain_level - 1.0) * (t2 / decay if decay > 0 else 1.0)
    t3 = t2 - decay
    sustain_time = max(0.0, total - (attack + decay + release))
    if t3 < sustain_time:
        return sustain_level
    t4 = t3 - sustain_time
    if t4 < release:
        return sustain_level * (1.0 - (t4 / release if release > 0 else 1.0))
    return 0.0

def make_run_click(duration=0.10):
    # short click: a quick noise-ish / high sine burst
    n = int(SR * duration)
    samples = []
    for i in range(n):
        t = i / SR
        env = _env_adsr(t, 0.005, 0.02, 0.2, 0.05, duration)
        # mix two sines to feel "clicky"
        s = 0.6 * _sine(1800, t) + 0.4 * _sine(1200, t)
        samples.append(0.35 * env * s)
    return samples

def make_success_chime(duration=0.45):
    # ascending notes (C5-E5-G5-ish)
    notes = [(523.25, 0.15), (659.25, 0.15), (783.99, 0.15)]
    samples = []
    for freq, seg in notes:
        n = int(SR * seg)
        for i in range(n):
            t = i / SR
            env = _env_adsr(t, 0.01, 0.05, 0.6, 0.08, seg)
            s = _sine(freq, t)
            samples.append(0.38 * env * s)
    # tiny tail
    tail = int(SR * max(0.0, duration - sum(seg for _, seg in notes)))
    for i in range(tail):
        t = i / SR
        env = _env_adsr(t, 0.01, 0.02, 0.3, (tail / SR), tail / SR)
        samples.append(0.18 * env * _sine(880, t))
    return samples

def make_error_buzz(duration=0.40):
    # descending buzzer: square-ish + vibrato
    n = int(SR * duration)
    samples = []
    for i in range(n):
        t = i / SR
        # sweep down from 500Hz to 220Hz
        f = 500 - (280 * (t / duration))
        vibr = 8 * math.sin(2 * math.pi * 12 * t)  # slight wobble
        env = _env_adsr(t, 0.01, 0.05, 0.7, 0.10, duration)
        s = 0.75 * _square(f + vibr, t) + 0.25 * _sine((f + vibr) * 0.5, t)
        samples.append(0.22 * env * s)
    return samples

def main():
    out_dir = os.path.join("assets", "sfx")
    run_path = os.path.join(out_dir, "run.wav")
    success_path = os.path.join(out_dir, "success.wav")
    error_path = os.path.join(out_dir, "error.wav")

    _write_wav(run_path, make_run_click())
    _write_wav(success_path, make_success_chime())
    _write_wav(error_path, make_error_buzz())

    print("✅ Created:")
    print(" -", run_path)
    print(" -", success_path)
    print(" -", error_path)

if __name__ == "__main__":
    main()
