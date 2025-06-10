import { runGame } from '../index';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let question;
  let answer;

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    default:
      question = '';
      answer = '';
  }

  return { question, answer };
};

export const startCalcGame = () => {
  runGame('What is the result of the expression?', getQuestionAndAnswer);
};