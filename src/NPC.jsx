import React, { useState } from "react";
import characterQuiz from "./CharcterQuiz";
import "./Home.css";


export default function NPC(){
    // // Stores the selected options for all questions
     const [selectedOptions, setSelectedOptions]= useState([]);
     // Tracks the current question index
     const [questionIndex, setQuestionIndex]= useState(0);
     // Holds the final result after the quiz is completed
     const [result,setResults]= useState(null);


      // Retrieves the current question based on the index

    
     const currentQuestion =
     questionIndex < characterQuiz.length
      ? characterQuiz[questionIndex]
      : null;
      
      const handleOptions = (option) => {
        // Keeping track of selected options and storing them in an array
        setSelectedOptions((prevOption) => [...prevOption, option]);
    
        // Log the current question for debugging
        console.log("Current Question Index:", questionIndex);
        console.log("Current Question:", characterQuiz[questionIndex]);
    
        // If it's the last question, we set the result
        if (questionIndex === characterQuiz.length - 1) {
            setResults(option); // Set the result for the last selected option
            console.log("Final Question:", characterQuiz[questionIndex]);
        } else {
            // Move to the next question by incrementing the index
            setQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };
    
// restart the quiz
 const restartTheQuiz= ()=>{
    // Resets the question index to the start
    setQuestionIndex(0);
    // Resets the options
    setSelectedOptions([]);
    // Resets the result state
    setResults(null);  
 }


    return (
        <>
            {result ? (
                <div className="results">
                  {/* Displays the result if the quiz is completed */}
                  <div className="white">
                   <img src={result.images} 
                  alt={result.character} />
                  <figcaption>{result.character}</figcaption>
                  </div>
                  <div className="des">
                  <p>{result.description}</p>
                  <button onClick={restartTheQuiz}>Restart Quiz</button>
                  </div>
                </div>
              ) : currentQuestion ? (
                <div className="questionsOption">
                  {/* Displays the current question if the quiz is ongoing */}
                  <div className="lone">
                  <h2 style={{color:"white"}}>Which Character Are You?
                    </h2></div>
                  
                  <div className="currentquestions">
                    <h3 >{currentQuestion.question}</h3>
                  {console.log(currentQuestion)}
                  <div className="choices">
                    {currentQuestion.options.map((option, index) => (
                      <button key={index} onClick={() => handleOptions(option)}>
                          { option.text}
                      </button>
                    ))}
                  </div>
                  </div>
                </div>
                ) : (
                    <p>Error: No question available.</p>
              )}
        </>
    )
}