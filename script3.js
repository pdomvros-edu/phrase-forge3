const transformationExercises = [
    {
        id: 0, // Example exercise
        sentence1: "Do you mind if I watch you while you paint?",
        givenWord: "objection",
        prefix: "Do you ",
        suffix: " you while you paint?",
        correctAnswer: ["have any objection to my watching", "have any objection to me watching"],
        minWords: 3,
        maxWords: 8,
        isExample: true, // Flag for example
        status: 'pending' // Initial status for progress tracking
    },
    {
        id: 1,
        sentence1: "The bad weather conditions were solely responsible for the cancellation of the flight.",
        givenWord: "due",
        prefix: "The cancellation of the flight was entirely",
        suffix: "bad weather conditions.",
        correctAnswer: ["due to the"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 2,
        sentence1: "She expressed her strong disapproval of the new regulations.",
        givenWord: "voice",
        prefix: "She didn't hesitate to",
        suffix: "the new regulations.",
        correctAnswer: ["voice her disapproval of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 3,
        sentence1: "I never intended to cause any trouble to anyone.",
        givenWord: "furthest",
        prefix: "It was the",
        suffix: "cause any trouble.",
        correctAnswer: ["furthest thing from my mind to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 4,
        sentence1: "The company decided to dismiss him due to his repeated lateness.",
        givenWord: "ground",
        prefix: "He was dismissed on the",
        suffix: "repeated lateness.",
        correctAnswer: ["ground of his"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 5,
        sentence1: "Very few people are familiar with this ancient language.",
        givenWord: "knowledge",
        prefix: "Hardly anyone has any",
        suffix: "this ancient language.",
        correctAnswer: ["knowledge of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 6,
        sentence1: "She is completely indifferent to what people think of her.",
        givenWord: "takes",
        prefix: "She",
        suffix: "what people think of her.",
        correctAnswer: ["takes no notice of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 7,
        sentence1: "It's unlikely that the new measures will be effective.",
        givenWord: "probability",
        prefix: "There is little",
        suffix: "effective.",
        correctAnswer: ["probability of the new measures being"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 8,
        sentence1: "He was so exhausted that he couldn't keep his eyes open.",
        givenWord: "able",
        prefix: "He was so exhausted that he was",
        suffix: "his eyes open.",
        correctAnswer: ["not able to keep"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 9,
        sentence1: "I regret not having seized that opportunity earlier.",
        givenWord: "wished",
        prefix: "I",
        suffix: "that opportunity earlier.",
        correctAnswer: ["wished I had seized"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 10,
        sentence1: "The manager accepted the proposal without any hesitation.",
        givenWord: "readily",
        prefix: "The manager",
        suffix: "the proposal.",
        correctAnswer: ["readily accepted"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 11,
        sentence1: "They are very proud of their achievements in the science field.",
        givenWord: "pride",
        prefix: "They",
        suffix: "their achievements in the science field.",
        correctAnswer: ["take great pride in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 12,
        sentence1: "It's futile to argue with him about politics.",
        givenWord: "point",
        prefix: "There's",
        suffix: "about politics.",
        correctAnswer: ["no point in arguing with him"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 13,
        sentence1: "He always avoids answering direct questions about his past.",
        givenWord: "direct",
        prefix: "He is always reluctant to",
        suffix: "about his past.",
        correctAnswer: ["give a direct answer to questions"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 14,
        sentence1: "The heavy rain prevented us from going for a walk.",
        givenWord: "account",
        prefix: "On no",
        suffix: "for a walk.",
        correctAnswer: ["account did we go"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 15,
        sentence1: "He was very impressed by her ability to solve complex problems.",
        givenWord: "impressed",
        prefix: "He couldn't help but be",
        suffix: "solve complex problems.",
        correctAnswer: ["impressed by her ability to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 16,
        sentence1: "The company is currently reviewing its financial policies.",
        givenWord: "under",
        prefix: "The company's financial policies are",
        suffix: "at the moment.",
        correctAnswer: ["under review"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 17,
        sentence1: "He was dismissed for his frequent absence from work.",
        givenWord: "resulted",
        prefix: "His frequent absence from work",
        suffix: "his dismissal.",
        correctAnswer: ["resulted in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 18,
        sentence1: "I never had any doubt that she would eventually succeed.",
        givenWord: "crossed",
        prefix: "It never",
        suffix: "she would eventually succeed.",
        correctAnswer: ["crossed my mind that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 19,
        sentence1: "She rarely takes criticism seriously.",
        givenWord: "notice",
        prefix: "She rarely",
        suffix: "criticism.",
        correctAnswer: ["takes any notice of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 20,
        sentence1: "The new measures will come into effect next month.",
        givenWord: "implemented",
        prefix: "The new measures will be",
        suffix: "next month.",
        correctAnswer: ["implemented"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 21,
        sentence1: "He's very likely to get the promotion.",
        givenWord: "strong",
        prefix: "There's a",
        suffix: "get the promotion.",
        correctAnswer: ["strong likelihood that he'll"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 22,
        sentence1: "I wish I had paid more attention during the driving lesson.",
        givenWord: "regretting",
        prefix: "I'm",
        suffix: "more attention during the driving lesson.",
        correctAnswer: ["regretting not having paid"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 23,
        sentence1: "Only by working overtime can we finish the project on time.",
        givenWord: "unless",
        prefix: "We cannot finish the project on time",
        suffix: "overtime.",
        correctAnswer: ["unless we work"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 24,
        sentence1: "His rude comments caused a lot of controversy.",
        givenWord: "gave",
        prefix: "His rude comments",
        suffix: "controversy.",
        correctAnswer: ["gave rise to a lot of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 25,
        sentence1: "She is very good at dealing with difficult customers.",
        givenWord: "flair",
        prefix: "She has a great",
        suffix: "difficult customers.",
        correctAnswer: ["flair for dealing with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 26,
        sentence1: "It's quite common for new students to feel overwhelmed.",
        givenWord: "tend",
        prefix: "New students",
        suffix: "overwhelmed.",
        correctAnswer: ["tend to feel"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 27,
        sentence1: "He was completely oblivious to the danger.",
        givenWord: "conscious",
        prefix: "He was not at all",
        suffix: "the danger.",
        correctAnswer: ["conscious of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 28,
        sentence1: "The company aims to increase its profits by 15% next year.",
        givenWord: "set",
        prefix: "The company has",
        suffix: "its profits by 15% next year.",
        correctAnswer: ["set itself the goal of increasing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 29,
        sentence1: "His explanation made no sense whatsoever.",
        givenWord: "sense",
        prefix: "His explanation did not",
        suffix: "whatsoever.",
        correctAnswer: ["make any sense"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 30,
        sentence1: "I really don't feel like celebrating my birthday this year.",
        givenWord: "mood",
        prefix: "I'm not in the",
        suffix: "my birthday this year.",
        correctAnswer: ["mood for celebrating"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 31,
        sentence1: "She finally accepted the offer after much deliberation.",
        givenWord: "eventually",
        prefix: "After much deliberation, she",
        suffix: "the offer.",
        correctAnswer: ["eventually accepted"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 32,
        sentence1: "It's absolutely forbidden to smoke in this area.",
        givenWord: "means",
        prefix: "By no",
        suffix: "in this area.",
        correctAnswer: ["means is smoking allowed"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 33,
        sentence1: "He's notoriously bad at keeping secrets.",
        givenWord: "well",
        prefix: "He's not",
        suffix: "secrets.",
        correctAnswer: ["well known for keeping"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 34,
        sentence1: "The company has made significant improvements in its customer service.",
        givenWord: "improvement",
        prefix: "There has been a significant",
        suffix: "its customer service.",
        correctAnswer: ["improvement in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 35,
        sentence1: "We had barely started eating when the power went out.",
        givenWord: "soon",
        prefix: "No",
        suffix: "the power went out.",
        correctAnswer: ["sooner had we started eating than"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 36,
        sentence1: "He apologized for his previous rude behaviour.",
        givenWord: "apologized",
        prefix: "He",
        suffix: "rude behaviour.",
        correctAnswer: ["apologized for his previously"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 37,
        sentence1: "She is highly unlikely to agree to the proposal.",
        givenWord: "probability",
        prefix: "There is a low",
        suffix: "the proposal.",
        correctAnswer: ["probability of her agreeing to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 38,
        sentence1: "The bad weather conditions caused a lot of damage to the crops.",
        givenWord: "brought",
        prefix: "The bad weather conditions",
        suffix: "to the crops.",
        correctAnswer: ["brought about a lot of damage"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 39,
        sentence1: "I never considered him a suitable candidate for the job.",
        givenWord: "strike",
        prefix: "He didn't",
        suffix: "for the job.",
        correctAnswer: ["strike me as a suitable candidate"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 40,
        sentence1: "He was very proud of his son's achievements.",
        givenWord: "took",
        prefix: "He",
        suffix: "his son's achievements.",
        correctAnswer: ["took great pride in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 41,
        sentence1: "It's not worth arguing with him about the details.",
        givenWord: "point",
        prefix: "There's",
        suffix: "with him about the details.",
        correctAnswer: ["no point in arguing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 42,
        sentence1: "Her new novel is much better than her previous one.",
        givenWord: "improvement",
        prefix: "Her new novel is a vast",
        suffix: "her previous one.",
        correctAnswer: ["improvement on"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 43,
        sentence1: "He regrets not having been more assertive.",
        givenWord: "wished",
        prefix: "He",
        suffix: "more assertive.",
        correctAnswer: ["wished he had been"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 44,
        sentence1: "The manager will deal with your complaint personally.",
        givenWord: "dealt",
        prefix: "Your complaint will be",
        suffix: "the manager personally.",
        correctAnswer: ["dealt with by"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 45,
        sentence1: "She has been trying to improve her English for a long time.",
        givenWord: "efforts",
        prefix: "She has been making",
        suffix: "her English for a long time.",
        correctAnswer: ["every effort to improve"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 46,
        sentence1: "It's highly probable that the project will be completed on time.",
        givenWord: "likelihood",
        prefix: "There's a strong",
        suffix: "completed on time.",
        correctAnswer: ["likelihood of the project being"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 47,
        sentence1: "He was so engrossed in his work that he didn't notice the time.",
        givenWord: "lost",
        prefix: "He was so",
        suffix: "his work that he didn't notice the time.",
        correctAnswer: ["lost in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 48,
        sentence1: "I find it difficult to understand complex philosophical concepts.",
        givenWord: "difficulty",
        prefix: "I have great",
        suffix: "complex philosophical concepts.",
        correctAnswer: ["difficulty understanding"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 49,
        sentence1: "His behaviour was totally out of character for him.",
        givenWord: "like",
        prefix: "It was not",
        suffix: "like that.",
        correctAnswer: ["like him to behave"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 50,
        sentence1: "They decided to abolish the old tradition.",
        givenWord: "away",
        prefix: "They decided to",
        suffix: "the old tradition.",
        correctAnswer: ["do away with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    }
];

let currentExerciseIndex = 0;
let score = 0;
let exercisesCompleted = 0;

const questionsContainer = document.getElementById('questionsContainer');
const checkAnswersBtn = document.getElementById('checkAnswersBtn');
const skipExerciseBtn = document.getElementById('skipExerciseBtn'); // Get the skip button
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const exerciseFeedback = document.getElementById('exerciseFeedback');
const currentScoreSpan = document.getElementById('currentScore');
const exercisesCompletedSpan = document.getElementById('exercisesCompleted');
const totalExercisesSpan = document.getElementById('totalExercises');
const exerciseProgressList = document.getElementById('exerciseProgressList');
const failSound = document.getElementById('failSound');
const successSound = document.getElementById('successSound');
const externalWordLookupInput = document.getElementById('externalWordLookupInput');
const searchExternalDictionaryBtn = document.getElementById('searchExternalDictionaryBtn');
const dictionaryIframe = document.getElementById('dictionaryIframe');
const showExampleAnswerBtn = document.getElementById('showExampleAnswerBtn');

// Set total exercises count, excluding the example (id: 0)
// This will correctly show 50 for Phrase Forge 3's initial batch
totalExercisesSpan.textContent = transformationExercises.length - 1;

function updateWordCount(inputId, countSpanId) {
    const inputField = document.getElementById(inputId);
    const countSpan = document.getElementById(countSpanId);
    if (inputField && countSpan) {
        const text = inputField.value.trim();
        // Split by one or more whitespace characters
        const words = text === "" ? 0 : text.split(/\s+/).filter(word => word !== '').length;
        countSpan.textContent = `${words} words`;
    }
}

// Modified updateExerciseProgress to handle different statuses
function updateExerciseProgress(exerciseId, newStatus) { // newStatus can be 'correct', 'incorrect', 'skipped', 'pending'
    let listItem = document.getElementById(`progress-q${exerciseId}`);
    const exercise = transformationExercises.find(ex => ex.id === exerciseId);

    if (exercise) {
        // Only update if the new status is 'correct', or if the current status is 'pending' or 'incorrect' or 'skipped'.
        // This prevents an incorrect/skipped from overwriting a correct status if the user revisits, but allows
        // 'correct' to overwrite anything. Also allows 'incorrect' to overwrite 'skipped' if they try it later.
        if (newStatus === 'correct' || exercise.status === 'pending' || exercise.status === 'incorrect' || exercise.status === 'skipped') {
             exercise.status = newStatus; // Update the internal status on the exercise object
        }
    }

    // Create list item if it doesn't exist
    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `progress-q${exerciseId}`;
        exerciseProgressList.appendChild(listItem);
    }

    // Update text content and class based on the exercise's *current* status
    switch (exercise.status) {
        case 'correct':
            listItem.textContent = `Question ${exerciseId}: ✔`;
            listItem.className = 'correct-progress';
            break;
        case 'incorrect':
            listItem.textContent = `Question ${exerciseId}: ✖`;
            listItem.className = 'incorrect-progress';
            break;
        case 'skipped':
            listItem.textContent = `Question ${exerciseId}: ↷ (Skipped)`; // Using Unicode arrow for skipped
            listItem.className = 'skipped-progress';
            break;
        case 'pending':
        default:
            listItem.textContent = `Question ${exerciseId}: Pending`;
            listItem.className = ''; // No specific class, or 'pending-progress' if you define one
            break;
    }
}

function loadExercise() {
    // Handle the example exercise first (ID 0)
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const exampleWordCount = document.getElementById('exampleWordCount');

    // Reset example
    if (exampleInput) {
        exampleInput.value = "";
        exampleInput.disabled = false; // Enable example input
    }
    if (exampleFeedback) {
        exampleFeedback.style.display = 'none';
        exampleFeedback.classList.remove('correct', 'incorrect');
    }
    updateWordCount('exampleInput', 'exampleWordCount');
    if (showExampleAnswerBtn) {
        showExampleAnswerBtn.style.display = 'inline-block'; // Show "Show Answer" button
    }


    // Determine which exercise to load:
    // If currentExerciseIndex is 0 (first load), set it to 1 to load the first *actual* exercise (ID 1).
    // Otherwise, use the existing currentExerciseIndex.
    if (currentExerciseIndex === 0) {
        currentExerciseIndex = 1;
    }

    const exercise = transformationExercises[currentExerciseIndex];

    if (!exercise) {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none'; // Hide skip button on completion
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
        return;
    }

    questionsContainer.innerHTML = `
        <div class="transformation-question" data-id="${exercise.id}">
            <p>${exercise.id}. ${exercise.sentence1}</p>
            <p class="given-word">Word Given: ${exercise.givenWord}</p>
            <p><span class="input-sentence-part">${exercise.prefix}</span><input type="text" id="q${exercise.id}Input" class="transformation-input" placeholder="Enter your answer" onkeyup="updateWordCount('q${exercise.id}Input', 'q${exercise.id}WordCount')"><span class="input-sentence-part">${exercise.suffix}</span></p>
            <span class="word-count" id="q${exercise.id}WordCount">0 words</span>
            <div class="feedback-line" id="q${exercise.id}Feedback"></div>
        </div>
    `;

    // Initialize word count for the loaded question
    updateWordCount(`q${exercise.id}Input`, `q${exercise.id}WordCount`);

    exerciseFeedback.style.display = 'none'; // Hide general feedback
    checkAnswersBtn.style.display = 'inline-block';
    skipExerciseBtn.style.display = 'inline-block'; // Show skip button for new questions
    nextExerciseBtn.style.display = 'none'; // Hide next until check or skip
}


function checkAnswers() {
    // Check the example first
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const example = transformationExercises[0]; // The example exercise
    const exampleUserAnswer = exampleInput.value.trim().toLowerCase();
    const exampleUserWords = exampleUserAnswer.split(/\s+/).filter(word => word !== '');

    // Ensure feedback element is visible
    exampleFeedback.style.display = 'block';

    let isExampleCorrect = false;
    const exampleWordCount = exampleUserWords.length;
    if (exampleWordCount >= example.minWords && exampleWordCount <= example.maxWords) {
        for (const correctOpt of example.correctAnswer) {
            if (exampleUserAnswer === correctOpt.toLowerCase() &&
                exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
                isExampleCorrect = true;
                break;
            }
        }
    }


    if (isExampleCorrect) {
        exampleFeedback.textContent = `Correct! (${exampleWordCount} words)`;
        exampleFeedback.className = 'feedback-line correct';
        exampleInput.disabled = true; // Disable example input if correct
        showExampleAnswerBtn.style.display = 'none'; // Hide "Show Answer" button
        updateExerciseProgress(example.id, 'correct'); // Update example progress
    } else {
        let exampleFeedbackMessage = `Incorrect. `;
        if (exampleWordCount < example.minWords || exampleWordCount > example.maxWords) {
            exampleFeedbackMessage += `You must use between ${example.minWords} and ${example.maxWords} words. You used ${exampleWordCount}. `;
        } else if (!exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
            exampleFeedbackMessage += `You must use the word "${example.givenWord}". `;
        }
        if (exampleFeedbackMessage === `Incorrect. `) { // If only "Incorrect." is left, suggest show answer
             exampleFeedbackMessage += `Review instructions or use "Show Answer".`;
        }
        exampleFeedback.textContent = exampleFeedbackMessage;
        exampleFeedback.className = 'feedback-line incorrect';
    }


    // Now check the current actual exercise
    const exercise = transformationExercises[currentExerciseIndex];
    if (!exercise) return; // Should not happen if loadExercise handles completion

    const inputField = document.getElementById(`q${exercise.id}Input`);
    const feedbackLine = document.getElementById(`q${exercise.id}Feedback`);

    const userAnswer = inputField.value.trim();
    const normalizedUserAnswer = userAnswer.toLowerCase();
    const givenWord = exercise.givenWord.toLowerCase();

    const userWords = userAnswer.split(/\s+/).filter(word => word !== '');
    const wordCount = userWords.length;

    // Ensure feedback element is visible
    feedbackLine.style.display = 'block';

    let isCurrentExerciseCorrect = false;
    let currentExerciseFeedbackMessage = '';

    if (wordCount >= exercise.minWords && wordCount <= exercise.maxWords) {
        for (const correctOpt of exercise.correctAnswer) {
            if (normalizedUserAnswer === correctOpt.toLowerCase() &&
                normalizedUserAnswer.includes(givenWord)) {
                isCurrentExerciseCorrect = true;
                break;
            }
        }
    }

    if (isCurrentExerciseCorrect) {
        currentExerciseFeedbackMessage = `Correct! (${wordCount} words)`;
        feedbackLine.className = 'feedback-line correct';
        successSound.play();
        if (exercise.status !== 'correct') { // Only increment if not already marked correct
            score++;
            exercisesCompleted++;
            updateExerciseProgress(exercise.id, 'correct'); // Update progress as correct
        }
    } else {
        currentExerciseFeedbackMessage = "Incorrect. ";
        if (wordCount < exercise.minWords || wordCount > exercise.maxWords) {
            currentExerciseFeedbackMessage += `You must use between ${exercise.minWords} and ${exercise.maxWords} words. You used ${wordCount}. `;
        } else if (!normalizedUserAnswer.includes(givenWord)) {
            currentExerciseFeedbackMessage += `You must use the word "${givenWord}". `;
        }
        if (currentExerciseFeedbackMessage === "Incorrect. ") {
            currentExerciseFeedbackMessage += `Please review the instructions and try again.`;
        }
        feedbackLine.className = 'feedback-line incorrect';
        failSound.play();
        if (exercise.status !== 'correct') { // Don't overwrite 'correct' if already correct
            updateExerciseProgress(exercise.id, 'incorrect'); // Update progress as incorrect
        }
    }
    feedbackLine.textContent = currentExerciseFeedbackMessage;


    currentScoreSpan.textContent = score;
    exercisesCompletedSpan.textContent = exercisesCompleted;

    nextExerciseBtn.style.display = 'inline-block';
    checkAnswersBtn.style.display = isCurrentExerciseCorrect ? 'none' : 'inline-block'; // Hide check if correct
    skipExerciseBtn.style.display = 'inline-block'; // Keep skip visible
}

function showExampleAnswer() {
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput && exampleFeedback) {
        // Display the first correct answer from the array
        exampleInput.value = example.correctAnswer[0];
        updateWordCount('exampleInput', 'exampleWordCount');
        exampleFeedback.textContent = `Correct Answer: "${example.correctAnswer[0]}"`;
        exampleFeedback.className = 'feedback-line correct';
        exampleFeedback.style.display = 'block';
        exampleInput.disabled = true; // Disable input after showing answer
        showExampleAnswerBtn.style.display = 'none'; // Hide the button
        updateExerciseProgress(example.id, 'correct'); // Mark example as correct in sidebar
    }
}

// NEW: Function to handle skipping an exercise
function skipExercise() {
    const exercise = transformationExercises[currentExerciseIndex];
    if (exercise && exercise.status !== 'correct') { // Only mark as skipped if not already correct
        updateExerciseProgress(exercise.id, 'skipped');
    }
    nextExercise(); // Move to the next exercise
}


function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex < transformationExercises.length) {
        loadExercise();
    } else {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none'; // Hide skip button on completion
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
    }
}

// Event Listeners
checkAnswersBtn.addEventListener('click', checkAnswers);
skipExerciseBtn.addEventListener('click', skipExercise); // Event listener for skip button
nextExerciseBtn.addEventListener('click', nextExercise);
showExampleAnswerBtn.addEventListener('click', showExampleAnswer);

searchExternalDictionaryBtn.addEventListener('click', () => {
    const word = externalWordLookupInput.value.trim();
    if (word) {
        // Example: Merriam-Webster
        dictionaryIframe.src = `https://www.merriam-webster.com/dictionary/${word}`;
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Initializing progress list.");
    // Ensure the list is cleared before re-populating to prevent duplicates on some reloads
    exerciseProgressList.innerHTML = '';

    // Initialize the status for all exercises (including the example) and build the progress list
    transformationExercises.forEach(exercise => {
        if (!exercise.status) { // Ensure status property exists, default to 'pending'
            exercise.status = 'pending';
        }
        updateExerciseProgress(exercise.id, exercise.status); // Use the unified function
        console.log(`Initialized Question ${exercise.id} with status: ${exercise.status}.`);
    });

    loadExercise();
    console.log("loadExercise called.");
});