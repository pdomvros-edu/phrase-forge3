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
        suffix: "he would eventually get promoted.",
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
        sentence1: "The company aims to increase its profits by 15% next year. ",
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
        sentence1: "She has been trying to improve her English for a long time. ",
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
    },
    {
        id: 51,
        sentence1: "It's impossible to deny that he was involved in the crime.",
        givenWord: "no",
        prefix: "There's",
        suffix: "he was involved in the crime.",
        correctAnswer: ["no denying the fact that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 52,
        sentence1: "She didn't want to get involved in the political debate.",
        givenWord: "clear",
        prefix: "She wanted to steer",
        suffix: "the political debate.",
        correctAnswer: ["clear of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 53,
        sentence1: "He was completely unaware of the consequences of his actions.",
        givenWord: "conscious",
        prefix: "He was not at all",
        suffix: "the consequences of his actions.",
        correctAnswer: ["conscious of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 54,
        sentence1: "I wish I had saved more money when I was younger.",
        givenWord: "regretting",
        prefix: "I'm",
        suffix: "more money when I was younger.",
        correctAnswer: ["regretting not having saved"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 55,
        sentence1: "The heavy traffic caused the delay of the bus.",
        givenWord: "resulted",
        prefix: "The heavy traffic",
        suffix: "the bus's delay.",
        correctAnswer: ["resulted in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 56,
        sentence1: "You must adhere strictly to these safety regulations.",
        givenWord: "adherence",
        prefix: "Strict",
        suffix: "these safety regulations is mandatory.",
        correctAnswer: ["adherence to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 57,
        sentence1: "He is very skillful at negotiating deals.",
        givenWord: "flair",
        prefix: "He has a real",
        suffix: "deals.",
        correctAnswer: ["flair for negotiating"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 58,
        sentence1: "Very few people attend the evening classes.",
        givenWord: "turnout",
        prefix: "There's a very low",
        suffix: "the evening classes.",
        correctAnswer: ["turnout for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 59,
        sentence1: "The company is unwilling to compromise on its principles.",
        givenWord: "prepared",
        prefix: "The company is not",
        suffix: "on its principles.",
        correctAnswer: ["prepared to compromise"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 60,
        sentence1: "It's important to keep yourself informed about current affairs.",
        givenWord: "abreast",
        prefix: "It's important to keep",
        suffix: "current affairs.",
        correctAnswer: ["abreast of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 61,
        sentence1: "His arrogance makes him unpopular with his team members.",
        givenWord: "puts",
        prefix: "His arrogance",
        suffix: "his team members.",
        correctAnswer: ["puts him off with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 62,
        sentence1: "I really don't feel like watching a movie tonight.",
        givenWord: "mood",
        prefix: "I'm not in the",
        suffix: "a movie tonight.",
        correctAnswer: ["mood for watching"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 63,
        sentence1: "They only managed to escape because of the quick thinking of the police.",
        givenWord: "had",
        prefix: "",
        suffix: "not been for the quick thinking of the police, they wouldn't have escaped.",
        correctAnswer: ["Had it"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 64,
        sentence1: "She couldn't stop worrying about her son's safety.",
        givenWord: "mind",
        prefix: "Her son's safety was constantly",
        suffix: ".",
        correctAnswer: ["on her mind"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 65,
        sentence1: "I never had any doubt that he would eventually get promoted.",
        givenWord: "crossed",
        prefix: "It never",
        suffix: "he would eventually get promoted.",
        correctAnswer: ["crossed my mind that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 66,
        sentence1: "It's pointless to dwell on past mistakes.",
        givenWord: "point",
        prefix: "There's",
        suffix: "on past mistakes.",
        correctAnswer: ["no point in dwelling"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 67,
        sentence1: "They blamed him for the failure of the project.",
        givenWord: "placed",
        prefix: "They",
        suffix: "for the failure of the project.",
        correctAnswer: ["placed the blame on him"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 68,
        sentence1: "He is extremely optimistic about the company's future.",
        givenWord: "rosy",
        prefix: "He takes a",
        suffix: "the company's future.",
        correctAnswer: ["rosy view of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 69,
        sentence1: "You can always count on him to help you out.",
        givenWord: "rely",
        prefix: "You can always",
        suffix: "to help you out.",
        correctAnswer: ["rely on him"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 70,
        sentence1: "She didn't want to sign the contract until she had read all the clauses.",
        givenWord: "reluctance",
        prefix: "It was with some",
        suffix: "the contract until she had read all the clauses.",
        correctAnswer: ["reluctance that she signed"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 71,
        sentence1: "I couldn't help but feel sorry for her.",
        givenWord: "but",
        prefix: "I could do nothing",
        suffix: "sorry for her.",
        correctAnswer: ["but feel"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 72,
        sentence1: "He promised to repay the loan by the end of the month.",
        givenWord: "word",
        prefix: "He",
        suffix: "repay the loan by the end of the month.",
        correctAnswer: ["gave his word to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 73,
        sentence1: "People say that she is an exceptionally talented artist.",
        givenWord: "believed",
        prefix: "She is",
        suffix: "an exceptionally talented artist.",
        correctAnswer: ["believed to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 74,
        sentence1: "She completely ignored his advice.",
        givenWord: "notice",
        prefix: "She took no",
        suffix: "his advice.",
        correctAnswer: ["notice of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 75,
        sentence1: "He was so shocked that he was speechless.",
        givenWord: "loss",
        prefix: "He was at a",
        suffix: "due to shock.",
        correctAnswer: ["loss for words"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 76,
        sentence1: "The government introduced new legislation to protect consumers.",
        givenWord: "brought",
        prefix: "New legislation was",
        suffix: "to protect consumers.",
        correctAnswer: ["brought in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 77,
        sentence1: "His resignation was completely unexpected.",
        givenWord: "came",
        prefix: "His resignation",
        suffix: "a complete surprise to everyone.",
        correctAnswer: ["came as"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 78,
        sentence1: "I would prefer you not to play loud music after midnight.",
        givenWord: "rather",
        prefix: "I would",
        suffix: "play loud music after midnight.",
        correctAnswer: ["rather you didn't"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 79,
        sentence1: "He tried to remain neutral in the argument.",
        givenWord: "sides",
        prefix: "He tried not to",
        suffix: "in the argument.",
        correctAnswer: ["take sides"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 80,
        sentence1: "It's very likely that she will succeed in her new venture.",
        givenWord: "strong",
        prefix: "There's a",
        suffix: "succeed in her new venture.",
        correctAnswer: ["strong chance that she'll"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 81,
        sentence1: "She is always complaining about trivial things.",
        givenWord: "fault",
        prefix: "She is always finding",
        suffix: "trivial things.",
        correctAnswer: ["fault with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 82,
        sentence1: "He's highly unlikely to change his mind now.",
        givenWord: "prospect",
        prefix: "There's little",
        suffix: "his mind now.",
        correctAnswer: ["prospect of him changing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 83,
        sentence1: "I regret not having taken your advice.",
        givenWord: "wished",
        prefix: "I",
        suffix: "your advice.",
        correctAnswer: ["wished I had taken"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 84,
        sentence1: "She has been trying very hard to master the guitar.",
        givenWord: "efforts",
        prefix: "She has been making considerable",
        suffix: "the guitar.",
        correctAnswer: ["efforts to master"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 85,
        sentence1: "You should contribute more to the team effort.",
        givenWord: "part",
        prefix: "You should play a bigger",
        suffix: "the team effort.",
        correctAnswer: ["part in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 86,
        sentence1: "The new proposals were heavily criticized by the public.",
        givenWord: "came",
        prefix: "The new proposals",
        suffix: "heavy criticism from the public.",
        correctAnswer: ["came in for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 87,
        sentence1: "His sudden arrival surprised everyone.",
        givenWord: "took",
        prefix: "His sudden arrival",
        suffix: "surprise.",
        correctAnswer: ["took everyone by"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 88,
        sentence1: "She finally agreed to the terms after lengthy negotiations.",
        givenWord: "eventually",
        prefix: "After lengthy negotiations, she",
        suffix: "the terms.",
        correctAnswer: ["eventually agreed to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 89,
        sentence1: "I strongly advise you to reconsider your career choice.",
        givenWord: "well",
        prefix: "You would",
        suffix: "your career choice.",
        correctAnswer: ["do well to reconsider"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 90,
        sentence1: "He found it difficult to concentrate during the long meeting.",
        givenWord: "difficulty",
        prefix: "He had",
        suffix: "during the long meeting.",
        correctAnswer: ["difficulty concentrating"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 91,
        sentence1: "His rudeness was completely out of character.",
        givenWord: "like",
        prefix: "It was not",
        suffix: "so rude.",
        correctAnswer: ["like him to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 92,
        sentence1: "They decided to get rid of the old database system.",
        givenWord: "away",
        prefix: "They decided to do",
        suffix: "the old database system.",
        correctAnswer: ["away with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 93,
        sentence1: "She is completely indifferent to his pleas for help.",
        givenWord: "interest",
        prefix: "She takes no",
        suffix: "his pleas for help.",
        correctAnswer: ["interest in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 94,
        sentence1: "I can't stand people who constantly interrupt.",
        givenWord: "put",
        prefix: "I can't",
        suffix: "people who constantly interrupt.",
        correctAnswer: ["put up with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 95,
        sentence1: "He tried his best to win the chess tournament.",
        givenWord: "efforts",
        prefix: "He made every",
        suffix: "win the chess tournament.",
        correctAnswer: ["effort to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 96,
        sentence1: "In my opinion, the new law is unfair.",
        givenWord: "view",
        prefix: "In my",
        suffix: "the new law is unfair.",
        correctAnswer: ["view, I think"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 97,
        sentence1: "The company decided to start fresh after the scandal.",
        givenWord: "wipe",
        prefix: "The company decided to",
        suffix: "clean after the scandal.",
        correctAnswer: ["wipe the slate"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 98,
        sentence1: "Their attempts to rescue the cat were ultimately unsuccessful.",
        givenWord: "no",
        prefix: "Their attempts to rescue the cat were",
        suffix: ".",
        correctAnswer: ["of no avail"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 99,
        sentence1: "I deeply regret having lied to you.",
        givenWord: "wished",
        prefix: "I",
        suffix: "to you.",
        correctAnswer: ["wished I hadn't lied"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 100,
        sentence1: "People generally believe that he is a reliable source of information.",
        givenWord: "widely",
        prefix: "He is",
        suffix: "a reliable source of information.",
        correctAnswer: ["widely believed to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 101,
        sentence1: "It's absolutely essential that you don't reveal this confidential information.",
        givenWord: "account",
        prefix: "On no",
        suffix: "this confidential information to anyone.",
        correctAnswer: ["account must you reveal"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 102,
        sentence1: "He was so engrossed in his research that he forgot about dinner.",
        givenWord: "lost",
        prefix: "He was so",
        suffix: "his research that he forgot about dinner.",
        correctAnswer: ["lost in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 103,
        sentence1: "I never imagined that she would become such a successful entrepreneur.",
        givenWord: "dream",
        prefix: "I never",
        suffix: "she would become such a successful entrepreneur.",
        correctAnswer: ["dreamt that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 104,
        sentence1: "She has an excellent understanding of modern art history.",
        givenWord: "versed",
        prefix: "She is very",
        suffix: "modern art history.",
        correctAnswer: ["well versed in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 105,
        sentence1: "The city council intends to build a new sports complex next year.",
        givenWord: "plans",
        prefix: "The city council has",
        suffix: "a new sports complex next year.",
        correctAnswer: ["plans to build"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 106,
        sentence1: "You are not permitted to enter the restricted area without authorization.",
        givenWord: "prohibited",
        prefix: "Entry into the restricted area is strictly",
        suffix: "without authorization.",
        correctAnswer: ["prohibited"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 107,
        sentence1: "He felt completely relaxed and uninhibited at the jazz club.",
        givenWord: "ease",
        prefix: "He felt completely at",
        suffix: "at the jazz club.",
        correctAnswer: ["ease"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 108,
        sentence1: "He was too proud to ask for help with his financial problems.",
        givenWord: "swallowed",
        prefix: "His pride prevented him from",
        suffix: "ask for help with his financial problems.",
        correctAnswer: ["swallowing his pride to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 109,
        sentence1: "The sudden unexpected news made her burst into tears.",
        givenWord: "broke",
        prefix: "On hearing the sudden unexpected news, she",
        suffix: ".",
        correctAnswer: ["broke down in tears"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 110,
        sentence1: "He found it difficult to adapt to the new working environment.",
        givenWord: "accustomed",
        prefix: "He had difficulty",
        suffix: "the new working environment.",
        correctAnswer: ["becoming accustomed to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 111,
        sentence1: "Her failure to get the scholarship was a great disappointment.",
        givenWord: "came",
        prefix: "Her failure to get the scholarship",
        suffix: "a great disappointment.",
        correctAnswer: ["came as"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 112,
        sentence1: "He rarely expresses his feelings openly.",
        givenWord: "vent",
        prefix: "He rarely gives",
        suffix: "his feelings openly.",
        correctAnswer: ["vent to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 113,
        sentence1: "The committee suggested postponing the decision until next week.",
        givenWord: "put",
        prefix: "The committee suggested",
        suffix: "the decision until next week.",
        correctAnswer: ["putting off"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 114,
        sentence1: "She only wears casual clothes if she's staying at home.",
        givenWord: "unless",
        prefix: "She doesn't wear casual clothes",
        suffix: "at home.",
        correctAnswer: ["unless she's staying"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 115,
        sentence1: "I only understood the joke after he explained it to me.",
        givenWord: "until",
        prefix: "It wasn't",
        suffix: "I understood the joke.",
        correctAnswer: ["until he explained it that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 116,
        sentence1: "His dedication to his work is truly admirable.",
        givenWord: "entirely",
        prefix: "He is",
        suffix: "his work.",
        correctAnswer: ["entirely devoted to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 117,
        sentence1: "I'm not in the mood for going out tonight.",
        givenWord: "feel",
        prefix: "I don't",
        suffix: "out tonight.",
        correctAnswer: ["feel like going"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 118,
        sentence1: "The new regulations will take effect from the beginning of next month.",
        givenWord: "into",
        prefix: "The new regulations will come",
        suffix: "from the beginning of next month.",
        correctAnswer: ["into force"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 119,
        sentence1: "He finds great pleasure in helping others.",
        givenWord: "derives",
        prefix: "He",
        suffix: "helping others.",
        correctAnswer: ["derives great pleasure from"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 120,
        sentence1: "There's no point in worrying about things you can't change.",
        givenWord: "use",
        prefix: "It's no",
        suffix: "things you can't change.",
        correctAnswer: ["use worrying about"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 121,
        sentence1: "He denied that he had taken the money.",
        givenWord: "denied",
        prefix: "He",
        suffix: "the money.",
        correctAnswer: ["denied taking"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 122,
        sentence1: "She managed to finish the report despite numerous distractions.",
        givenWord: "succeed",
        prefix: "She managed to",
        suffix: "the report despite numerous distractions.",
        correctAnswer: ["succeed in finishing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 123,
        sentence1: "It's important to consider all aspects of the problem before making a decision.",
        givenWord: "account",
        prefix: "You should take into",
        suffix: "of the problem before making a decision.",
        correctAnswer: ["account all aspects"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 124,
        sentence1: "His interpretation of the poem was very different from mine.",
        givenWord: "difference",
        prefix: "There was a considerable",
        suffix: "his interpretation of the poem and mine.",
        correctAnswer: ["difference between"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 125,
        sentence1: "The students are certain to pass their exams.",
        givenWord: "bound",
        prefix: "The students are",
        suffix: "their exams.",
        correctAnswer: ["bound to pass"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 126,
        sentence1: "I find it very hard to memorize long lists of vocabulary.",
        givenWord: "difficulty",
        prefix: "I have great",
        suffix: "long lists of vocabulary.",
        correctAnswer: ["difficulty memorizing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 127,
        sentence1: "She has been trying to master French for years.",
        givenWord: "efforts",
        prefix: "She has been making tireless",
        suffix: "French for years.",
        correctAnswer: ["efforts to master"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 128,
        sentence1: "The company decided to make some employees redundant.",
        givenWord: "redundancies",
        prefix: "The company decided to",
        suffix: ".",
        correctAnswer: ["make some redundancies"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 129,
        sentence1: "He was completely unaware of the public's opinion of him.",
        givenWord: "knowledge",
        prefix: "He had no",
        suffix: "the public's opinion of him.",
        correctAnswer: ["knowledge whatsoever of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 130,
        sentence1: "I never intended to embarrass you in front of everyone.",
        givenWord: "furthest",
        prefix: "It was the",
        suffix: "embarrass you in front of everyone.",
        correctAnswer: ["furthest thing from my mind to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 131,
        sentence1: "Her new song is inferior to her previous hit.",
        givenWord: "comparison",
        prefix: "Her new song doesn't",
        suffix: "her previous hit.",
        correctAnswer: ["bear comparison with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 132,
        sentence1: "He was so furious that he started shouting uncontrollably.",
        givenWord: "rage",
        prefix: "He was in such a",
        suffix: "he started shouting uncontrollably.",
        correctAnswer: ["rage that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 133,
        sentence1: "You will only get access to the building if you have a valid ID.",
        givenWord: "condition",
        prefix: "Only on",
        suffix: "get access to the building.",
        correctAnswer: ["condition that you have a valid ID will you"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 134,
        sentence1: "He readily accepted the challenging assignment.",
        givenWord: "hesitation",
        prefix: "He accepted the challenging assignment without",
        suffix: ".",
        correctAnswer: ["any hesitation"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 135,
        sentence1: "The company's financial situation has improved significantly.",
        givenWord: "improvement",
        prefix: "There has been a significant",
        suffix: "the company's financial situation.",
        correctAnswer: ["improvement in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 136,
        sentence1: "It's pointless to offer him any more advice.",
        givenWord: "worth",
        prefix: "It's not",
        suffix: "him any more advice.",
        correctAnswer: ["worth offering"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 137,
        sentence1: "He started coughing uncontrollably as soon as he entered the smoky room.",
        givenWord: "barely",
        prefix: "He had",
        suffix: "the smoky room when he started coughing uncontrollably.",
        correctAnswer: ["barely entered"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 138,
        sentence1: "Her reaction to the news was very surprising.",
        givenWord: "came",
        prefix: "Her reaction to the news",
        suffix: "a great surprise.",
        correctAnswer: ["came as"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 139,
        sentence1: "He succeeded in developing a new vaccine.",
        givenWord: "managed",
        prefix: "He",
        suffix: "a new vaccine.",
        correctAnswer: ["managed to develop"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 140,
        sentence1: "It's highly probable that the team will win the championship.",
        givenWord: "likelihood",
        prefix: "There's a strong",
        suffix: "the team winning the championship.",
        correctAnswer: ["likelihood of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 141,
        sentence1: "I wish I had paid more attention during the history lecture.",
        givenWord: "only",
        prefix: "If",
        suffix: "more attention during the history lecture.",
        correctAnswer: ["only I had paid"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 142,
        sentence1: "She regrets not having pursued a career in medicine.",
        givenWord: "wishes",
        prefix: "She",
        suffix: "a career in medicine.",
        correctAnswer: ["wishes she had pursued"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 143,
        sentence1: "They accused him of committing fraud.",
        givenWord: "committed",
        prefix: "He was",
        suffix: "fraud.",
        correctAnswer: ["accused of having committed"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 144,
        sentence1: "It was impossible for us to attend the conference.",
        givenWord: "out",
        prefix: "Attending the conference was",
        suffix: "us.",
        correctAnswer: ["out of the question for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 145,
        sentence1: "The strict rules forced us to work overtime.",
        givenWord: "had",
        prefix: "We",
        suffix: "by the strict rules.",
        correctAnswer: ["had to work overtime"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 146,
        sentence1: "He was very impressed by her artistic talent.",
        givenWord: "impression",
        prefix: "Her artistic talent",
        suffix: "him.",
        correctAnswer: ["made a great impression on"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 147,
        sentence1: "I couldn't understand the complex instructions.",
        givenWord: "sense",
        prefix: "I couldn't make",
        suffix: "the complex instructions.",
        correctAnswer: ["sense of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 148,
        sentence1: "She is reluctant to disclose her personal details.",
        givenWord: "unwilling",
        prefix: "She is",
        suffix: "her personal details.",
        correctAnswer: ["unwilling to disclose"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 149,
        sentence1: "His laziness led to his dismissal from the job.",
        givenWord: "consequence",
        prefix: "His dismissal from the job was a",
        suffix: "his laziness.",
        correctAnswer: ["consequence of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 150,
        sentence1: "You are not allowed to use cameras in this museum.",
        givenWord: "strictly",
        prefix: "The use of cameras in this museum is",
        suffix: ".",
        correctAnswer: ["strictly prohibited"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 151,
        sentence1: "She finds great satisfaction in helping disadvantaged children.",
        givenWord: "derives",
        prefix: "She",
        suffix: "helping disadvantaged children.",
        correctAnswer: ["derives great satisfaction from"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 152,
        sentence1: "It's impossible to predict the outcome of the negotiations.",
        givenWord: "telling",
        prefix: "There is",
        suffix: "of the negotiations.",
        correctAnswer: ["no telling what the outcome will be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 153,
        sentence1: "He was completely unaware of the negative impact of his decision.",
        givenWord: "conscious",
        prefix: "He was not at all",
        suffix: "the negative impact of his decision.",
        correctAnswer: ["conscious of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 154,
        sentence1: "The company decided to reduce its workforce significantly.",
        givenWord: "cut",
        prefix: "The company decided to make a",
        suffix: "its workforce.",
        correctAnswer: ["cut in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 155,
        sentence1: "I never considered him a suitable candidate for such a demanding role.",
        givenWord: "strike",
        prefix: "He didn't",
        suffix: "a suitable candidate for such a demanding role.",
        correctAnswer: ["strike me as"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 156,
        sentence1: "His rude remarks were completely uncalled for.",
        givenWord: "account",
        prefix: "His rude remarks were",
        suffix: ". ",
        correctAnswer: ["on no account justified"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 157,
        sentence1: "She always avoids confronting difficult situations.",
        givenWord: "shies",
        prefix: "She always",
        suffix: "difficult situations.",
        correctAnswer: ["shies away from"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 158,
        sentence1: "Only by working collaboratively can we achieve our goals.",
        givenWord: "unless",
        prefix: "We cannot achieve our goals",
        suffix: "collaboratively.",
        correctAnswer: ["unless we work"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 159,
        sentence1: "He was so angry that he couldn't utter a single word.",
        givenWord: "loss",
        prefix: "He was at a",
        suffix: "he was so angry.",
        correctAnswer: ["loss for words because"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 160,
        sentence1: "I wish I had paid more attention during the seminar.",
        givenWord: "regretting",
        prefix: "I'm",
        suffix: "more attention during the seminar.",
        correctAnswer: ["regretting not having paid"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 161,
        sentence1: "It's futile to try and convince her otherwise.",
        givenWord: "point",
        prefix: "There's",
        suffix: "and convince her otherwise.",
        correctAnswer: ["no point in trying to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 162,
        sentence1: "The bad weather prevented us from reaching the summit.",
        givenWord: "account",
        prefix: "On no",
        suffix: "reach the summit.",
        correctAnswer: ["account did we manage to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 163,
        sentence1: "She is completely dedicated to her family.",
        givenWord: "entirely",
        prefix: "She is",
        suffix: "her family.",
        correctAnswer: ["entirely devoted to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 164,
        sentence1: "His disappearance remains a complete mystery to everyone.",
        givenWord: "no",
        prefix: "There is",
        suffix: "his disappearance.",
        correctAnswer: ["no explanation whatsoever for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 165,
        sentence1: "The new policy will be implemented without delay.",
        givenWord: "effect",
        prefix: "The new policy will come",
        suffix: "delay.",
        correctAnswer: ["into effect without"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 166,
        sentence1: "I never had any intention of hurting your feelings.",
        givenWord: "least",
        prefix: "The",
        suffix: "hurt your feelings.",
        correctAnswer: ["last thing I wanted was to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 167,
        sentence1: "She is very good at understanding people's emotions.",
        givenWord: "empathy",
        prefix: "She has a great",
        suffix: "people's emotions.",
        correctAnswer: ["deal of empathy for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 168,
        sentence1: "He found it difficult to cope with the sudden pressure.",
        givenWord: "trouble",
        prefix: "He had",
        suffix: "the sudden pressure.",
        correctAnswer: ["trouble coping with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 169,
        sentence1: "The company is currently discussing potential mergers.",
        givenWord: "under",
        prefix: "Potential mergers are",
        suffix: "by the company.",
        correctAnswer: ["under discussion"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 170,
        sentence1: "He was accused of bribery and corruption.",
        givenWord: "allegations",
        prefix: "He faced",
        suffix: "bribery and corruption.",
        correctAnswer: ["allegations of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 171,
        sentence1: "His arrival was completely unexpected.",
        givenWord: "came",
        prefix: "His arrival",
        suffix: "a complete surprise.",
        correctAnswer: ["came as"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 172,
        sentence1: "I'd prefer you to leave your shoes at the door.",
        givenWord: "rather",
        prefix: "I'd",
        suffix: "your shoes at the door.",
        correctAnswer: ["rather you left"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 173,
        sentence1: "It's highly unlikely that she will change her mind now.",
        givenWord: "prospect",
        prefix: "There's little",
        suffix: "her mind now.",
        correctAnswer: ["prospect of her changing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 174,
        sentence1: "She constantly criticizes every decision I make.",
        givenWord: "fault",
        prefix: "She's always finding",
        suffix: "every decision I make.",
        correctAnswer: ["fault with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 175,
        sentence1: "He barely managed to finish the marathon.",
        givenWord: "scrape",
        prefix: "He only just",
        suffix: "the marathon.",
        correctAnswer: ["scraped through finishing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 176,
        sentence1: "He never fails to impress his colleagues with his innovative ideas.",
        givenWord: "always",
        prefix: "He",
        suffix: "his colleagues with his innovative ideas.",
        correctAnswer: ["always impresses"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 177,
        sentence1: "The new regulations will affect all employees.",
        givenWord: "implications",
        prefix: "The new regulations will have",
        suffix: "all employees.",
        correctAnswer: ["implications for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 178,
        sentence1: "I regret not having learned to play a musical instrument.",
        givenWord: "wished",
        prefix: "I",
        suffix: "to play a musical instrument.",
        correctAnswer: ["wished I had learned"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 179,
        sentence1: "His explanation was very confusing.",
        givenWord: "make",
        prefix: "I couldn't",
        suffix: "his explanation.",
        correctAnswer: ["make sense of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 180,
        sentence1: "They were determined to complete the task by the deadline.",
        givenWord: "intent",
        prefix: "They were",
        suffix: "the task by the deadline.",
        correctAnswer: ["intent on completing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 181,
        sentence1: "She's highly skilled at organizing large events.",
        givenWord: "flair",
        prefix: "She has a remarkable",
        suffix: "large events.",
        correctAnswer: ["flair for organizing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 182,
        sentence1: "It's not worth trying to persuade him; he's too stubborn.",
        givenWord: "point",
        prefix: "There's",
        suffix: "him; he's too stubborn.",
        correctAnswer: ["no point in trying to persuade"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 183,
        sentence1: "The company has seen a significant increase in sales this quarter.",
        givenWord: "increase",
        prefix: "There has been a significant",
        suffix: "sales this quarter.",
        correctAnswer: ["increase in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 184,
        sentence1: "Only when the sun set did we decide to pack up our picnic.",
        givenWord: "until",
        prefix: "It wasn't",
        suffix: "we decided to pack up our picnic.",
        correctAnswer: ["until the sun set that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 185,
        sentence1: "He's notoriously difficult to please.",
        givenWord: "known",
        prefix: "He's",
        suffix: "difficult to please.",
        correctAnswer: ["known for being"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 186,
        sentence1: "I never doubted that he would eventually get over his illness.",
        givenWord: "question",
        prefix: "There was",
        suffix: "eventually getting over his illness.",
        correctAnswer: ["no question about him"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 187,
        sentence1: "She rarely visits her relatives nowadays.",
        givenWord: "hardly",
        prefix: "She",
        suffix: "her relatives nowadays.",
        correctAnswer: ["hardly ever visits"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 188,
        sentence1: "His remarks caused a lot of anger among the audience.",
        givenWord: "gave",
        prefix: "His remarks",
        suffix: "among the audience.",
        correctAnswer: ["gave rise to a lot of anger"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 189,
        sentence1: "It's absolutely forbidden to light fires in this forest.",
        givenWord: "account",
        prefix: "On no",
        suffix: "fires in this forest.",
        correctAnswer: ["account are you to light"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 190,
        sentence1: "The new software is a great improvement on the previous version.",
        givenWord: "superior",
        prefix: "The new software is far",
        suffix: "the previous version.",
        correctAnswer: ["superior to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 191,
        sentence1: "She is completely absorbed in her artistic creations.",
        givenWord: "lost",
        prefix: "She is completely",
        suffix: "her artistic creations.",
        correctAnswer: ["lost in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 192,
        sentence1: "He was dismissed due to his misconduct.",
        givenWord: "resulted",
        prefix: "His misconduct",
        suffix: "his dismissal.",
        correctAnswer: ["resulted in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 193,
        sentence1: "I regret not having studied harder for the exam.",
        givenWord: "only",
        prefix: "If",
        suffix: "harder for the exam.",
        correctAnswer: ["only I had studied"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 194,
        sentence1: "You must consider all the consequences before acting.",
        givenWord: "account",
        prefix: "You must take into",
        suffix: "before acting.",
        correctAnswer: ["account all the consequences"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 195,
        sentence1: "People say that she is a very influential figure.",
        givenWord: "said",
        prefix: "She is",
        suffix: "a very influential figure.",
        correctAnswer: ["said to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 196,
        sentence1: "I finally understood the complex theory after hours of study.",
        givenWord: "make",
        prefix: "I finally managed to",
        suffix: "the complex theory after hours of study.",
        correctAnswer: ["make sense of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 197,
        sentence1: "He is very likely to agree to our terms.",
        givenWord: "strong",
        prefix: "There's a",
        suffix: "agree to our terms.",
        correctAnswer: ["strong likelihood that he'll"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 198,
        sentence1: "She accepted the job offer without any hesitation.",
        givenWord: "readiness",
        prefix: "She accepted the job offer with",
        suffix: ". ",
        correctAnswer: ["great readiness"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 199,
        sentence1: "His rude behavior was unacceptable under any circumstances.",
        givenWord: "line",
        prefix: "His rude behavior was completely",
        suffix: "acceptable standards.",
        correctAnswer: ["out of line with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 200,
        sentence1: "It's pointless to complain about the decision now.",
        givenWord: "use",
        prefix: "It's ",
        suffix: "the decision now.",
        correctAnswer: ["no use complaining about"],
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
const skipExerciseBtn = document.getElementById('skipExerciseBtn');
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
// This will correctly show 200 for Phrase Forge 3's full set
totalExercisesSpan.textContent = transformationExercises.length - 1;

function updateWordCount(inputId, countSpanId) {
    const inputField = document.getElementById(inputId);
    const countSpan = document.getElementById(countSpanId);
    if (inputField && countSpan) {
        const text = inputField.value.trim();
        // Filter to ensure empty strings from multiple spaces are not counted as words
        const words = text === "" ? 0 : text.split(/\s+/).filter(word => word !== '').length;
        countSpan.textContent = `${words} words`;
    }
}

function updateExerciseProgress(exerciseId, newStatus) {
    let listItem = document.getElementById(`progress-q${exerciseId}`);
    const exercise = transformationExercises.find(ex => ex.id === exerciseId);

    if (exercise) { // Ensure we have a valid exercise object
        // Only update the internal status if the new status is 'correct', or if the current status
        // is less definitive (pending, incorrect, skipped). This prevents lower statuses from overwriting 'correct'.
        if (newStatus === 'correct' || exercise.status === 'pending' || exercise.status === 'incorrect' || exercise.status === 'skipped') {
             exercise.status = newStatus;
        }
    } else {
        console.error(`Error: Exercise with ID ${exerciseId} not found in transformationExercises array.`);
        return; // Exit function if exercise not found
    }

    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `progress-q${exerciseId}`;
        exerciseProgressList.appendChild(listItem);
    }

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
            listItem.textContent = `Question ${exerciseId}: ↷ (Skipped)`;
            listItem.className = 'skipped-progress';
            break;
        case 'pending':
        default: // This catches any unhandled or default 'pending' cases
            listItem.textContent = `Question ${exerciseId}: Pending`;
            listItem.className = ''; // Or a specific 'pending-progress' class if you define one in CSS
            break;
    }
}

function loadExercise() {
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput) {
        exampleInput.value = "";
        exampleInput.disabled = false;
    }
    if (exampleFeedback) {
        exampleFeedback.style.display = 'none';
        exampleFeedback.classList.remove('correct', 'incorrect');
    }
    updateWordCount('exampleInput', 'exampleWordCount');
    if (showExampleAnswerBtn) {
        showExampleAnswerBtn.style.display = 'inline-block';
    }

    // Ensure we start from the first actual exercise (ID 1) if current index is 0
    if (currentExerciseIndex === 0) {
        currentExerciseIndex = 1;
    }

    const exercise = transformationExercises[currentExerciseIndex];

    if (!exercise) { // No more exercises
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none';
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
        return;
    }

    // Generate HTML for the current exercise
    questionsContainer.innerHTML = `
        <div class="transformation-question" data-id="${exercise.id}">
            <p>${exercise.id}. ${exercise.sentence1}</p>
            <p class="given-word">Word Given: ${exercise.givenWord}</p>
            <p><span class="input-sentence-part">${exercise.prefix}</span><input type="text" id="q${exercise.id}Input" class="transformation-input" placeholder="Enter your answer" onkeyup="updateWordCount('q${exercise.id}Input', 'q${exercise.id}WordCount')"><span class="input-sentence-part">${exercise.suffix}</span></p>
            <span class="word-count" id="q${exercise.id}WordCount">0 words</span>
            <div class="feedback-line" id="q${exercise.id}Feedback"></div>
        </div>
    `;

    const currentInputField = document.getElementById(`q${exercise.id}Input`);
    if (currentInputField) {
        currentInputField.disabled = false; // Enable input for new questions
    }

    updateWordCount(`q${exercise.id}Input`, `q${exercise.id}WordCount`);

    exerciseFeedback.style.display = 'none'; // Hide general feedback message

    // Control button visibility based on the status of the CURRENT exercise
    if (exercise.status === 'correct') {
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none';
        nextExerciseBtn.style.display = 'inline-block';
        if (currentInputField) {
            currentInputField.disabled = true; // Disable input for already correct questions
            currentInputField.value = exercise.correctAnswer[0]; // Show the correct answer
        }
        const currentFeedbackLine = document.getElementById(`q${exercise.id}Feedback`);
        if (currentFeedbackLine) {
            currentFeedbackLine.textContent = `Correct!`;
            currentFeedbackLine.className = 'feedback-line correct';
            currentFeedbackLine.style.display = 'block';
        }

    } else { // For pending, incorrect, or skipped questions
        checkAnswersBtn.style.display = 'inline-block';
        skipExerciseBtn.style.display = 'inline-block';
        nextExerciseBtn.style.display = 'none'; // Only show next after check/skip
    }
}

function checkAnswers() {
    // --- Example Exercise Check ---
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const exampleUserAnswer = exampleInput.value.trim().toLowerCase();
    const exampleUserWords = exampleUserAnswer.split(/\s+/).filter(word => word !== '').length;

    if (exampleFeedback) exampleFeedback.style.display = 'block';

    let isExampleCorrect = false;
    if (exampleUserWords >= example.minWords && exampleUserWords <= example.maxWords) {
        for (const correctOpt of example.correctAnswer) {
            if (exampleUserAnswer === correctOpt.toLowerCase() &&
                exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
                isExampleCorrect = true;
                break;
            }
        }
    }

    if (isExampleCorrect) {
        if (exampleFeedback) {
            exampleFeedback.textContent = `Correct! (${exampleUserWords} words)`;
            exampleFeedback.className = 'feedback-line correct';
        }
        if (exampleInput) exampleInput.disabled = true;
        if (showExampleAnswerBtn) showExampleAnswerBtn.style.display = 'none';
        updateExerciseProgress(example.id, 'correct');
    } else {
        let exampleFeedbackMessage = `Incorrect. `;
        if (exampleUserWords < example.minWords || exampleUserWords > example.maxWords) {
            exampleFeedbackMessage += `You must use between ${example.minWords} and ${example.maxWords} words. You used ${exampleUserWords}. `;
        } else if (!exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
            exampleFeedbackMessage += `You must use the word "${example.givenWord}". `;
        }
        if (exampleFeedbackMessage === `Incorrect. `) {
             exampleFeedbackMessage += `Review instructions or use "Show Answer".`;
        }
        if (exampleFeedback) {
            exampleFeedback.textContent = exampleFeedbackMessage;
            exampleFeedback.className = 'feedback-line incorrect';
        }
    }


    // --- Current Main Exercise Check ---
    const exercise = transformationExercises[currentExerciseIndex];
    if (!exercise) return;

    const inputField = document.getElementById(`q${exercise.id}Input`);
    const feedbackLine = document.getElementById(`q${exercise.id}Feedback`);

    const userAnswer = inputField.value.trim();
    const normalizedUserAnswer = userAnswer.toLowerCase();
    const givenWord = exercise.givenWord.toLowerCase();

    const userWords = userAnswer.split(/\s+/).filter(word => word !== '');
    const wordCount = userWords.length;

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
            updateExerciseProgress(exercise.id, 'correct');
        }
        inputField.disabled = true; // Disable input if correct
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
            updateExerciseProgress(exercise.id, 'incorrect');
        }
    }
    feedbackLine.textContent = currentExerciseFeedbackMessage;

    currentScoreSpan.textContent = score;
    exercisesCompletedSpan.textContent = exercisesCompleted;

    nextExerciseBtn.style.display = 'inline-block';
    checkAnswersBtn.style.display = isCurrentExerciseCorrect ? 'none' : 'inline-block';
    skipExerciseBtn.style.display = 'inline-block';
}

function showExampleAnswer() {
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput && exampleFeedback) {
        exampleInput.value = example.correctAnswer[0];
        updateWordCount('exampleInput', 'exampleWordCount');
        exampleFeedback.textContent = `Correct Answer: "${example.correctAnswer[0]}"`;
        exampleFeedback.className = 'feedback-line correct';
        exampleFeedback.style.display = 'block';
        exampleInput.disabled = true;
        showExampleAnswerBtn.style.display = 'none';
        updateExerciseProgress(example.id, 'correct');
    }
}

function skipExercise() {
    const exercise = transformationExercises[currentExerciseIndex];
    if (exercise && exercise.status !== 'correct') { // Only mark as skipped if not already correct
        updateExerciseProgress(exercise.id, 'skipped');
    }
    nextExercise();
}

function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex < transformationExercises.length) {
        loadExercise();
    } else {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none';
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
    }
}

checkAnswersBtn.addEventListener('click', checkAnswers);
skipExerciseBtn.addEventListener('click', skipExercise);
nextExerciseBtn.addEventListener('click', nextExercise);
showExampleAnswerBtn.addEventListener('click', showExampleAnswer);

searchExternalDictionaryBtn.addEventListener('click', () => {
    const word = externalWordLookupInput.value.trim();
    if (word) {
        // Example: Merriam-Webster
        dictionaryIframe.src = `https://www.merriam-webster.com/dictionary/${word}`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Initializing progress list.");
    exerciseProgressList.innerHTML = ''; // Clear existing list items

    transformationExercises.forEach(exercise => {
        // Ensure every exercise object has a status, default to 'pending'
        if (!exercise.status) {
            exercise.status = 'pending';
        }
        updateExerciseProgress(exercise.id, exercise.status); // Call to add to sidebar
        console.log(`Initialized Question ${exercise.id} with status: ${exercise.status}.`);
    });

    loadExercise();
    console.log("loadExercise called.");
});