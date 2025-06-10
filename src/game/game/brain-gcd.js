import { runGame } from '../index';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);

  return { question, answer };
};

export const startGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  runGame('Question: ', getQuestionAndAnswer);
};