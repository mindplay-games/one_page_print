function groupMeta(group) {
  const map = {
    basics: { title: "תרגול יסודות", sub: "פקודות, משתנים, תנאים, לולאות, פונקציות…" },
    projects: { title: "תרגול פרויקטים", sub: "מיני־פרויקטים ותרגול מעשי" },
    grade3: { title: "תרגול שנה ג׳", sub: "SQL שאלונים + תרגילי השלמה" },
  };
  return map[group] ?? { title: "תרגול", sub: "" };
}

function makeTile(ch) {
  const a = document.createElement("a");
  a.className = "tile";

  const page = (ch.mode === "practiceOnly") ? "practice.html" : "challenge.html";
  a.href = `./${page}?id=${encodeURIComponent(ch.id)}&group=${encodeURIComponent(ch.group ?? "")}`;

  a.innerHTML = `
    <div class="tag"># ${ch.topic ?? ""}</div>
    <div class="name">${ch.title ?? ""}</div>
    <div class="desc">${ch.subtitle ?? ""}</div>
  `;
  return a;
}

(function main() {
  if (typeof CHALLENGES === "undefined" || !Array.isArray(CHALLENGES)) {
    document.body.innerHTML = "<h2 style='padding:20px'>לא נטענו נתוני תרגילים 😅</h2>";
    return;
  }

  const params = new URLSearchParams(location.search);
  const group = params.get("group") || "basics";

  const meta = groupMeta(group);
  document.title = meta.title;

  const title = document.getElementById("catTitle");
  const sub = document.getElementById("catSub");
  const list = document.getElementById("list");

  if (title) title.textContent = meta.title;
  if (sub) sub.textContent = meta.sub;

  const items = CHALLENGES.filter(ch => (ch.group ?? "") === group);

  if (!items.length) {
    list.innerHTML = "<p class='mini'>אין תרגילים בקטגוריה הזו עדיין.</p>";
    return;
  }

  items.forEach(ch => list.appendChild(makeTile(ch)));
})();
