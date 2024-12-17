import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Quiz() {
 
    const [questions, setquestions] = useState('');
     
    

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://dummyapicsi.onrender.com/api/questions")
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        })()
    })

 
  return (
    <div className='container'>
        <h1>Quiz Questions</h1>
      <div className='questions'> 
        <h2>Q1. What is does DNA stand for? </h2>
      </div>

      <div className='options'>
        <div>
        <p>
        <input type ='radio' name = "one" />
        option 1
        </p>

        <p>
        <input type ='radio' name = "one"/>
        option 2
        </p>

        <p>
        <input type ='radio' name = "one"/>
        option 3
        </p>
        
        <p>
        <input type ='radio' name = "one"/>
        option 4
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default Quiz
