export const chats = (username = "", followerRange = "") => [
  {
    message: "Hey there!👋.",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "a20e79ba-d5c9-43ee-9a28-3c403648837f",
  },
  {
    message:
      "I'm Erni, your friendly AI buddy here to help you make money online while having some fun. 😄",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "4ff5f290-02b1-48d8-9696-b89b9c483984",
  },
  {
    message:
      "Let’s go through a quick questionnaire to get to know you better.",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "013765ca-d4fe-41a1-8a06-cb888188653f",
  },
  {
    message: "It’ll be fast and fun — I promise! 😎",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "6fd1719d-3d43-45d4-866d-fb454c356e19",
  },
  {
    message: "Ready?",
    me: false,
    seen: false,
    responseElement: ["button", "I'm ready!"],
    sysMsgId: "8338f7b2-e292-46e2-9c71-7bd0981c2474",
  },
  {
    message: "Awesome!",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "7f5d91af-00cc-4a1b-8c66-3662b2f33f00",
  },
  {
    message: "First things first :)",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "7f313232-ec1b-466b-9b6d-8f5a55861933",
  },
  {
    message: "I’m Erni. What's your name?",
    me: false,
    seen: false,
    responseElement: ["freeText", "Enter your name here", "name"],
    sysMsgId: "5fc40719-8a91-4988-875c-e4faa5130bbf",
  },
  {
    message: `Great to meet you, ${username}!`,
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "a7f98a60-5902-4067-a925-c104cb614b98",
  },
  {
    message: "I’ve got a feeling we’re going to make an awesome team🤝",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "3ff8c6f9-2ae0-4161-965f-ae54d0dd67dd",
  },
  {
    message: "What’s your gender?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Male", "Female", "I’d rather not say"],
      "gender",
    ],
    sysMsgId: "3ff8c6f9-2ae0-4161-965f-ae54d02567dd",
  },
  {
    message: "Got it!",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "2457f7d6-a080-413e-94a4-1a8de68cc5d9",
  },
  {
    message: "Diversity is what makes the world go round.🌍",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "3866c9d6-a080-413e-94a4-1a8de68cc5d9",
  },
  {
    message: "What state are you from?",
    me: false,
    seen: false,
    responseElement: ["freeText", "Type-in your location", "location"],
    sysMsgId: "98792e91-8ebd-40f0-8902-8da37c0b8fca",
  },
  {
    message: "Great! Tasks tailored to your location will be prioritized. 🌎",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "823f4da7-06ca-4b3f-a8c6-5477d2a173b5",
  },
  {
    message: "What’s your age range?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Under 18", "18–24", "25–34", "35–44", "45+", "I’d rather not say"],
      "age",
    ],
    sysMsgId: "64c6d3dd-5747-40fd-814e-6585cf4a5b84",
  },
  {
    message:
      "Got it! Age is just a number, but it helps me customize your tasks. 🎉",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "924f1b73-0bfb-44a6-951b-d7d750663960",
  },
  {
    message: "What’s your yearly income?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      [
        "Below $20,000",
        "$20,000 – $50,000",
        "$50,000 – $100,000",
        "Above $100,000",
        "I’d rather not say",
      ],
      "income",
    ],
    sysMsgId: "3b272188-2f3f-4cb2-9a51-299472290e5a",
  },
  {
    message:
      "Thanks for sharing! Let’s tailor opportunities that match your goals.💰",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "723ad731-34ad-4e49-8b30-832ddf4cec91",
  },
  {
    message: "What kind of tasks sound fun to you?",
    me: false,
    seen: false,
    name: "funTask1",
    responseElement: [
      "multiSelect",
      [
        { task: "Playing games 🎮", checked: false, value: "playingGames" },
        {
          task: "Answering surveys",
          checked: false,
          value: "answeringSurveys",
        },
        { task: "Testing new apps📱", checked: false, value: "testingNewApps" },
        {
          task: "Social media tasks 👍",
          checked: false,
          value: "socialMediaTasks",
        },
        {
          task: "Product reviews/promotions🛍️",
          checked: false,
          value: "productReview",
        },
        {
          task: "Other (Type your answer)",
          checked: false,
          value: "otherTasks",
        },
      ],
      "kindOfTasks",
    ],
    sysMsgId: "7050a7f1-40fb-46a5-ac83-a22eb11e16c6",
  },
  {
    message: "Oh, I love those! I’ve got the perfect tasks lined up for you.",
    me: false,
    seen: false,
    responseElement: [
      "image",
      [
        "clap",
        "Oh, I love those! I’ve got the perfect tasks lined up for you.",
      ],
      "myGif",
    ],
    sysMsgId: "4e69cdd9-2381-43ad-98e4-2090634b7b70",
  },
  {
    message: "Select your favorite games!",
    me: false,
    seen: false,
    name: "funTask2",
    responseElement: [
      "multiSelect",
      [
        { task: "Among us", checked: false, value: "amongUs" },
        { task: "Call Of Duty", checked: false, value: "callOfDuty" },
        { task: "Genshin Impact", checked: false, value: "genshinImpact" },
        { task: "Pokémon GO", checked: false, value: "pokemonGo" },
        { task: "MARVEL SNAP", checked: false, value: "marvelSnap" },
        {
          task: "League of Legends: Wild Rift",
          checked: false,
          value: "leagueOfLegends",
        },
        { task: "Clash Royale", checked: false, value: "clashRoyale" },
        { task: "Fortnite", checked: false, value: "fortNite" },
        { task: "Two Dots", checked: false, value: "twoDots" },
        { task: "Toon Blast", checked: false, value: "toonBlast" },
        { task: "Woodoku", checked: false, value: "woodoku" },
        { task: "Wordscapes", checked: false, value: "wordscapes" },
        { task: "Subway Surfers", checked: false, value: "subwaySurfers" },
        { task: "PUBG Mobile", checked: false, value: "pubgMobile" },
        { task: "Raid: Shadow Legends", checked: false, value: "raid" },
        { task: "Candy Crush Saga", checked: false, value: "candyCrush" },
        { task: "Royale Match", checked: false, value: "royaleMatch" },
      ],
      "funTasksTypes",
    ],
    sysMsgId: "0ff5063e-9f6b-441f-8a5d-057ebf87acb3",
  },
  {
    message: "Wow, we have similar preferences 👏",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "1d5d7474-5d6b-40c4-a246-fc4c1159fca5",
  },
];

export const questionsAfterSix = (followerRange = "") => [
  {
    message: "Wow, we have similar preferences 👏",
    me: false,
    seen: false,
    optionSelected: "optionA",
    responseElement: ["noResponse"],
    sysMsgId: "c8f862bd-0115-41df-9c0a-104f3192aed6",
  },
  {
    message: "Wow, we have similar preferences 👏",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "58982e8f-33fc-4ee9-9451-ce92f67e3c3d",
  },
  {
    message: "What type of surveys do you prefer?",
    me: false,
    seen: false,
    optionSelected: "optionB",
    responseElement: [
      "singleSelect",
      [
        "Opinion-based surveys",
        "Product feedback surveys",
        "Market research surveys",
        "Social issue surveys",
      ],
      "surveyTypes",
    ],
    sysMsgId: "eb63f669-6715-42da-adde-b587818b9517",
  },
  {
    message:
      "Are you comfortable testing apps that are still in beta? Giving feedback and finding issues?",
    me: false,
    seen: false,
    optionSelected: "optionC",
    responseElement: ["singleSelect", ["Yes", "No"], "giveFeedback"],
    sysMsgId: "bc49093c-5842-4ac5-97d8-ff886810be4f",
  },
  {
    message: "How many followers do you have on social media?",
    me: false,
    seen: false,
    optionSelected: "optionD",
    responseElement: [
      "singleSelect",
      ["Less than 500", "500–1,000", "1,000–10,000", "Over 10,000"],
      "followerRange",
    ],
    sysMsgId: "594c4319-9db9-42ab-9c09-f53123b96a37",
  },
  {
    message: `Wow, ${followerRange}? Let’s turn your reach into earnings! 📣`,
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "0675bdb6-066b-4bf6-9be7-209f7c167952",
  },
  {
    message: "Would you like to earn through affiliate marketing tasks?",
    me: false,
    seen: false,
    optionSelected: "optionD",
    responseElement: ["singleSelect", ["Yes", "No"], "affliateEarn"],
    sysMsgId: "1d1c582b-fb4c-4e86-876a-24f213f472cc",
  },
  {
    message: "Awesome! Affiliate marketing could be your next big thing. 💼",
    me: false,
    seen: false,
    optionSelected: "optionD",
    responseElement: ["noResponse"],
    sysMsgId: "eb256399-ebb2-40bf-ba31-91de0f454264",
  },
  {
    message: "Would you participate in mystery shopping tasks?",
    me: false,
    seen: false,
    optionSelected: "optionE",
    responseElement: ["singleSelect", ["Yes", "No"], "mysteryShoppingTask"],
    sysMsgId: "eaa7fb4c-a59f-4c45-9f8b-c7b9330a4338",
  },
  {
    message: "Great! Mystery shopping sounds like an adventure, doesn’t it? 🛍️",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "721d0665-49df-461b-9e40-6b497626d3c3",
  },
  {
    message: "What other online tasks thrill you?",
    me: false,
    seen: false,
    optionSelected: "optionF",
    responseElement: ["freeText", "Enter tasts here...", "myOnlineTask"],
    sysMsgId: "10dba057-38ac-4b40-8078-3e93404f1582",
  },
  {
    message: "Interesting, if an opportunity pops up, I’ll share it with you!",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "0c8e655b-fcfc-47a6-b171-a4eb4e810898",
  },
];

export const chatsContinued = [
  {
    message: "How much time can you dedicate to tasks each day?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      [
        "Less than 30 minutes ⏱️",
        "30 minutes to 1 hour 🕒",
        "1-2 hours 🕑",
        "More than 2 hours ⏰",
      ],
      "timeDedication",
    ],
    sysMsgId: "30fbb25b-50bb-4737-b767-35b76c36a51b",
  },
  {
    message:
      "Cool! We'll make the most of it whether you’ve got a little time or a lot.",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "4egr1e72e-3629-440a-ad6c-e40d602bcde1",
  },
  {
    message: "Time is money, right? 💸",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "4db1e72e-3629-440a-ad6c-e40d602bcde1",
  },
  {
    message: "What kind of rewards would you like to earn?",
    me: false,
    seen: false,
    name: "rewardKind",
    responseElement: [
      "multiSelect",
      [
        { task: "Gift cards 🎁", checked: false },
        { task: "PayPal 💵", checked: false },
        { task: "Bank transfer 🏦", checked: false },
        { task: "Crypto 💎", checked: false },
        { task: "Cashback 💳", checked: false },
        { task: "Discounts 🛍️", checked: false },
      ],
      "rewardType",
    ],
    sysMsgId: "cb7f85fd-5fa0-4f0f-946f-f06228a8b686",
  },
  {
    message: "Interesting, great choice!",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "3c71b007-03af-438b-9c58-c8c58a1efe6b",
  },
  {
    message: "Do you prefer receiving rewards weekly or monthly?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Weekly", "Monthly", "I don’t mind"],
      "rewardTimePeriod",
    ],
    sysMsgId: "6c95bcf1-8096-45db-be23-6b9a253a6a5a",
  },
  {
    message: "Noted! I’ll keep it in mind",
    me: false,
    seen: false,
    responseElement: ["noReponse"],
    sysMsgId: "61482959-2124-4be1-9306-f93a35afa5ed",
  },
  {
    message: "Mind sharing your hobbies and interests?",
    me: false,
    seen: false,
    name: "shareHobbies1",
    responseElement: [
      "multiSelect",
      [
        { task: "Playing video games", checked: false },
        { task: "Reading books", checked: false },
        { task: "Social media engagement", checked: false },
        { task: "Fitness and outdoor activities", checked: false },
        { task: "Watching movies or series", checked: false },
      ],
      "shareHobbies1",
    ],
    sysMsgId: "8fea5c1b-82df-4c8e-a6a6-0cd7f637bfa4",
  },
  {
    message:
      "Nice picks! It's awesome to see what you enjoy <br/>Those hobbies say a lot about your unique personality! 😊",
    me: false,
    seen: false,
    responseElement: ["noReponse"],
    sysMsgId: "a651a5eb-3c68-4751-9384-ad8ce8486daa",
  },
  {
    message: "Mind sharing your hobbies and interests?",
    me: false,
    seen: false,
    responseElement: [
      "multiSelect",
      [
        { task: "Reading books", checked: false },
        { task: "Social media engagement", checked: false },
        { task: "Fitness and outdoor activities", checked: false },
        { task: "Watching movies or series", checked: false },
        { task: "Playing video games", checked: false },
      ],
      "shareHobbies2",
    ],
    sysMsgId: "ce66b403-38f0-4995-8c82-1b178b5a7408",
  },
  {
    message:
      "Nice picks! It's awesome to see what you enjoy<br/>Those hobbies say a lot about your unique personality! 😊",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "201aee76-1d20-48b0-8424-3a2a07a71673",
  },
  {
    message: "What motivates you to complete tasks?",
    me: false,
    seen: false,
    responseElement: [
      "multiSelect",
      [
        { task: "Earning money", checked: false },
        { task: "Gaining rewards like gift cards or cashback", checked: false },
        { task: "Learning and self-improvement", checked: false },
        { task: "Enjoying fun activities", checked: false },
      ],
      "taskMotivation",
    ],
    sysMsgId: "14443648-234e-4f69-bed0-a2c89fd7881f",
  },
  {
    message: "Motivation is everything!",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "8c1f0e3b-5976-4d85-9dac-e74a47badcf4",
  },
  {
    message: "I’ll make sure we focus on what keeps you going. 🚀",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "9d2f1e3c-5976-4d86-9dad-e74a47baddf4",
  },
  {
    message:
      "What is your ideal reward amount per task, considering its complexity?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Less than $5", "$5-$10", "$10-$20", "Above $20"],
      "complexity",
    ],
    sysMsgId: "3822ff82-e225-4dc3-80ac-a00b9adc2ff7",
  },
  {
    message:
      "What time during the day is preferable for you to accomplish tasks?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Morning", "Afternoon", "Evening", "Night"],
      "dayTimePreference",
    ],
    sysMsgId: "5673ad92-b9b9-48f4-9d3c-06e03555f57b",
  },
  {
    message: "Perfect! We’ll line up tasks to match your schedule. 🌟",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "bdb01fde-3afd-491b-8da3-0df151cdf590",
  },
  {
    message: "Where do you typically find yourself accomplishing tasks?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["At home", "At work", "While commuting", "Other (Type your answer)"],
      "locationToPerformTasks",
    ],
    sysMsgId: "5f9d525a-50ac-4430-9af0-a40b4c33f03b",
  },
  {
    message:
      "Multi-tasking genius! Let’s optimize your setup wherever you are.",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "11dc8955-bde8-4dd1-b465-be323f443e90",
  },
  {
    message: "What would be the ideal monthly income of your rewards side gig?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Less than $50", "$50-$100", "$100-$300", "Above $300"],
      "sideGigsRewards",
    ],
    sysMsgId: "40021b9c-5e53-4894-b37b-4a0bf31d291a",
  },
  {
    message: "Nice goal! Let’s hit that target. 🤑",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "9fd586ea-d5e9-4472-8784-6c3df84bc9c9",
  },
  {
    message: "After testing, would you refer me to friends and family?",
    me: false,
    seen: false,
    responseElement: [
      "singleSelect",
      ["Sure", "I’m still not sure", "Only if it’s a paid gig"],
      "wishToReferFriends",
    ],
    sysMsgId: "627ca825-aeed-4ba1-a9a2-ef95b000420b",
  },
  {
    message:
      "Yay! Thanks for spreading the word. Let’s make it worthwhile for everyone.",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "5941fb52-ead4-4517-ac39-3f9a2529e80d",
  },
];

export const questionsAfter23 = [
  {
    message:
      "How many people in your circle do you think would be interested in my service?",
    me: false,
    seen: false,
    optionSelected: "option_A_or_C",
    responseElement: [
      "singleSelect",
      ["1-2", "2-5", "5-10", "More than 10"],
      "intrestedCircles",
    ],
    sysMsgId: "3599b68f-2e2a-4354-ac22-20301d7b73c3",
  },
];

export const chatsContinued2 = [
  {
    message:
      "Are you engaging with different apps or websites for making money online?",
    me: false,
    seen: false,
    optionSelected: "optionB",
    responseElement: ["singleSelect", ["Yes", "No"], "doYouEngageOtherApps"],
    sysMsgId: "8d9500b9-aa67-4347-bd4b-f52cb983f90a",
  },
  {
    message:
      "Got it! Let’s see how Erni can make things even better for you. 🌟",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "25bd43d2-4b0b-4429-af0e-3f1a416f7f6a",
  },
];

export const questionsAfter25 = [
  {
    message: "What are your favorite ones?",
    me: false,
    seen: false,
    optionSelected: "optionA",
    responseElement: [
      "multiSelect",
      [
        { task: "Mistplay", checked: false },
        { task: "Freecash", checked: false },
        { task: "Exmox", checked: false },
        { task: "Fetch", checked: false },
        { task: "Rewarded Play", checked: false },
        { task: "JustPlay", checked: false },
        { task: "Swagbucks", checked: false },
      ],
      "favoriteTasks",
    ],
    sysMsgId: "e168a168-2339-43aa-b59e-42bc6b209b28",
  },
  {
    message: "Any other apps or websites you like?",
    me: false,
    seen: false,
    optionSelected: "optionA",
    responseElement: [
      "freeText",
      "write your answer here",
      "appChoice",
      "otherLovedApps",
    ],
    sysMsgId: "3095166f-5788-4546-bcdc-59e3a977d2bb",
  },
];

export const chatsEnd = [
  {
    message: "How much money did you make with these apps combined so far?",
    me: false,
    seen: false,
    optionSelected: "optionA",
    responseElement: [
      "singleSelect",
      ["Less than $50", "$50-$100", "$100-$250", "$250-$500", "Above $500"],
      "earnedMoneySoFar",
    ],
    sysMsgId: "78169365-0809-482f-9848-7d2ee95e4292",
  },
  {
    message: "What are you expecting to get from my service?",
    me: false,
    seen: false,
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
      "whatYouExpectFromService",
    ],
    sysMsgId: "21e76840-bd98-4aaa-839d-4bbd5562b974",
  },
  {
    message: "That’s awesome, we’re almost there!",
    me: false,
    seen: false,
    responseElement: ["noResponse"],
    sysMsgId: "a6b754b3-b489-4c29-bb33-761e3992a7eb",
  },
];
