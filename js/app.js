
"use strict";

// ========================================
// PICK ONE - GAME LOGIC
// ========================================

const games = {
    truth: {
        title: "Truth or Dare",
        emoji: "🎭",
        subtitle: "Spill the tea or take the challenge.",
        prompts: {
            Truth: [
                "What's the most embarrassing thing you've done in public?",
                "Who was your first crush?",
                "What's a secret talent nobody knows about?",
                "What's the funniest lie you've ever told?",
                "What's one thing you'd change about your past?",
                "What's the weirdest dream you've ever had?",
                "What's something you pretend to like but actually don't?",
                "What's the most childish thing you still do?"
            ],
            Dare: [
                "Do your best celebrity impression for 20 seconds.",
                "Sing the chorus of your favourite song.",
                "Talk in a funny accent for the next two rounds.",
                "Dance without music for 15 seconds.",
                "Make up a funny nickname for everyone playing.",
                "Act like a news reporter announcing today's events.",
                "Say the alphabet backwards as far as you can.",
                "Give a dramatic movie-style speech about your favourite snack."
            ]
        }
    },

    thisorthat: {
        title: "This or That",
        emoji: "⚡",
        subtitle: "Two choices. Pick your side!",
        prompts: [
            ["Beach 🏖️", "Mountains 🏔️"],
            ["Pizza 🍕", "Burger 🍔"],
            ["Texting 💬", "Calling 📞"],
            ["Sunrise 🌅", "Sunset 🌇"],
            ["Movies 🎬", "Web series 📺"],
            ["Sweet 🍰", "Spicy 🌶️"],
            ["Stay in 🏠", "Go out 🎉"],
            ["Instagram 📸", "YouTube ▶️"],
            ["Summer ☀️", "Winter ❄️"],
            ["Cats 🐱", "Dogs 🐶"],
            ["Past ⏳", "Future 🚀"],
            ["Money 💰", "Free time 🕰️"],
            ["K-pop 🎤", "Tamil songs 🎶"],
            ["Plan everything 📝", "Be spontaneous 🎲"],
            ["Invisible 👻", "Read minds 🧠"]
        ]
    },

    wouldyourather: {
        title: "Would You Rather",
        emoji: "🤔",
        subtitle: "Impossible choices. Defend your answer!",
        prompts: [
            "Would you rather be able to teleport anywhere or fly?",
            "Would you rather know every language or play every instrument?",
            "Would you rather relive your best day or skip your worst day?",
            "Would you rather have unlimited food or unlimited travel?",
            "Would you rather be famous for a talent or anonymous and rich?",
            "Would you rather always be 10 minutes late or 20 minutes early?",
            "Would you rather give up social media or streaming services?",
            "Would you rather live near the beach or in the mountains?",
            "Would you rather read minds or see the future?",
            "Would you rather have a rewind button or a pause button for life?",
            "Would you rather have your dream job or travel the world for a year?",
            "Would you rather never use your phone for a week or never watch TV for a month?",
            "Would you rather have a personal chef or a personal driver?",
            "Would you rather be able to talk to animals or speak every human language?",
            "Would you rather have an extra hour every day or an extra day every month?"
        ]
    },

    never: {
        title: "Never Have I Ever",
        emoji: "🙈",
        subtitle: "Raise a hand, share a story, and keep it friendly.",
        prompts: [
            "Never have I ever pretended to understand something when I didn't.",
            "Never have I ever laughed at the wrong moment.",
            "Never have I ever stalked someone's public profile.",
            "Never have I ever sent a message to the wrong person.",
            "Never have I ever forgotten someone's name immediately after meeting them.",
            "Never have I ever practised a conversation in my head.",
            "Never have I ever watched an entire series in one day.",
            "Never have I ever blamed something on the internet connection.",
            "Never have I ever taken more than 20 selfies for one photo.",
            "Never have I ever stayed awake all night watching videos.",
            "Never have I ever waved back at someone who wasn't waving at me.",
            "Never have I ever made up an excuse to cancel plans.",
            "Never have I ever forgotten why I walked into a room.",
            "Never have I ever sung confidently while getting the lyrics wrong.",
            "Never have I ever laughed so hard that I cried."
        ]
    },

    quickfire: {
        title: "Quick Fire",
        emoji: "🔥",
        subtitle: "Answer fast. No overthinking allowed!",
        prompts: [
            "One word to describe your best friend?",
            "Your most-used emoji?",
            "Your comfort food?",
            "A song you can listen to on repeat?",
            "Your dream travel destination?",
            "One thing you cannot live without?",
            "Your favourite fictional character?",
            "Your biggest pet peeve?",
            "An app you open every day?",
            "Your favourite childhood memory?",
            "One superpower you'd choose?",
            "A movie you can quote from memory?",
            "Your dream job in one word?",
            "The funniest person in this group?",
            "One thing that instantly improves your mood?",
            "Your go-to excuse for being late?",
            "A food combination you secretly love?",
            "Your favourite time of day?"
        ]
    },

    charades: {
        title: "Tamil Charades",
        emoji: "🎭",
        subtitle: "Act out a Tamil movie or song without speaking!"
    },

    emojichallenge: {
        title: "Tamil Emoji Challenge",
        emoji: "🤯",
        subtitle: "Decode title words, initials, and clear movie or song clues."
    },

    songquiz: {
        title: "Tamil Song ID",
        emoji: "🎧",
        subtitle: "Hum a tune, decode a clue, and name that Tamil hit!"
    },

    titlechain: {
        title: "Tamil Title Chain",
        emoji: "🔗",
        subtitle: "Enter a Tamil movie or song that starts with the required letter."
    },

    dialogue: {
        title: "Kollywood Quickfire",
        emoji: "🎙️",
        subtitle: "Quick Tamil cinema trivia. Type your answer and check it!",
        prompts: [
            { question: "Which film features the character Senapathy?", answer: "Indian" },
            { question: "In which film does a school teacher called JD face off with Bhavani?", answer: "Master" },
            { question: "Which film follows a retired jailer named Muthuvel Pandian?", answer: "Jailer" },
            { question: "Which Mani Ratnam film follows Karthik and Jessie?", answer: "Vinnaithaandi Varuvaayaa" },
            { question: "Which film has the unforgettable line of a friendship between Anbarasu and Nallasivam?", answer: "Anbe Sivam" },
            { question: "Which film follows a group of friends reuniting after school, including Ram and Jaanu?", answer: "96" },
            { question: "Which film features a filmmaker named Karthik Subbaraj and a gangster named Assault Sethu?", answer: "Jigarthanda" },
            { question: "Which film stars Dhanush as a young man whose father is a farmer named Siva Saamy?", answer: "Asuran" },
            { question: "Which film pairs a young man named Thiru with his childhood friend Shobana?", answer: "Thiruchitrambalam" },
            { question: "Which film centers on a headstrong young man named Don who returns to college?", answer: "Don" }
        ]
    },

    custom: {
        title: "Custom Questions",
        emoji: "📝",
        subtitle: "Create a question deck and play by your own rules."
    }
};

// ========================================
// TAMIL MOVIE AND SONG PROMPTS
// difficulty: easy, medium, hard
// era: classic or modern
// ========================================

const tamilPrompts = [
    // CLASSIC TAMIL MOVIES
    { category: "movies", difficulty: "easy", era: "classic", answer: "Baasha", clue: "🕶️👑🗣️💥", hint: "A stylish don and his hidden identity." },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Annamalai", clue: "🙋‍♂️⛰️🐄", hint: "Read the first two emojis as “Anna” + “malai”." },
    { category: "movies", difficulty: "hard", era: "classic", answer: "Mouna Ragam", clue: "🤫🎼", hint: "The title means a silent melody." },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Thalapathi", clue: "🛡️👑🤝", hint: "A commander and his king-like friend." },
    { category: "movies", difficulty: "easy", era: "classic", answer: "Padayappa", clue: "🪖🔥👑", hint: "Rajinikanth’s larger-than-life title character." },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Nayakan", clue: "🦸‍♂️🌆⚖️", hint: "A celebrated crime-drama hero." },
    { category: "movies", difficulty: "easy", era: "classic", answer: "Jeans", clue: "👖👖💎", hint: "The title is the clothing item." },
    { category: "movies", difficulty: "hard", era: "classic", answer: "Alaipayuthey", clue: "🌊〰️🚆❤️", hint: "A wave-like journey and a romance that begins on a train." },

    // MODERN TAMIL MOVIES
    { category: "movies", difficulty: "easy", era: "modern", answer: "Jailer", clue: "🔒👮‍♂️🗝️", hint: "The job title is the answer." },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Leo", clue: "♌🦁☕", hint: "The zodiac sign gives the lead character’s name." },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Vikram", clue: "🕵️‍♂️🔫🕶️", hint: "A spy-action film whose lead is known by one name." },
    { category: "movies", difficulty: "hard", era: "modern", answer: "96", clue: "9️⃣6️⃣🏫💌", hint: "The number is the title; the school and letter hint at the reunion romance." },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Master", clue: "🧑‍🏫🏆🥊", hint: "A teacher faces a local gangster." },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Soorarai Pottru", clue: "✈️💸🚀🙌", hint: "A determined man dreams of making air travel affordable." },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Doctor", clue: "🩺🧑‍⚕️🤖", hint: "The title is the hero’s profession." },
    { category: "movies", difficulty: "hard", era: "modern", answer: "Vinnaithaandi Varuvaayaa", clue: "🌌➡️🚶‍♀️💌", hint: "A sky-crossing question wrapped in a romance." },

    // CLASSIC TAMIL SONGS
    { category: "songs", difficulty: "easy", era: "classic", answer: "Chinna Chinna Aasai", clue: "🤏✨💭" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Anjali Anjali", clue: "👧🎶❤️" },
    { category: "songs", difficulty: "hard", era: "classic", answer: "Munbe Vaa", clue: "💖➡️🎶🌧️" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Ennavale Adi Ennavale", clue: "❤️🎤👩" },
    { category: "songs", difficulty: "easy", era: "classic", answer: "Mustafa Mustafa", clue: "👬🎓🎵" },
    { category: "songs", difficulty: "hard", era: "classic", answer: "Poongatrile", clue: "🌸💨🎶" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Urvasi Urvasi", clue: "💃🕺🎵" },
    { category: "songs", difficulty: "easy", era: "classic", answer: "Why This Kolaveri Di", clue: "❓😡💔🎤" },

    // MODERN TAMIL SONGS
    { category: "songs", difficulty: "easy", era: "modern", answer: "Arabic Kuthu", clue: "🕺🌍🎶🔥" },
    { category: "songs", difficulty: "easy", era: "modern", answer: "Vaathi Coming", clue: "👨‍🏫➡️🎉" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Hukum", clue: "👑💥🎵" },
    { category: "songs", difficulty: "hard", era: "modern", answer: "Megham Karukatha", clue: "☁️🌧️❤️" },
    { category: "songs", difficulty: "easy", era: "modern", answer: "Enjoy Enjaami", clue: "🌿🌾🎶😊" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Rowdy Baby", clue: "😎👶💃" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Naa Ready", clue: "🙋🔥🎤" },
    { category: "songs", difficulty: "hard", era: "modern", answer: "Katchi Sera", clue: "👀❤️🎶" },
    { category: "movies", difficulty: "easy", era: "classic", answer: "Muthu", clue: "🦪💎🐎👑", hint: "The title means pearl; the rest points to the Rajinikanth film." },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Indian", clue: "🇮🇳👴🦸‍♂️", hint: "A freedom fighter returns to fight corruption." },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Gentleman", clue: "🤵🕴️💰", hint: "A polished man leads a double life." },
    { category: "movies", difficulty: "hard", era: "classic", answer: "Iruvar", clue: "2️⃣👨‍🤝‍👨🎭", hint: "The Tamil title means “the two”." },
    { category: "movies", difficulty: "easy", era: "classic", answer: "Sivaji", clue: "👑💻💰🔥", hint: "A Rajinikanth character takes on corruption." },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Anbe Sivam", clue: "❤️☮️🤝" },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Ghilli", clue: "🏏🥇🏃‍♂️🏆" },
    { category: "movies", difficulty: "easy", era: "classic", answer: "Chandramukhi", clue: "🌙👩‍🦰👻" },
    { category: "movies", difficulty: "hard", era: "classic", answer: "Pithamagan", clue: "🌾🪦🤝" },
    { category: "movies", difficulty: "medium", era: "classic", answer: "Sachein", aliases: ["Sachien"], clue: "🏏🔤🎓💘", hint: "A famous cricketer's first name, spelled with an extra 'e'." },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Thuppakki", aliases: ["Thuppaki", "Thupaaki"], clue: "🔫🎯🪖", hint: "The title is the Tamil word for the weapon shown." },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Ponniyin Selvan", clue: "🌊👦👑⚔️", hint: "The title means “son of Ponni”; Ponni is the river Cauvery." },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Vikram Vedha", clue: "👮‍♂️🧔⚖️" },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Kaithi", clue: "🚚🌙🚔" },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Jigarthanda", clue: "🎬🔫🎞️" },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Asuran", clue: "🌾👨‍👦🔥" },
    { category: "movies", difficulty: "hard", era: "modern", answer: "Super Deluxe", clue: "🛣️🧩🌈" },
    { category: "movies", difficulty: "easy", era: "modern", answer: "Thiruchitrambalam", clue: "🕺🍲💛" },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Don", clue: "🎓😎🎉" },
    { category: "movies", difficulty: "medium", era: "modern", answer: "Love Today", clue: "📱💬❤️" },
    { category: "movies", difficulty: "hard", era: "modern", answer: "Parking", clue: "🚗🏠😤" },
    { category: "songs", difficulty: "easy", era: "classic", answer: "Thendral Vandhu Theendum Pothu", clue: "🍃💨🤗🎶" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Kannalane", clue: "👀❤️🎤" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Sundari Kannal Oru Sethi", clue: "👸👀💌" },
    { category: "songs", difficulty: "hard", era: "classic", answer: "Malargale Malargale", clue: "🌸🌼🌺🎶" },
    { category: "songs", difficulty: "easy", era: "classic", answer: "Pachai Nirame", clue: "💚🌈🎨" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Snehithane", clue: "🫂💌❤️" },
    { category: "songs", difficulty: "easy", era: "classic", answer: "Oruvan Oruvan Mudhalali", clue: "👨‍💼🌍🎵" },
    { category: "songs", difficulty: "hard", era: "classic", answer: "New York Nagaram", clue: "🗽🌃📞" },
    { category: "songs", difficulty: "medium", era: "classic", answer: "Aathangara Marame", clue: "🌊🌳🎶" },
    { category: "songs", difficulty: "easy", era: "classic", answer: "Vaseegara", clue: "😍💘🎼" },
    { category: "songs", difficulty: "easy", era: "modern", answer: "Nenjukkul Peidhidum", clue: "❤️☔🎶" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Aaruyire", clue: "🫀💞🎵" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Rakita Rakita", clue: "🎉🕺🥁" },
    { category: "songs", difficulty: "easy", era: "modern", answer: "Vaathi Raid", clue: "👨‍🏫🚨🔥" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Private Party", clue: "🥳🔒🎶" },
    { category: "songs", difficulty: "easy", era: "modern", answer: "Jimikki Ponnu", clue: "💎👧💃" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Kaavaalaa", clue: "🕶️💃✨" },
    { category: "songs", difficulty: "easy", era: "modern", answer: "Ranjithame", clue: "💃❤️🎉" },
    { category: "songs", difficulty: "medium", era: "modern", answer: "Porkanda Singam", clue: "⚔️🦁🔥" }
];

// ========================================
// GET HTML ELEMENTS
// ========================================

const hero = document.getElementById("hero");
const gamesSection = document.getElementById("games-section");
const playSection = document.getElementById("play-section");
const customBuilder = document.getElementById("custom-builder");

const playLabel = document.getElementById("play-label");
const playEmoji = document.getElementById("play-emoji");
const playTitle = document.getElementById("play-title");
const playSubtitle = document.getElementById("play-subtitle");
const gameControls = document.getElementById("game-controls");

const promptLabel = document.getElementById("prompt-label");
const promptText = document.getElementById("prompt-text");
const playActions = document.getElementById("play-actions");
const feedback = document.getElementById("feedback");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");

const customForm = document.getElementById("custom-form");
const customQuestion = document.getElementById("custom-question");
const customCount = document.getElementById("custom-count");
const customList = document.getElementById("custom-list");

// ========================================
// GAME STATE
// ========================================

let currentGame = null;
let currentTamilCategory = "movies";
let currentTamilDifficulty = "mixed";
let currentTamilPrompt = null;

let currentTruthType = "Truth";
let customQuestions = [];
let currentPrompt = null;
const usedPrompts = {};
let titleChainLetter = "";
let usedChainTitles = new Set();

// ========================================
// RANDOM PROMPT HELPER
// Avoids repeats until the list is used.
// ========================================

function getRandomPrompt(list, category) {
    if (!list || list.length === 0) {
        return null;
    }

    if (!usedPrompts[category]) {
        usedPrompts[category] = [];
    }

    if (usedPrompts[category].length >= list.length) {
        usedPrompts[category] = [];
    }

    const availableIndexes = list
        .map((_, index) => index)
        .filter(index => !usedPrompts[category].includes(index));

    const randomIndex = availableIndexes[
        Math.floor(Math.random() * availableIndexes.length)
    ];

    usedPrompts[category].push(randomIndex);

    return list[randomIndex];
}

// ========================================
// BUTTON HELPER
// ========================================

function createButton(text, className, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

// ========================================
// TAMIL GAME CONTROLS
// ========================================

function addTamilGameControls() {
    gameControls.replaceChildren();

    const categoryGroup = document.createElement("div");
    categoryGroup.className = "control-group";

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "control-group-label";
    categoryLabel.textContent = "Category";
    categoryGroup.appendChild(categoryLabel);

    const categories = currentGame === "songquiz"
        ? [{ value: "songs", label: "🎧 Tamil Songs" }]
        : [
            { value: "movies", label: "🎬 Tamil Movies" },
            { value: "songs", label: "🎵 Tamil Songs" }
        ];

    categories.forEach(category => {
        const button = createButton(
            category.label,
            "control-button" +
                (currentTamilCategory === category.value ? " active" : ""),
            () => {
                currentTamilCategory = category.value;
                addTamilGameControls();
                showTamilPrompt();
            }
        );

        categoryGroup.appendChild(button);
    });

    const difficultyGroup = document.createElement("div");
    difficultyGroup.className = "control-group";

    const difficultyLabel = document.createElement("span");
    difficultyLabel.className = "control-group-label";
    difficultyLabel.textContent = "Difficulty";
    difficultyGroup.appendChild(difficultyLabel);

    ["mixed", "easy", "medium", "hard"].forEach(level => {
        const button = createButton(
            level.charAt(0).toUpperCase() + level.slice(1),
            "control-button" +
                (currentTamilDifficulty === level ? " active" : ""),
            () => {
                currentTamilDifficulty = level;
                addTamilGameControls();
                showTamilPrompt();
            }
        );

        difficultyGroup.appendChild(button);
    });

    gameControls.append(categoryGroup, difficultyGroup);
}

// ========================================
// TAMIL CHARADES + EMOJI CHALLENGE
// ========================================

function showTamilPrompt() {
    const filteredPrompts = tamilPrompts.filter(prompt =>
        prompt.category === currentTamilCategory &&
        (
            currentTamilDifficulty === "mixed" ||
            prompt.difficulty === currentTamilDifficulty
        )
    );

    currentTamilPrompt = getRandomPrompt(
        filteredPrompts,
        `${currentGame}-${currentTamilCategory}-${currentTamilDifficulty}`
    );

    feedback.textContent = "";
    playActions.replaceChildren();
    answerForm.classList.toggle("hidden", !["emojichallenge", "songquiz"].includes(currentGame));
    answerInput.value = "";

    if (!currentTamilPrompt) {
        promptLabel.textContent = "NO PROMPTS";
        promptText.textContent = "No prompts are available for this selection.";
        feedback.textContent = "Try another difficulty or category.";
        return;
    }

    const categoryName = currentTamilCategory === "movies"
        ? "Tamil movie"
        : "Tamil song";

    if (currentGame === "charades") {
        promptLabel.textContent = "ACT IT OUT!";
        promptText.textContent = currentTamilPrompt.answer;

        feedback.textContent =
            `Act out this ${categoryName} without speaking. 🎭`;

        playActions.appendChild(
            createButton(
                "🔄 Next prompt",
                "action-button primary",
                showTamilPrompt
            )
        );
    } else if (currentGame === "songquiz") {
        promptLabel.textContent = "🎧 HUM IT · NAME THAT SONG";
        promptText.textContent = `🎶 ${currentTamilPrompt.clue} · Hum it, then type the song title.`;
        feedback.textContent = "Use the emojis to identify the title. No lyrics are shown.";
        playActions.append(
            createButton("🔄 Next song", "action-button", showTamilPrompt)
        );
    } else {
        promptLabel.textContent = "GUESS THE TITLE";
        promptText.textContent = currentTamilPrompt.clue;

        feedback.textContent = `Guess the ${categoryName} from the emoji rebus.`;

        if (currentTamilPrompt.hint) {
            playActions.appendChild(createButton(
                "💡 Hint",
                "action-button",
                () => { feedback.textContent = `Hint: ${currentTamilPrompt.hint}`; }
            ));
        }

        playActions.append(
            createButton(
                "🔄 Next clue",
                "action-button",
                showTamilPrompt
            )
        );
    }
}

// ========================================
// OPEN A GAME
// ========================================

function openGame(gameKey) {
    currentGame = gameKey;
    currentPrompt = null;
    feedback.textContent = "";
    gameControls.replaceChildren();
    playActions.replaceChildren();
    answerForm.classList.add("hidden");
    answerInput.value = "";

    hero.classList.add("hidden");
    gamesSection.classList.add("hidden");
    playSection.classList.remove("hidden");
    customBuilder.classList.add("hidden");

    const game = games[gameKey];

    if (!game) {
        return;
    }

    playLabel.textContent = "NOW PLAYING";
    playEmoji.textContent = game.emoji;
    playTitle.textContent = game.title;
    playSubtitle.textContent = game.subtitle;

    if (gameKey === "custom") {
        openCustomGame();
        return;
    }

    if (gameKey === "charades" || gameKey === "emojichallenge" || gameKey === "songquiz") {
        currentTamilCategory = "movies";
        if (gameKey === "songquiz") currentTamilCategory = "songs";
        currentTamilDifficulty = "mixed";

        addTamilGameControls();
        showTamilPrompt();

        playSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        return;
    }

    if (gameKey === "titlechain") {
        startTitleChain();
        playSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    if (gameKey === "truth") {
        currentTruthType = "Truth";
        addTruthOrDareControls();
        promptLabel.textContent = "CHOOSE YOUR CHALLENGE";
        promptText.textContent = "Truth or Dare? You decide.";
        showTruthOrDareActions();
    } else if (gameKey === "thisorthat") {
        promptLabel.textContent = "MAKE YOUR PICK";
        showThisOrThatPrompt();
    } else {
        promptLabel.textContent = "YOUR PROMPT";
        answerForm.classList.toggle("hidden", gameKey !== "dialogue");
        addNextButton("Next question →");
        showNextPrompt();
    }

    playSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ========================================
// TRUTH OR DARE
// ========================================

function addTruthOrDareControls() {
    const truthButton = createButton(
        "💬 Truth",
        "control-button active",
        () => setTruthType("Truth")
    );

    const dareButton = createButton(
        "🎯 Dare",
        "control-button",
        () => setTruthType("Dare")
    );

    truthButton.id = "truth-choice";
    dareButton.id = "dare-choice";

    gameControls.append(truthButton, dareButton);
}

function setTruthType(type) {
    currentTruthType = type;

    document.getElementById("truth-choice")
        .classList.toggle("active", type === "Truth");

    document.getElementById("dare-choice")
        .classList.toggle("active", type === "Dare");

    promptLabel.textContent = type.toUpperCase();
    promptText.textContent = `Ready for your ${type.toLowerCase()}?`;
    feedback.textContent = "";

    showTruthOrDareActions();
}

function showTruthOrDareActions() {
    playActions.replaceChildren();

    playActions.appendChild(
        createButton(
            `Reveal ${currentTruthType} ✨`,
            "action-button primary",
            revealTruthOrDare
        )
    );
}

function revealTruthOrDare() {
    const prompts = games.truth.prompts[currentTruthType];

    currentPrompt = getRandomPrompt(
        prompts,
        `truth-${currentTruthType}`
    );

    promptLabel.textContent = currentTruthType.toUpperCase();
    promptText.textContent = currentPrompt;
    feedback.textContent = "Your turn! Everyone else, pay attention 👀";

    playActions.replaceChildren();

    playActions.append(
        createButton(
            "🔄 Another one",
            "action-button primary",
            revealTruthOrDare
        ),
        createButton(
            "Switch to " +
                (currentTruthType === "Truth" ? "Dare" : "Truth"),
            "action-button",
            () => setTruthType(
                currentTruthType === "Truth" ? "Dare" : "Truth"
            )
        )
    );
}

// ========================================
// THIS OR THAT
// ========================================

function showThisOrThatPrompt() {
    const choices = getRandomPrompt(
        games.thisorthat.prompts,
        "thisorthat"
    );

    if (!choices) {
        return;
    }

    currentPrompt = choices;

    promptLabel.textContent = "MAKE YOUR PICK";
    promptText.textContent = `${choices[0]} OR ${choices[1]}`;
    feedback.textContent = "Which side are you on?";

    playActions.replaceChildren();

    choices.forEach(choice => {
        playActions.appendChild(
            createButton(
                choice,
                "choice-button",
                () => chooseThisOrThat(choice)
            )
        );
    });

    addNextButton("Next choices →");
}

function chooseThisOrThat(choice) {
    playActions.querySelectorAll(".choice-button").forEach(button => {
        button.classList.toggle(
            "selected",
            button.textContent === choice
        );
    });

    feedback.textContent = `You picked ${choice}! Anyone disagree? 😄`;
}

// ========================================
// OTHER GAME PROMPTS
// ========================================

function normalizeAnswer(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

function getChainTitles() {
    return [...new Set(tamilPrompts.map(prompt => prompt.answer))];
}

function startTitleChain() {
    usedChainTitles = new Set();
    const titles = getChainTitles();
    const playableLetters = [...new Set(titles.map(title => normalizeAnswer(title)[0]))]
        .filter(letter => titles.filter(title => normalizeAnswer(title).startsWith(letter)).length > 1);
    titleChainLetter = playableLetters[Math.floor(Math.random() * playableLetters.length)] || "a";
    promptLabel.textContent = "🔗 TITLE CHAIN · YOUR TURN";
    promptText.textContent = `Name any Tamil movie or song in the deck starting with “${titleChainLetter.toUpperCase()}”. Its last letter becomes the next turn.`;
    answerForm.classList.remove("hidden");
    answerInput.value = "";
    answerInput.placeholder = "Type a Tamil movie or song title…";
    feedback.textContent = "Correct titles must be in the game deck. No repeats!";
    playActions.replaceChildren();
}

function checkAnswer(event) {
    event.preventDefault();
    const typed = answerInput.value.trim();
    if (!typed) {
        feedback.textContent = "Type an answer first.";
        answerInput.focus();
        return;
    }

    if (currentGame === "titlechain") {
        const titles = getChainTitles();
        const matchedTitle = titles.find(title => normalizeAnswer(title) === normalizeAnswer(typed));
        if (!matchedTitle) {
            feedback.textContent = "That title isn't in this round's movie and song deck. Try another!";
            return;
        }
        if (!normalizeAnswer(matchedTitle).startsWith(titleChainLetter)) {
            feedback.textContent = `That starts with “${normalizeAnswer(matchedTitle)[0].toUpperCase()}”. Find one beginning with “${titleChainLetter.toUpperCase()}”.`;
            return;
        }
        if (usedChainTitles.has(normalizeAnswer(matchedTitle))) {
            feedback.textContent = "That title has already been used. Keep the chain fresh!";
            return;
        }

        usedChainTitles.add(normalizeAnswer(matchedTitle));
        const normalized = normalizeAnswer(matchedTitle);
        const nextLetter = normalized[normalized.length - 1];
        const nextOptions = titles.filter(title =>
            normalizeAnswer(title).startsWith(nextLetter) &&
            !usedChainTitles.has(normalizeAnswer(title))
        );
        promptText.textContent = `✅ ${matchedTitle}! Next title must start with “${nextLetter.toUpperCase()}”.`;
        answerInput.value = "";
        if (nextOptions.length) {
            titleChainLetter = nextLetter;
            feedback.textContent = "Nice one! Pass the device to the next player.";
        } else {
            feedback.textContent = "Chain complete! No unused title in the deck starts with that letter. Play again for a new start!";
            answerForm.classList.add("hidden");
        }
        return;
    }

    const expected = currentGame === "dialogue"
        ? currentPrompt?.answer
        : currentTamilPrompt?.answer;
    if (!expected) return;

    const aliases = currentGame === "dialogue" ? [] : (currentTamilPrompt?.aliases || []);
    const acceptedAnswers = [expected, ...aliases];
    if (acceptedAnswers.some(answer => normalizeAnswer(typed) === normalizeAnswer(answer))) {
        feedback.textContent = `✅ Correct! ${expected}`;
        answerInput.value = "";
    } else {
        feedback.textContent = "❌ Not quite—try another spelling or take another guess.";
    }
}

answerForm.addEventListener("submit", checkAnswer);

function showNextPrompt() {
    if (
        !currentGame ||
        currentGame === "truth" ||
        currentGame === "thisorthat" ||
        currentGame === "custom" ||
        currentGame === "charades" ||
        currentGame === "emojichallenge" ||
        currentGame === "songquiz" ||
        currentGame === "titlechain"
    ) {
        return;
    }

    const game = games[currentGame];

    if (!game || !game.prompts) {
        return;
    }

    currentPrompt = getRandomPrompt(game.prompts, currentGame);
    promptLabel.textContent = "YOUR PROMPT";
    promptText.textContent = currentGame === "dialogue"
        ? currentPrompt.question
        : currentPrompt;
    if (currentGame === "dialogue") {
        answerForm.classList.remove("hidden");
        answerInput.value = "";
        answerInput.placeholder = "Type the film title…";
        feedback.textContent = "Type your guess and check it before the next question.";
    } else {
        feedback.textContent = "Pass the turn to another player when you're ready!";
    }
}

// ========================================
// NEXT BUTTON
// ========================================

function addNextButton(text) {
    const nextButton = createButton(
        text,
        "action-button primary",
        () => {
            feedback.textContent = "";

            if (currentGame === "thisorthat") {
                showThisOrThatPrompt();
            } else if (currentGame === "custom") {
                showCustomPrompt();
            } else {
                showNextPrompt();
            }
        }
    );

    playActions.appendChild(nextButton);
}

// ========================================
// CUSTOM QUESTIONS
// ========================================

function openCustomGame() {
    playLabel.textContent = "YOUR GAME";
    playEmoji.textContent = "📝";
    playTitle.textContent = "Custom Questions";
    playSubtitle.textContent =
        "Create a question deck and play with your own rules.";

    customBuilder.classList.remove("hidden");

    promptLabel.textContent = "YOUR CUSTOM PROMPT";
    promptText.textContent = customQuestions.length
        ? "Ready to play your custom deck?"
        : "Add your first question below!";

    feedback.textContent = "";
    playActions.replaceChildren();

    addNextButton("Next custom question →");
    renderCustomQuestions();

    playSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function showCustomPrompt() {
    if (customQuestions.length === 0) {
        promptLabel.textContent = "YOUR CUSTOM PROMPT";
        promptText.textContent = "Add a question to your deck first!";
        feedback.textContent = "";
        return;
    }

    currentPrompt = getRandomPrompt(customQuestions, "custom");

    promptLabel.textContent = "YOUR CUSTOM PROMPT";
    promptText.textContent = currentPrompt;
    feedback.textContent = "Your question, your rules! ✨";
}

function renderCustomQuestions() {
    customList.replaceChildren();

    customQuestions.forEach((question, index) => {
        const item = document.createElement("div");
        item.className = "custom-item";

        const text = document.createElement("span");
        text.textContent = `${index + 1}. ${question}`;

        const removeButton = createButton(
            "Remove",
            "remove-question",
            () => {
                customQuestions.splice(index, 1);
                usedPrompts.custom = [];
                renderCustomQuestions();

                if (customQuestions.length === 0) {
                    promptText.textContent =
                        "Add your first question below!";
                }
            }
        );

        item.append(text, removeButton);
        customList.appendChild(item);
    });

    customCount.textContent = `${customQuestion.value.length} / 240`;
}

customForm.addEventListener("submit", event => {
    event.preventDefault();

    const question = customQuestion.value.trim();

    if (!question) {
        return;
    }

    if (customQuestions.includes(question)) {
        feedback.textContent = "That question is already in your deck!";
        return;
    }

    customQuestions.push(question);
    usedPrompts.custom = [];

    customQuestion.value = "";
    customCount.textContent = "0 / 240";

    renderCustomQuestions();

    promptText.textContent =
        `Added! You now have ${customQuestions.length} question(s).`;

    feedback.textContent = "Question added successfully! 🎉";
});

customQuestion.addEventListener("input", () => {
    customCount.textContent =
        `${customQuestion.value.length} / 240`;
});

// ========================================
// NAVIGATION
// ========================================

document.querySelectorAll("[data-game]").forEach(card => {
    card.addEventListener("click", () => {
        openGame(card.dataset.game);
    });
});

document.getElementById("explore-button").addEventListener("click", () => {
    gamesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.getElementById("back-button").addEventListener("click", () => {
    playSection.classList.add("hidden");
    customBuilder.classList.add("hidden");
    hero.classList.remove("hidden");
    gamesSection.classList.remove("hidden");

    currentGame = null;

    gamesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.getElementById("home-link").addEventListener("click", event => {
    event.preventDefault();

    playSection.classList.add("hidden");
    customBuilder.classList.add("hidden");
    hero.classList.remove("hidden");
    gamesSection.classList.remove("hidden");

    currentGame = null;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ========================================
// STARTUP + OFFLINE SUPPORT
// ========================================

console.log("Pick One loaded successfully! 🎮");

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("Pick One offline support is ready!");
            })
            .catch(error => {
                console.error(
                    "Service worker registration failed:",
                    error
                );
            });
    });
}
