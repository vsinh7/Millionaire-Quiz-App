import { useEffect, useMemo, useState } from 'react';
import './app.css';
import Trivia from './components/Trivia';
import Start from "./components/Start";
import Timer from './components/Timer';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("Rs 0");
  const [isMillionaire, setIsMillionaire] = useState(false);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      "id": 4,
      "question": "What is the capital of France?",
      "answers": [
        {
          "text": "Berlin",
          "correct": false
        },
        {
          "text": "Madrid",
          "correct": false
        },
        {
          "text": "Paris",
          "correct": true
        },
        {
          "text": "Rome",
          "correct": false
        }
      ]
    },
    {
      "id": 5,
      "question": "Which planet is known as the Red Planet?",
      "answers": [
        {
          "text": "Earth",
          "correct": false
        },
        {
          "text": "Mars",
          "correct": true
        },
        {
          "text": "Jupiter",
          "correct": false
        },
        {
          "text": "Saturn",
          "correct": false
        }
      ]
    },
    {
      "id": 6,
      "question": "Who wrote 'Romeo and Juliet'?",
      "answers": [
        {
          "text": "Charles Dickens",
          "correct": false
        },
        {
          "text": "Mark Twain",
          "correct": false
        },
        {
          "text": "William Shakespeare",
          "correct": true
        },
        {
          "text": "Jane Austen",
          "correct": false
        }
      ]
    },
    {
      "id": 7,
      "question": "What is the largest ocean on Earth?",
      "answers": [
        {
          "text": "Atlantic Ocean",
          "correct": false
        },
        {
          "text": "Indian Ocean",
          "correct": false
        },
        {
          "text": "Arctic Ocean",
          "correct": false
        },
        {
          "text": "Pacific Ocean",
          "correct": true
        }
      ]
    },
    {
      "id": 8,
      "question": "What is the chemical symbol for gold?",
      "answers": [
        {
          "text": "Ag",
          "correct": false
        },
        {
          "text": "Au",
          "correct": true
        },
        {
          "text": "Pb",
          "correct": false
        },
        {
          "text": "Fe",
          "correct": false
        }
      ]
    },
    {
      "id": 9,
      "question": "Which element is known as the 'building block of life'?",
      "answers": [
        {
          "text": "Carbon",
          "correct": true
        },
        {
          "text": "Oxygen",
          "correct": false
        },
        {
          "text": "Hydrogen",
          "correct": false
        },
        {
          "text": "Nitrogen",
          "correct": false
        }
      ]
    },
    {
      "id": 10,
      "question": "What is the hardest natural substance on Earth?",
      "answers": [
        {
          "text": "Gold",
          "correct": false
        },
        {
          "text": "Diamond",
          "correct": true
        },
        {
          "text": "Iron",
          "correct": false
        },
        {
          "text": "Quartz",
          "correct": false
        }
      ]
    },
    {
      "id": 11,
      "question": "Which famous scientist developed the theory of relativity?",
      "answers": [
        {
          "text": "Isaac Newton",
          "correct": false
        },
        {
          "text": "Albert Einstein",
          "correct": true
        },
        {
          "text": "Nikola Tesla",
          "correct": false
        },
        {
          "text": "Stephen Hawking",
          "correct": false
        }
      ]
    },
    {
      "id": 12,
      "question": "In which year did the Titanic sink?",
      "answers": [
        {
          "text": "1905",
          "correct": false
        },
        {
          "text": "1912",
          "correct": true
        },
        {
          "text": "1918",
          "correct": false
        },
        {
          "text": "1920",
          "correct": false
        }
      ]
    },
    {
      "id": 13,
      "question": "What is the tallest mountain in the world?",
      "answers": [
        {
          "text": "K2",
          "correct": false
        },
        {
          "text": "Mount Everest",
          "correct": true
        },
        {
          "text": "Kangchenjunga",
          "correct": false
        },
        {
          "text": "Lhotse",
          "correct": false
        }
      ]
    },
    {
      "id": 14,
      "question": "Which artist painted the Mona Lisa?",
      "answers": [
        {
          "text": "Vincent van Gogh",
          "correct": false
        },
        {
          "text": "Pablo Picasso",
          "correct": false
        },
        {
          "text": "Leonardo da Vinci",
          "correct": true
        },
        {
          "text": "Claude Monet",
          "correct": false
        }
      ]
    },
    {
      "id": 15,
      "question": "What is the main ingredient in guacamole?",
      "answers": [
        {
          "text": "Tomato",
          "correct": false
        },
        {
          "text": "Avocado",
          "correct": true
        },
        {
          "text": "Pepper",
          "correct": false
        },
        {
          "text": "Onion",
          "correct": false
        }
      ]
    }
  ];

  const moneyPraymid = useMemo(() =>
    [
      { id: 1, amount: "Rs 100" },
      { id: 2, amount: "Rs 200" },
      { id: 3, amount: "Rs 300" },
      { id: 4, amount: "Rs 500" },
      { id: 5, amount: "Rs 1000" },
      { id: 6, amount: "Rs 2000" },
      { id: 7, amount: "Rs 4000" },
      { id: 8, amount: "Rs 8000" },
      { id: 9, amount: "Rs 16000" },
      { id: 10, amount: "Rs 32000" },
      { id: 11, amount: "Rs 64000" },
      { id: 12, amount: "Rs 125000" },
      { id: 13, amount: "Rs 250000" },
      { id: 14, amount: "Rs 500000" },
      { id: 15, amount: "Rs 1000000" },
    ].reverse(),
  []);

  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(moneyPraymid.find((m) => m.id === questionNumber - 1).amount);
    }
    if (questionNumber === 16) {
      setIsMillionaire(true);
    }
  }, [moneyPraymid, questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || isMillionaire ? (
              <h1 className="endText">
                {isMillionaire ? "Congratulations! You are now a millionaire!" : `You earned: ${earned}`}
              </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPraymid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
