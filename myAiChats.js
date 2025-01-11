export const chats = [
  {
    message:
      "Hey there! 👋 <br/><br/>I'm Erni, your friendly AI buddy here to help you make money online while having some fun. 😄 <br/><br/>Let’s go through a quick questionnaire to get to know you better. <br/><br/>It’ll be fast and fun — I promise! <br/><br/>Ready? 😎",
    me: false,
    seen: true,
    responseElement: ["button", "I'm ready!"],
  },
  {
    message: "Awesome!",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message:
      "<p>First things first :)<br/><br/><span>I’m <b>Erni</b></span><br/><br/>What's your name?</p>",
    me: false,
    seen: true,
    responseElement: ["freeText", "Enter your name here"],
  },
  {
    message: "Great to meet you, [user name]!",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message:
      "I’ve got a feeling we’re going to make an awesome team🤝 <br>What’s your gender?",
    me: false,
    seen: true,
    responseElement: ["singleSelect", ["Male", "Female", "I’d rather not say"]],
  },
  {
    message: "Got it!<br/>Diversity is what makes the world go round.🌍",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What state are you from?",
    me: false,
    seen: true,
    responseElement: ["freeText", "Type-in your location"],
  },
  {
    message: "Great! Tasks tailored to your location will be prioritized. 🌎",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What’s your age range?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      ["Under 18", "18–24", "25–34", "35–44", "45+", "I’d rather not say"],
    ],
  },
  {
    message:
      "Got it! Age is just a number, but it helps me customize your tasks. 🎉",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What’s your yearly income?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      [
        "Below $20,000",
        "$20,000 – $50,000",
        "$50,000 – $100,000",
        "Above $100,000",
        "I’d rather not say",
      ],
    ],
  },
  {
    message:
      "Thanks for sharing! Let’s tailor opportunities that match your goals.💰",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What kind of tasks sound fun to you?",
    me: false,
    seen: true,
    responseElement: [
      "multiSelect",
      [
        "Playing games 🎮",
        "Answering surveys",
        "Testing new apps📱",
        "Social media tasks 👍",
        "Product reviews/promotions🛍️",
        "Other (Type your answer)",
      ],
    ],
  },
  {
    message:
      "Oh, I love those!<br/>I’ve got the perfect tasks lined up for you.",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What kind of tasks sound fun to you?",
    me: false,
    seen: true,
    responseElement: [
      "multiSelect",
      [
        "Among us",
        "Call Of Duty",
        "Genshin Impact",
        "Pokémon GO",
        "MARVEL SNAP",
        "League of Legends: Wild Rift",
        "Clash Royale",
        "Fortnite",
        "Two Dots",
        "Toon Blast",
        "Woodoku",
        "Wordscapes",
        "Subway Surfers",
        "PUBG Mobile",
        "Raid: Shadow Legends",
        "Candy Crush Saga",
        "Royale Match",
      ],
    ],
  },
  {
    message: "Wow, we have similar preferences 👏",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
];

export const questionsAfterSix = [
  {
    message: "Wow, we have similar preferences 👏",
    me: false,
    seen: true,
    optionSelected: "optionA",
    responseElement: [
      "multiSelect",
      [
        "Among us",
        "Call Of Duty",
        "Genshin Impact",
        "Pokémon GO",
        "MARVEL SNAP",
        "League of Legends: Wild Rift",
        "Clash Royale",
        "Fortnite",
        "Two Dots",
        "Toon Blast",
        "Woodoku",
        "Wordscapes",
        "Subway Surfers",
        "PUBG Mobile",
        "Raid: Shadow Legends",
        "Candy Crush Saga",
        "Royale Match",
      ],
    ],
  },
  {
    message: "Wow, we have similar preferences 👏",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What type of surveys do you prefer?",
    me: false,
    seen: true,
    optionSelected: "optionB",
    responseElement: [
      "singleSelect",
      [
        "Opinion-based surveys",
        "Product feedback surveys",
        "Market research surveys",
        "Social issue surveys",
      ],
    ],
  },
  {
    message: "What type of surveys do you prefer?",
    me: false,
    seen: true,
    optionSelected: "optionB",
    responseElement: [
      "singleSelect",
      [
        "Opinion-based surveys",
        "Product feedback surveys",
        "Market research surveys",
        "Social issue surveys",
      ],
    ],
  },
  {
    message:
      "Are you comfortable testing apps that are still in beta? Giving feedback and finding issues?",
    me: false,
    seen: true,
    optionSelected: "optionC",
    responseElement: ["singleSelect", ["Yes", "No"]],
  },
  {
    message: "How many followers do you have on social media?",
    me: false,
    seen: true,
    optionSelected: "optionD",
    responseElement: [
      "singleSelect",
      ["Less than 500", "500–1,000", "1,000–10,000", "Over 10,000"],
    ],
  },
  {
    message: "Wow, [selected range]? Let’s turn your reach into earnings! 📣",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "How many followers do you have on social media?",
    me: false,
    seen: true,
    optionSelected: "optionD",
    responseElement: [
      "singleSelect",
      ["Less than 500", "500–1,000", "1,000–10,000", "Over 10,000"],
    ],
  },
  {
    message: "Would you like to earn through affiliate marketing tasks?",
    me: false,
    seen: true,
    optionSelected: "optionD",
    responseElement: ["singleSelect", ["Yes", "No"]],
  },
  {
    message: "Awesome! Affiliate marketing could be your next big thing. 💼",
    me: false,
    seen: true,
    optionSelected: "optionD",
    responseElement: ["noResponse"],
  },
  {
    message: "Would you participate in mystery shopping tasks?",
    me: false,
    seen: true,
    optionSelected: "optionE",
    responseElement: ["singleSelect", ["Yes", "No"]],
  },
  {
    message: "Great! Mystery shopping sounds like an adventure, doesn’t it? 🛍️",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What other online tasks thrill you?",
    me: false,
    seen: true,
    optionSelected: "optionF",
    responseElement: ["freeText", "Enter tasts here..."],
  },
  {
    message: "Interesting, if an opportunity pops up, I’ll share it with you!",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
];

export const chatsContinued = [
  {
    message: "How much time can you dedicate to tasks each day?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      [
        "Less than 30 minutes ⏱️",
        "30 minutes to 1 hour 🕒",
        "1-2 hours 🕑",
        "More than 2 hours ⏰",
      ],
    ],
  },
  {
    message:
      "Cool! We'll make the most of it whether you’ve got a little time or a lot.<br/>Time is money, right? 💸",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What kind of rewards would you like to earn?",
    me: false,
    seen: true,
    responseElement: [
      "multiSelect",
      [
        "Gift cards 🎁",
        "PayPal 💵",
        "Bank transfer 🏦",
        "Crypto 💎",
        "Cashback 💳",
        "Discounts 🛍️",
      ],
    ],
  },
  {
    message: "Interesting, great choice!",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "Do you prefer receiving rewards weekly or monthly?",
    me: false,
    seen: true,
    responseElement: ["singleSelect", ["Weekly", "Monthly", "I don’t mind"]],
  },
  {
    message: "Noted! I’ll keep it in mind",
    me: false,
    seen: true,
    responseElement: ["noReponse"],
  },
  {
    message: "Mind sharing your hobbies and interests?",
    me: false,
    seen: true,
    responseElement: [
      "multiSelect",
      [
        "Playing video games",
        "Reading books",
        "Social media engagement",
        "Fitness and outdoor activities",
        "Watching movies or series",
      ],
    ],
  },
  {
    message:
      "Nice picks! It's awesome to see what you enjoy <br/>Those hobbies say a lot about your unique personality! 😊",
    me: false,
    seen: true,
    responseElement: ["noReponse"],
  },
  {
    message: "Mind sharing your hobbies and interests?",
    me: false,
    seen: true,
    responseElement: [
      "multiSelect",
      [
        "Playing video games",
        "Reading books",
        "Social media engagement",
        "Fitness and outdoor activities",
        "Watching movies or series",
      ],
    ],
  },
  {
    message:
      "Nice picks! It's awesome to see what you enjoy<br/>Those hobbies say a lot about your unique personality! 😊",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What motivates you to complete tasks?",
    me: false,
    seen: true,
    responseElement: [
      "multiSelect",
      [
        "Earning money",
        "Gaining rewards like gift cards or cashback",
        "Learning and self-improvement",
        "Enjoying fun activities",
      ],
    ],
  },
  {
    message:
      "Motivation is everything!<br/>I’ll make sure we focus on what keeps you going. 🚀",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message:
      "What is your ideal reward amount per task, considering its complexity?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      ["Less than $5", "$5-$10", "$10-$20", "Above $20"],
    ],
  },
  {
    message:
      "What time during the day is preferable for you to accomplish tasks?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      ["Morning", "Afternoon", "Evening", "Night"],
    ],
  },
  {
    message: "Perfect! We’ll line up tasks to match your schedule. 🌟",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "Where do you typically find yourself accomplishing tasks?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      ["At home", "At work", "While commuting", "Other (Type your answer)"],
    ],
  },
  {
    message:
      "Multi-tasking genius! Let’s optimize your setup wherever you are.",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "What would be the ideal monthly income of your rewards side gig?",
    me: false,
    seen: true,
    responseElement: [
      "singleSelect",
      ["Less than $50", "$50-$100", "$100-$300", "Above $300"],
    ],
  },
  {
    message: "Nice goal! Let’s hit that target. 🤑",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
  {
    message: "After testing, would you refer me to friends and family?",
    me: false,
    seen: true,
    responseElement: [
      "singleResponse",
      ["Sure", "I’m still not sure", "Only if it’s a paid gig"],
    ],
  },
  {
    message:
      "Yay! Thanks for spreading the word. Let’s make it worthwhile for everyone.",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
];

export const questionsAfter23 = [
  {
    message:
      "How many people in your circle do you think would be interested in my service?",
    me: false,
    seen: true,
    optionSelected: "option_A_or_C",
    responseElement: ["singleSelect", ["1-2", "2-5", "5-10", "More than 10"]],
  },
];

export const chatsContinued2 = [
  {
    message:
      "Are you engaging with different apps or websites for making money online?",
    me: false,
    seen: true,
    optionSelected: "optionB",
    responseElement: ["singleSelect", ["Yes", "No"]],
  },
  {
    message:
      "Got it! Let’s see how Erni can make things even better for you. 🌟",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
];

export const questionsAfter25 = [
  {
    message: "What are your favorite ones?",
    me: false,
    seen: true,
    optionSelected: "optionA",
    responseElement: [
      "multiSelect",
      [
        "Mistplay",
        "Freecash",
        "Exmox",
        "Fetch",
        "Cash Giraffe",
        "Rewarded Play",
        "JustPlay",
        "Swagbucks",
      ],
    ],
  },
  {
    message: "Any other apps or websites you like?",
    me: false,
    seen: true,
    optionSelected: "optionA",
    responseElement: ["freeText", "write your answer here"],
  },
];

export const chatsEnd = [
  {
    message: "How much money did you make with these apps combined so far?",
    me: false,
    seen: true,
    optionSelected: "optionA",
    responseElement: [
      "singleSelect",
      ["Less than $50", "$50-$100", "$100-$250", "$250-$500", "Above $500"],
    ],
  },
  {
    message: "What are you expecting to get from my service?",
    me: false,
    seen: true,
    optionSelected: "optionA",
    responseElement: [
      "singleSelect",
      [
        "Extra income",
        "Easy and fun activities",
        "Flexibility in earning opportunities",
        "I simply love the challenge",
        "All of the above",
      ],
    ],
  },
  {
    message: "That’s awesome, we’re almost there!",
    me: false,
    seen: true,
    responseElement: ["noResponse"],
  },
];
