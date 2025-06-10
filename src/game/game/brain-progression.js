import { runGame } from '../index';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const minLength = 5;
  const maxLength = 10;
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10) + 1; 

  const progression = generateProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  
  const answer = progression[hiddenIndex];
  const questionArray = progression.slice();
  questionArray[hiddenIndex] = '..';

  const question = questionArray.join(' ');

  return { question, answer: answer.toString() };
};

export const startProgressionGame = () => {
  console.log('What number is missing in the progression?');
  runGame('Question: ', getQuestionAndAnswer);
};