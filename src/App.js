import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';


function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={flashcards}/>
  );
}


const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question : 'what is 2+2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question : 'Question 2?',
    answer: 'answer',
    options: [
      'answer 1',
      'answer 2',
      'answer 3',
      'answer 4'
    ]
  }

]

export default App;
