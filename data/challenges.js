 const CHALLENGES = [
  {
    id: "cmd_print_name",
    group: "basics",
    topic: "פקודה",
    title: "הדפס שלום",
    subtitle: "print בפייתון",
    explain: "פקודה היא הוראה למחשב. בפייתון מדפיסים למסך עם print().",
    task: 'כתוב שורה אחת שמדפיסה את המילה "שלום".',
    hint: 'הטקסט שבתוך הפרינט יהיה מוקף ב"גרשיים" ובסוגריים() לא לשכוח לא לעשות רווחים מיותרים לפני הפקודה',
    starter: ``,
    solution: `print("שלום")`,
    expectedOutput: "שלום",
    fallback: {
      type: "quiz",
      question: 'איזו שורה מדפיסה בפייתון את המילה "שלום"?',
      options: ['echo("שלום")', 'print("שלום")', 'console.log("שלום")', 'say("שלום")'],
      correctIndex: 1,
      explainCorrect: 'בפייתון מדפיסים עם print() והטקסט בתוך גרשיים.'
    }
  }
