const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log.bind(console);

const userName = readlineSync.question(chalk.blue("Hey There! Whats your name? "));
log(chalk.blue.bold('\nWelcome to the Quiz!', userName));


const leaderBoard = [
    {
        name: "Bilal",
        score: 10
    },
    {
        name: "Jon Snow",
        score: 9
    },
    {
        name: "Joey",
        score: 8
    }
]

let score = 0;
let levelScore = 0;
const questions = [
    {
        question: "Friends is set up in which city?",
        options: ["a. Los Angeles", "b. New York", "c. Chicago", "d. Houston"],
        answer: "b"
    },
    {
        question: "What character does Joey play in the soap opera Days of our Lives?",
        options: ["a. Kevin", "b. Michael", "c. Ceaser", "d. Drake"],
        answer: "d"

    }, {
        question: "What kind of pet was Marcel?",
        options: ["a. Dog", "b. Cat", "c. Monkey", "d. Fish"],
        answer: "c"
    }, {
        question: "To breakup with Janice,, where does chandler say he is moving?",
        options: ["a. India", "b. Vermont", "c. Lebanon", "d. Yemen"],
        answer: "d"
    },
    {
        question: "What is name of Phoebe's Sister?",
        options: ["a. Ursula", "b. Maeve", "c. Michael", "d. Rachel"],
        answer: "a"
    }
    , {
        question: "What is Joey's favorite food?",
        options: ['a. Pizza', 'b. Burgers', 'c. Sushi', 'd. Ice cream'],
        answer: 'a'
    },
    {
        question: "Monica organises her towels into several categories. But how many?",
        options: ["a. 9", "b. 6", "c. 4", "d. 11"],
        answer: "d"
    },
    {
        question: "What are Monica and Ross' parents called?",
        options: ["a. Jack And Judy", "b. Jack And Jill", "c. Peter And Margaret", "d. Gerry And Mary"],
        answer: "a"
    },
    {
        question: "Chandler and Joey had two pets. What were they called?",
        options: ["a. Don And Ivana", "b. Briand And Larry", "c. Don And Iva", "d. Chick Jr. And Duck Jr."],
        answer: "d"
    },
    {
        question: "What is the name of Joey’s acting agent?",
        options: ["a. Andrea", "b. Estelle", "c. Carole", "d. Martha"],
        answer: "b"
    }, {
        question: "Which job did Rachel’s fiancé Barry Farber do?",
        options: ["a. Salesman", "b. Teacher", "c. Dentist", "d. Lawyer"],
        answer: "c"
    }, {
        question: "Chandler and Ross were a band while they were at college. Can you remember the band's name?",
        options: ["a. Mosh Bros", "b. The Rolling Stones", "c. The Beach", "d. Way/No Way"],
        answer: "d"
    }, {
        question: "Ross is allergic to which kind of fruit?",
        options: ["a. Apples", "b. Bananas", "c. Strawberries", "d. Kiwi"],
        answer: "d"
    }, {
        question: "Monica dated a millionaire for a while. What was his name?",
        options: ["a. Paul", "b. Pete", "c. Joe", "d. James"],
        answer: "b"
    }, {
        question: "What is the name of Phoebe's alter-ego? ",
        options: ["a. Phoebe Needy", "b. Monica Bing", "c. Regina Falange", "d. Elaine"],
        answer: "c"
    }
]
function viewLeaderBoard() {
    log(chalk.greenBright("\nLeaderBoard\n"))
    leaderBoard.forEach((item, index) => {
        log(`Rank ${index + 1} : ${item.name} - Score:${item.score}`);
    })
}


function checkAnswer(currentQuestion, answer) {
    if (answer.toLowerCase() === questions[currentQuestion].answer) {
        log(chalk.green('Correct!'));
        score++;
        levelScore++;
    } else {
        log(chalk.red('Incorrect!'));
    }
    log(chalk.greenBright.bold(`Your score is ${score}\n`));
}


function level(levelNumber) {
    for (let i = (levelNumber - 1) * 5; i < levelNumber * 5; i++) {
        log(chalk.bold("------------------"));
        log(chalk.cyanBright(`Q${i + 1}->`, questions[i].question, "\n"));

        questions[i].options.forEach(option => {
            log(chalk.yellow.bold(option));
        })

        const answer = readlineSync.question(chalk.white.bold('\nYour answer: '), {
            limit: ['a', 'b', 'c', 'd'],
            caseSensitive: false
        });
        checkAnswer(i, answer);
    }
}

function result() {
    if (score === 15) {
        log(chalk.green.bold('\nCongratulations! You have passed the quiz!'));
        log(chalk.green.bold('You have scored a total of 15/15'));
        log(chalk.green.bold('You are a true FRIENDS fan!'));
    }
    else if (score >= 10) {
        log(chalk.green.bold('\nCongratulations! You have passed the quiz!'));
        log(chalk.green.bold(`You have scored a total of ${score}/15`));
        log(chalk.green.bold('You are an average FRIENDS fan!'));;
    } else if (score >= 5) {
        log(chalk.green.bold(`\nYou have scored a total of ${score}/15`));
        log(chalk.red.bold('You are a weak FRIENDS fan!'));
    } else {
        log(chalk.red.bold(`\nYou have scored a total of ${score}/15`));
    }
}

function game() {

    log(chalk.bold("\nLEVEL 1"));
    level(1);
    if (levelScore >= 3) {
        levelScore = 0;
        log(chalk.bold("Congratulations! You passed the level 1"));
        log(chalk.bold("\nLEVEL 2"));
        level(2);
    } else {
        log(chalk.bold("Sorry! You failed the level 1"));
        result();
        return;
    }
    if (levelScore >= 3) {
        levelScore = 0;
        log(chalk.bold("Congratulations! You passed the level 2"));
        log(chalk.bold("\nLEVEL 3"));
        level(3);
        result();
    } else {
        log(chalk.bold("Sorry! You failed the level 2"));
        result();
        return;
    }

}
function app() {
    log(chalk.yellow.bold("\nLets see how well do you know about FRIENDS"));
    log(chalk.green.bold(
        `\nSo here are the rules of the game:\n1. There are 3 levels in all and each level has 5 questions.\n2. You have to answer atleast 3/5 questions correctly to go to next level.\nALL THE BEST! Lets begin\n------------------------------`));
    readlineSync.keyInPause(chalk.gray('\nPress any key to start the game...'));
    game();
}

log(chalk.bold("\nWould you like to play the game or view the leaderboard"));
const playOrView = readlineSync.question(chalk.bold("\nType G for game and L for leaderboard: "), {
    limit: ['g', 'l'],
    caseSensitive: false
});

if (playOrView.toLowerCase() === "g") {
    app();
    viewLeaderBoard();

    for (let i = 0; i < leaderBoard.length; i++) {
        const item = leaderBoard[i];
        if (score > item.score) {
            log(chalk.green.bold(`\nCongratulations You have beaten ${item.name}'s score`))
            log(chalk.cyan.bold("Please contact admin to update the leaderboard"));
            break;
        }
    }
} else {
    viewLeaderBoard();
}
