import readlineSync from 'readline-sync';

const runBrainEvenGame = () => {
  console.log('Welcome to the Brain Even game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runBrainEvenGame;