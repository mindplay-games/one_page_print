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
  },
  {
    id: "var_zoo_total",
    group: "basics",
    topic: "משתנים",
    title: "גן חיות עם משתנים",
    subtitle: "3 משתנים + סכום",
    explain: "משתנה הוא קופסה בזיכרון עם שם. אפשר לשמור בו מספרים, מילים ועוד",
    task: "צור 3 משתנים (lions, monkeys, elephants) כל משתנה ישמור על מספר החיות שיש מאותו סוג לאחר מכן נדפיס את סך כל החיות שיש לנו",
    hint: "total = lions + monkeys + elephants  ---- print(total)",
    starter: `lions = 5
monkeys = 12
elephants = 2`,
    solution: `lions = 5
monkeys = 12
elephants = 2

total = lions + monkeys + elephants
print(total)`,
    expectedOutput: "19",
    fallback: {
      type: "quiz",
      question: "מה זה משתנה בפייתון?",
      options: ["כפתור באתר", "קופסה עם שם ששומרת מידע", "שגיאה בקוד", "לולאה שחוזרת"],
      correctIndex: 1,
      explainCorrect: "משתנה הוא קופסה בזיכרון: נותנים שם ושומרים ערך."
    }
  },
{
  id: "input_basic_name",
  group: "basics",
  topic: "קלט",
  title: "קלט שם",
  subtitle: "input() + print()",
  explain: "input() קורא טקסט שהמשתמש מקליד. נשמור את הטקסט במשתנה ואז נדפיס אותו.",
  task: "קבלו שם מהמשתמש והדפיסו: שלום name",
  hint: 'שמור את הקלט מה־input() במשתנה, ואז הדפס את המילה "שלום" יחד עם המשתנה בעזרת print().',
  starter: ``,
  solution: `name = input("מה השם שלך? ")
print("שלום", name)`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "מה עושה input() בפייתון?",
    options: [
      "מדפיס למסך",
      "קורא קלט מהמשתמש ומחזיר אותו",
      "מוחק משתנים",
      "עוצר את המחשב"
    ],
    correctIndex: 1,
    explainCorrect: "input() מחכה שהמשתמש יקליד ומחזיר את הטקסט."
  }
},
  {
    id: "for_5_rounds",
    group: "basics",
    topic: "לולאת for",
    title: "5 סיבובים",
    subtitle: "הדפס 1 עד 5",
    explain: "לולאת for עושה מספר חזרות ידוע מראש. range(1,6) נותן 1 עד 5.",
    task: "צור לולאת for שמדפיסה את המספרים 1 עד 5.",
    hint: "for i in range(1, 6): ואז print(i)",
    starter: ``,
    solution: `for i in range(1, 6):
    print(i)`,
    expectedOutput: `1
2
3
4
5`,
    fallback: {
      type: "order",
      prompt: "סדר את השורות כדי ליצור לולאת for שמדפיסה 1 עד 5",
      pieces: ["    print(i)", "for i in range(1, 6):"],
      correct: ["for i in range(1, 6):", "    print(i)"],
      explainCorrect: "קודם שורת for עם :, ואז שורה מוזחת (4 רווחים) עם print."
    }
  },
  {
  id: "while_points_to_5",
  group: "basics",
  topic: "לולאת while",
  title: "נקודות עד 5",
  subtitle: "while",
  explain: "לולאת while חוזרת כל עוד תנאי מסוים מתקיים, וכשהתנאי כבר לא נכון — הלולאה נעצרת.",
  task: "יש לנו משתנה בשם points שמתחיל בערך 0. כתבו לולאת while שמגדילה את הערך של points ב־1 בכל סיבוב ומדפיסה את הערך שלו בכל פעם, והלולאה תמשיך לרוץ כל עוד points קטן מ־5 ותיעצר כשהוא יגיע ל־5.",
  hint: "while points < 5: ואז בפנים points = points + 1 ואז print(points)",
  starter: `points = 0

# כתבו לולאת while כאן:
`,
  solution: `points = 0

while points < 5:
    points = points + 1
    print(points)`,
  expectedOutput: `1
2
3
4
5`,
  fallback: {
    type: "order",
    prompt: "סדרו את השורות כדי ליצור לולאת while שמדפיסה 1 עד 5",
    pieces: [
      "    print(points)",
      "    points = points + 1",
      "while points < 5:",
      "points = 0"
    ],
    correct: [
      "points = 0",
      "while points < 5:",
      "    points = points + 1",
      "    print(points)"
    ],
    explainCorrect: "קודם מאתחלים points, ואז while עם :, ואז שתי שורות מוזחות (4 רווחים)."
  }
},
{
  id: "if_bigger_than_10_write",
  group: "basics",
  topic: "תנאים",
  title: "כתבו תנאי לבד",
  subtitle: "if / else עם >",
  explain: "תנאים הם דרך להגיד למחשב: אם משהו קורה – תעשה כך, ואם לא – תעשה משהו אחר",
  task: "נתון x. כתבו קוד שבודק: אם x גדול מ־10 הדפיסו \"גדול\" אחרת הדפיסו \"קטן\".",
  hint: "צריך if עם : ואז שתי הדפסות (אחת בתוך if ואחת בתוך else).",
  starter: `x = 7

# כתבו כאן:
# אם x גדול מ-10 הדפיסו "גדול"
# אחרת הדפיסו "קטן"
`,
  solution: `x = 7

if x > 10:
    print("גדול")
else:
    print("קטן")`,
  expectedOutput: "קטן",
  fallback: {
    type: "quiz",
    question: "איזו שורה מתחילה תנאי if בפייתון?",
    options: [
      "if (x > 10) {",
      "if x > 10:",
      "if x > 10 then",
      "if x => 10:"
    ],
    correctIndex: 1,
    explainCorrect: "בפייתון כותבים if בלי סוגריים, עם : בסוף השורה."
  }
},
    {
    id: "func",
    group: "basics",
    topic: "פונקציות",
    title: "פונקציה שמדפיסה שלום",
    subtitle: "def greet()",
    explain: "פונקציה אורזת כמה פעולות תחת שם אחד, ומאפשרת להפעיל את כולן בפקודה אחת במקום לכתוב את הקוד מחדש בכל פעם.",
    task: "צור פונקציה greet שמדפיסה 'שלום'. ואז קרא לה .",
    hint: "def greet(): ואז print בתוך הפונקציה",
    starter: `# כתבו כאן פונקציה ואז קריאה אליה:`,
    solution: `def greet():
    print("שלום")

greet()`,
    expectedOutput: "שלום יוסי",
    fallback: {
      type: "quiz",
      question: "מה היתרון של פונקציה?",
      options: ["היא עושה את המחשב יותר כבד", "אפשר להשתמש בקוד שוב ושוב בלי לשכפל", "היא מוחקת משתנים", "היא רק ללולאות"],
      correctIndex: 1,
      explainCorrect: "פונקציה חוסכת כתיבה כפולה ועוזרת לסדר קוד."
    }
  },

  {
    id: "func_greet",
    group: "basics",
    topic: "פונקציות",
    title: "פונקציה שמברכת",
    subtitle: "def greet(name)",
    explain: "פונקציה היא שם לפעולות שמבצעות משימה אחת, אפשר להפעיל אותן בפקודה אחת, והיא גם יכולה לקבל דרך הסוגריים ערכים שנשלח לה כדי שתוכל לעבוד איתם",
    task: "צור פונקציה greet שמקבלת name ומדפיסה 'שלום NAME'. ואז קרא לה עם השם שלך.",
    hint: "def greet(name): ואז print בתוך הפונקציה",
    starter: `# כתבו כאן פונקציה ואז קריאה אליה:`,
    solution: `def greet(name):
    print("שלום", name)

greet("יוסי")`,
    expectedOutput: "שלום יוסי",
    fallback: {
      type: "quiz",
      question: "מה היתרון של פונקציה?",
      options: ["היא עושה את המחשב יותר כבד", "אפשר להשתמש בקוד שוב ושוב בלי לשכפל", "היא מוחקת משתנים", "היא רק ללולאות"],
      correctIndex: 1,
      explainCorrect: "פונקציה חוסכת כתיבה כפולה ועוזרת לסדר קוד."
    }
  },
  {
  id: "input_add_two_numbers",
  group: "basics",
  topic: "קלט",
  title: "חיבור שני מספרים",
  subtitle: "int(input()) + print()",
  explain: "input() מחזיר תמיד טקסט, לכן ממירים אותו למספר בעזרת int(), ואז אפשר לקלוט שני מספרים, לחבר ביניהם ולהדפיס את התוצאה",
  task: "קבלו מהמשתמש שני מספרים (שלמים), חשבו את הסכום, והדפיסו את הסכום בלבד.",
  hint: "a = int(input(...)) ואז b = int(input(...)) ואז print(a + b)",
  starter: ``,
  solution: `a = int(input("מספר ראשון: "))
b = int(input("מספר שני: "))
print(a + b)`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "למה משתמשים ב-int(input()) בתרגיל הזה?",
    options: [
      "כדי להפוך את המספר לטקסט",
      "כדי להפוך טקסט למספר ואז אפשר לחבר",
      "כדי להדפיס מהר יותר",
      "כדי ליצור לולאה"
    ],
    correctIndex: 1,
    explainCorrect: "input() מחזיר טקסט, ו-int() הופך אותו למספר שאפשר לעשות עליו חיבור."
  }
},
  {
  id: "input_age_plus_one",
  group: "basics",
  topic: "קלט",
  title: "הגיל בעוד שנה",
  subtitle: "int(input()) + חישוב",
  explain: "input() קורא קלט מהמשתמש. כדי לחשב עם מספרים צריך להפוך את הקלט למספר בעזרת int().",
  task: "קבלו מהמשתמש את הגיל שלו, חשבו מה יהיה הגיל בעוד שנה, והדפיסו את התוצאה.",
  hint: "age = int(input(...)) ואז print(age + 1)",
  starter: ``,
  solution: `age = int(input("מה הגיל שלך? "))
print(age + 1)`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "למה משתמשים ב-int(input()) בתרגיל הזה?",
    options: [
      "כדי להפוך טקסט למספר שאפשר לחשב איתו",
      "כדי להדפיס טקסט",
      "כדי לעצור את הקוד",
      "כדי להפעיל לולאה"
    ],
    correctIndex: 0,
    explainCorrect: "input() מחזיר טקסט, ו-int() הופך אותו למספר שאפשר להוסיף לו 1."
  }
},
{
  id: "time_sleep_basic",
  group: "basics",
  topic: "ספריית time",
  title: "טיימר קצר",
  subtitle: "time.sleep()",
  explain: "הספרייה time מאפשרת לנו לעבוד עם זמן. הפונקציה sleep() עוצרת את התוכנית למספר שניות ואז ממשיכה.",
  task: "ייבאו את ספריית time. הדפיסו 'מתחילים', חכו 1 שנייה עם time.sleep(1), ואז הדפיסו 'סיימנו'.",
  hint: "import time ואז time.sleep(1)",
  starter: ``,
  solution: `import time

print("מתחילים")
time.sleep(1)
print("סיימנו")`,
  expectedOutput: `מתחילים
סיימנו`,
  fallback: {
    type: "quiz",
    question: "מה עושה time.sleep(2)?",
    options: [
      "מדפיס 2 למסך",
      "מחכה 2 שניות ואז ממשיך",
      "מוחק משתנים",
      "עושה לולאה 2 פעמים"
    ],
    correctIndex: 1,
    explainCorrect: "sleep עוצרת את התוכנית למספר שניות ואז ממשיכה."
  }
},
  {
  id: "time_stopwatch_basic",
  group: "basics",
  topic: "ספריית time",
  title: "סטופר קטן",
  subtitle: "time.time() + sleep()",
  explain: "בעזרת פקודת time.time() אפשר למדוד זמן בשניות, ואם שומרים זמן התחלה וזמן סיום אפשר לחשב כמה זמן עבר",
  task: "ייבאו את הספרייה time, שמרו את זמן ההתחלה, הדפיסו – מתחילים, המתינו 2 שניות, שמרו את זמן הסיום, חשבו את משך הזמן שחלף והדפיסו – עברו X שניות (בעיגול בעזרת פקודת int).",
  hint: "חשבו את הזמן שעבר על-ידי חיסור זמן ההתחלה מזמן הסיום, שמרו אותו במשתנה, ואז הדפיסו את מספר השניות שעברו בעיגול לספרה אחת",
  starter: ``,
  solution: `import time

start = time.time()
print("מתחילים")
time.sleep(2)
end = time.time()

timePass = end - start
print("עברו:", int(timePass), "שניות")`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "למה עושים end - start?",
    options: [
      "כדי לקבל את הזמן שנשאר",
      "כדי לקבל כמה זמן עבר בין ההתחלה לסוף",
      "כדי להדפיס את השעה",
      "כדי להפעיל sleep"
    ],
    correctIndex: 1,
    explainCorrect: "חיסור של זמן סוף פחות זמן התחלה נותן כמה שניות עברו."
  }
},

{
  id: "float_sum_two_numbers",
  group: "basics",
  topic: "מספרים עשרוניים",
  title: "חיבור עשרוניים",
  subtitle: "int()",
  explain: "int() פקודה שהופכת מספר עשרוני למספר שלם ",
  task: "בקוד מופיע המשתנה number. הפכו אותו למספר שלם והדפיסו אותו.",
  hint: "int(number)",
  starter: `number = 5.3`,
  solution: `print (int(number))`,
  expectedOutput: "5",
  fallback: {
    type: "quiz",
    question: "באיזו פקודה משתמשים כדי להפוך מספר כמו \"3.14\" למספר שלם?",
    options: ["int()", "float()", "str()", "print()"],
    correctIndex: 0,
    explainCorrect: "int() ממיר טקסט למספר שלם ."
  }
},
{
  id: "simple_calculator_sum",
  group: "projects",
  topic: "מחשבון",
  title: "מחשבון חיבור",
  subtitle: "float()",
  explain: "מחשבון קולט שני מספרים ומחשב תוצאה. כדי לעבוד עם מספרים עשרוניים משתמשים ב־float().",
  task: "קלטו שני מספרים מהמשתמש, חברו ביניהם והדפיסו את התוצאה.",
  hint: "השתמשו ב־float(input()) לשני המספרים ואז חברו ביניהם",
  starter: `
a = float(input("הכנס מספר ראשון: "))
b = float(input("הכנס מספר שני: "))
`,
  solution: `
a = float(input("הכנס מספר ראשון: "))
b = float(input("הכנס מספר שני: "))
print(a + b)
`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "באיזו פקודה משתמשים כדי לקלוט מספר עשרוני מהמשתמש?",
    options: ["int(input())", "float(input())", "str(input())", "print()"],
    correctIndex: 1,
    explainCorrect: "float(input()) מאפשר לקלוט מספר עשרוני ולחשב איתו."
  }
},
  {
  id: "lists_basics_fruits",
  group: "projects",
  topic: "רשימות",
  title: "רשימות - הבסיס",
  subtitle: "list + index",
  explain: "רשימה (list) היא אוסף של פריטים בתוך סוגריים מרובעים []. לכל פריט יש מיקום (אינדקס): הראשון הוא 0, השני 1 וכן הלאה.",
  task: "צרו רשימה של 3 פירות, הדפיסו את כל הרשימה, ואז הדפיסו רק את הפריט הראשון ואת הפריט האחרון.",
  hint: "fruits[0] זה הראשון, ו־fruits[-1] זה האחרון.",
  starter: `
fruits = ["תפוח", "בננה", "ענבים"]

# הדפיסו את כל הרשימה
# הדפיסו את הפריט הראשון
# הדפיסו את הפריט האחרון
`,
  solution: `
fruits = ["תפוח", "בננה", "ענבים"]

print(fruits)
print("ראשון:", fruits[0])
print("אחרון:", fruits[-1])
`,
  expectedOutput: "3 הדפסות: הרשימה, הראשון, האחרון",
  fallback: {
    type: "quiz",
    question: "מה מחזיר fruits[0] אם fruits = ['תפוח','בננה','ענבים'] ?",
    options: ["'תפוח'", "'בננה'", "'ענבים'", "כל הרשימה"],
    correctIndex: 0,
    explainCorrect: "האינדקס 0 הוא הפריט הראשון ברשימה."
  }
},
  {
  id: "tip_calculator",
  group: "projects",
  topic: "מחשבון",
  title: "מחשבון טיפ",
  subtitle: "float() + חישוב אחוזים",
  explain: "אפשר לחשב אחוזים בעזרת כפל וחילוק: אם החשבון יצא 100 ש״ח ורוצים טיפ של 10%, מחשבים 100 × 10 ÷ 100 – והתוצאה היא 10.",
  task: "קלטו מהמשתמש את סכום החשבון ואת אחוז הטיפ, חשבו כמה טיפ יצא, ואז הדפיסו את הסכום הכולל לתשלום.",
  hint: "tip = bill * percent / 100 ואז total = bill + tip",
  starter: `
bill = float(input("כמה יצא החשבון? "))
percent = float(input("כמה אחוז טיפ? "))
`,
  solution: `
bill = float(input("כמה יצא החשבון? "))
percent = float(input("כמה אחוז טיפ? "))

tip = bill * percent / 100
total = bill + tip

print("הטיפ הוא:", int(tip))
print("סה\"כ לתשלום:", int(total))
`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "איך מחשבים 15% מתוך סכום bill?",
    options: ["bill + 15", "bill * 15", "bill * 15 / 100", "bill / 15"],
    correctIndex: 2,
    explainCorrect: "אחוז מחשבים על ידי כפל וחילוק ב־100: bill * 15 / 100."
  }
},
{
  id: "typing_speed_test",
  group: "projects",
  topic: "זמן ושעה",
  title: "בדיקת מהירות הקלדה",
  subtitle: "time.time()",
  explain: "מודדים זמן בעזרת time.time() (שומרים זמן התחלה, מחכים שהמשתמש יקליד, ואז שומרים זמן סיום ומחשבים כמה זמן עבר).",
  task: "הציגו למשתמש משפט קצר להקלדה, מדדו כמה זמן לקח לו להקליד אותו, והדפיסו: לקח לך X שניות .",
  hint: "התחל למדוד זמן לפני הקלט של המשתמש, עצור את המדידה אחרי הקלט, וחישב את ההפרש בין הזמנים כדי לדעת כמה זמן לקח לו.",
  starter: `
import time

sentence = "אני אוהב פייתון"
print("הקלד/י את המשפט:")
print(sentence)

# כאן מודדים זמן ומקבלים קלט
`,
  solution: `
import time

sentence = "אני אוהב פייתון"
print("הקלד/י את המשפט:")
print(sentence)

start = time.time()
typed = input("הקלדה: ")
end = time.time()

timePass = end - start
print("לקח לך:", timePass, "שניות")
`,
  expectedOutput: null,
  fallback: {
    type: "quiz",
    question: "איזה ביטוי מחשב כמה זמן עבר בין end ל-start?",
    options: ["start - end", "end + start", "end - start", "start * end"],
    correctIndex: 2,
    explainCorrect: "כדי לחשב זמן שעבר מחסרים: end - start."
  }
},
  {
  id: "rock_paper_scissors",
  group: "projects",
  topic: "Random + תנאים",
  title: "אבן–נייר–מספריים",
  subtitle: "random.choice() + if",
  explain: "נשתמש ב־random כדי שהמחשב יבחר אבן/נייר/מספריים בצורה אקראית, ואז נשווה מול הבחירה של המשתמש בעזרת תנאים (if) כדי לקבוע ניצחון, הפסד או תיקו.",
  task: "קלטו מהמשתמש אבן/נייר/מספריים, תנו למחשב לבחור אקראית, הדפיסו את שתי הבחירות ואז הדפיסו את התוצאה: ניצחת / הפסדת / תיקו.",
  hint: "computer = random.choice([...]) ואז if user == computer -> תיקו, אחרת בדקו את שלושת מצבי הניצחון של המשתמש.",
  starter: `
import random

user = input("בחר/י אבן/נייר/מספריים: ")
computer = random.choice(["אבן", "נייר", "מספריים"])

print("אתה בחרת:", user)
print("המחשב בחר:", computer)

# כאן קובעים מי ניצח
`,
  solution: `
import random

user = input("בחר/י אבן/נייר/מספריים: ")
computer = random.choice(["אבן", "נייר", "מספריים"])

print("אתה בחרת:", user)
print("המחשב בחר:", computer)

if user == computer:
    print("תיקו")
elif (user == "אבן" and computer == "מספריים") or (user == "נייר" and computer == "אבן") or (user == "מספריים" and computer == "נייר"):
    print("ניצחת")
else:
    print("הפסדת")
`,
  expectedOutput: "מדפיס את הבחירה שלך, את בחירת המחשב, ואז ניצחת/הפסדת/תיקו",
  fallback: {
    type: "quiz",
    question: "מה הפקודה שמגרילה בחירה אקראית מתוך רשימה?",
    options: ["random.choice()", "random.randint()", "input()", "print()"],
    correctIndex: 0,
    explainCorrect: "random.choice() בוחרת פריט אקראי מתוך רשימה."
  }
},

  /* ======================
     SQL – 5 שאלונים + 5 fill (practice.html)
     ====================== */

  {
    id: "sql_quiz_1",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 1: מזה sql?",
    subtitle: "שאלון",
    explain: "",
    task: "בחרו את התשובה הנכונה.",
    hint: "",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "quiz",
      question: "מה זה SQL?",
      options: ["שפת ציור למשחקים", "שפה לעבודה עם בסיס נתונים", "שפת עיצוב אתרים", "מערכת הפעלה"],
      correctIndex: 1,
      explainCorrect: "SQL היא שפה שבעזרתה עובדים עם מידע בבסיס נתונים."
    }
  },

  {
    id: "sql_quiz_2",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 2: מזה בסיס נתונים?",
    subtitle: "שאלון",
    explain: "",
    task: "בחרו את התשובה הנכונה.",
    hint: "",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "quiz",
      question: "מה התיאור הכי נכון לבסיס נתונים?",
      options: ["משחק מחשב", "סרטון", "ציור", "מקום לשמור מידע בצורה מסודרת"],
      correctIndex: 3,
      explainCorrect: "בסיס נתונים שומר מידע בצורה מסודרת."
    }
  },

  {
    id: "sql_quiz_3",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 3: מהי commit",
    subtitle: "שאלון",
    explain: "",
    task: "בחרו את התשובה הנכונה.",
    hint: "",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "quiz",
      question: "מה עושה פקודת commit",
      options: ["מוחקת את בסיס הנתונים", "מוסיפה פריט חדש לבסיס הנתונים", "שומרת את השינויים שנעשו בבסיס הנתונים", "מביאה את התוצאות שבסיס הנתונים החזיר לנו"],
      correctIndex: 2,
      explainCorrect: "commit היא כמו סייב—שומרת את השינויים שעשינו בבסיס הנתונים."
    }
  },

  {
    id: "sql_quiz_4",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 4: מזה cursor",
    subtitle: "שאלון",
    explain: "",
    task: "בחרו את התשובה הנכונה.",
    hint: "",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "quiz",
      question: "למה משתמשים ב־cursor?",
      options: ["כדי לצייר", "כדי להדפיס", "כדי להפעיל משחק", "כדי להריץ פקודות SQL"],
      correctIndex: 3,
      explainCorrect: "cursor מאפשר להריץ פקודות על בסיס הנתונים (execute)."
    }
  },

  {
    id: "sql_quiz_5",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 5: מזה SELECT",
    subtitle: "שאלון",
    explain: "",
    task: "בחרו את התשובה הנכונה.",
    hint: "",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "quiz",
      question: "מה עושה SELECT?",
      options: ["מוחק מידע", "מוסיף מידע", "שולף מידע", "סוגר את המחשב"],
      correctIndex: 2,
      explainCorrect: "SELECT משמש לשליפת מידע מהטבלה."
    }
  },

  // ===== SQL fill (בנק מילים + חורים) =====

  {
    id: "sql_order_1",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 6: בונים שאילתה",
    subtitle: "SELECT בסיסי",
    explain: "נבנה שאילתת SELECT פשוטה.",
    task: "להציג את כל העמודות בטבלה (books).",
    hint: "קודם SELECT ואז FROM.",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "fill",
      promptParts: ["", " ", ""],
      blanks: [{ correct: "SELECT *" }, { correct: "FROM books;" }],
      bank: ["SELECT *", "FROM books;", "WHERE id = 1;", "INSERT INTO books"],
      explainCorrect: "קודם SELECT ואז FROM."
    }
  },

  {
    id: "sql_order_2",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 7: בונים שאילתה",
    subtitle: "SELECT עם עמודות",
    explain: "",
    task: "להציג רק את העמודות (title) ו-(author) מכל הרשומות בטבלה (books).",
    hint: "קודם SELECT ואז FROM.",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "fill",
      promptParts: ["", " ", ""],
      blanks: [{ correct: "SELECT title, author" }, { correct: "FROM books;" }],
      bank: ["SELECT title, author", "SELECT *", "FROM books;", "WHERE id = 1;"],
      explainCorrect: "קודם SELECT ואז FROM."
    }
  },

  {
    id: "sql_order_3",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 8: WHERE",
    subtitle: "סינון מידע",
    explain: "WHERE מסנן מידע לפי תנאי.",
    task: "להציג את הרשומה שה-(id) שלה שווה ל-(1) מתוך הטבלה (books).",
    hint: "WHERE מגיע אחרי FROM.",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "fill",
      promptParts: ["", " ", " ", ""],
      blanks: [{ correct: "SELECT *" }, { correct: "FROM books" }, { correct: "WHERE id = 1;" }],
      bank: ["SELECT *", "FROM books", "WHERE id = 1;", "VALUES (...);", "CREATE TABLE"],
      explainCorrect: "WHERE מגיע אחרי FROM."
    }
  },

  {
    id: "sql_order_4",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 9: INSERT",
    subtitle: "הוספת מידע",
    explain: "",
    task: "להוסיף רשומה חדשה לטבלה (books) עם ערכים חדשים.",
    hint: "קודם INSERT INTO ואז VALUES.",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "fill",
      promptParts: ["", " ", ""],
      blanks: [{ correct: "INSERT INTO books" }, { correct: "VALUES (...);" }],
      bank: ["INSERT INTO books", "VALUES (...);", "SELECT *", "FROM books;"],
      explainCorrect: "קודם INSERT INTO ואז VALUES."
    }
  },

  {
    id: "sql_order_5",
    group: "grade3",
    topic: "SQL",
    title: "שאלה 10: CREATE TABLE",
    subtitle: "יצירת טבלה",
    explain: "",
    task: "ליצור טבלה חדשה בשם (books) עם .",
    hint: "קודם CREATE TABLE ואז שם הטבלה.",
    mode: "practiceOnly",
    starter: "",
    solution: "",
    expectedOutput: null,
    fallback: {
      type: "fill",
      promptParts: ["", " ", ""],
      blanks: [{ correct: "CREATE TABLE" }, { correct: "books;" }],
      bank: ["CREATE TABLE", "books;", "INSERT INTO books", "VALUES (...);"],
      explainCorrect: "קודם CREATE TABLE ואז שם הטבלה."
    }
  }
];
