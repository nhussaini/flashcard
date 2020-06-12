import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';


function App() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS);

  useEffect(()=>{
    axios
    .get('https://opentdb.com/api.php?amount=10')
    .then(res =>{
      console.log(res.data);
      setFlashCards(res.data.results.map((questionItem, index)=>{
        const answer = questionItem.correct_answer;
        const options = [...questionItem.incorrect_answers, answer];


        return {
          id: `${index}-${Date.now()}`,
          question: questionItem.question,
          answer:answer,
          options: options.sort(()=> Math.random() - .5)
        }
      }))
    })
  },[])


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
