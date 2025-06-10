import readlineSync from 'readline-sync';

export const runGame = (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (userAnswer !== String(answer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${name}!`);
};