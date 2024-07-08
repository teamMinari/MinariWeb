import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import * as M from "../../styles/QuizStyle";

import { useState } from 'react';

const questions = [
    {
      questionText: 'React is a JavaScript library for building user interfaces.',
      correctAnswer: 'O',
    },
    {
      questionText: 'CSS stands for Cascading Style Sheets.',
      correctAnswer: 'O',
    },
    {
      questionText: 'HTML is a programming language.',
      correctAnswer: 'X',
    },
    {
      questionText: 'React is a JavaScript library for building user interfaces.',
      correctAnswer: 'O',
    },
    {
      questionText: 'CSS stands for Cascading Style Sheets.',
      correctAnswer: 'O',
    },
    {
      questionText: 'HTML is a programming language.',
      correctAnswer: 'X',
    },
    {
      questionText: 'React is a JavaScript library for building user interfaces.',
      correctAnswer: 'O',
    },
    {
      questionText: 'CSS stands for Cascading Style Sheets.',
      correctAnswer: 'O',
    },
    {
      questionText: 'HTML is a programming language.',
      correctAnswer: 'X',
    },
    {
      questionText: 'React is a JavaScript library for building user interfaces.',
      correctAnswer: 'O',
    },
  ];
  
  const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0); // useState로 currentQuestion 추가
    const [score, setScore] = useState(0); // useState로 score 추가
    const [showResult, setShowResult] = useState(false); // useState로 showResult 추가
  
    const handleAnswer = (answer) => { // handleAnswer 함수 정의
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1); // 정답일 경우 점수 증가
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion); // 다음 질문으로 이동
      } else {
        setShowResult(true); // 결과 표시
      }
    };
  
    return (
      <div>
        <React.Fragment>
          <Header />
          <M.GlobalStyles />
          <M.PageContent>
            <M.FitContainer>
              <Sidebar />
            </M.FitContainer>
            <M.QuizContainer>
              {showResult ? ( // showResult가 true일 경우 결과 표시
                <>
                  <M.StyledWowImg></M.StyledWowImg>
                  <M.Result>대단해요! <br/>  총 {score} / {questions.length} 문제를 맞췄어요!
                  </M.Result>
                  <M.Button style={{ textDecoration: "none"}} to="/">돌아가기</M.Button>
                </>
              ) : ( // showResult가 false일 경우 질문 표시
                <>
                  <M.QuizNumContainer>
                    <M.QuizNum>Q{" "}{String(currentQuestion + 1).padStart(2, '0')}</M.QuizNum>
                  </M.QuizNumContainer>
                  <M.Question>{questions[currentQuestion].questionText}</M.Question>
                    <M.OXButton>
                        <M.OButton>
                            <M.QuizButton onClick={() => handleAnswer('O')}><M.StyledOImg/></M.QuizButton>
                        </M.OButton>
                        <M.XButton>
                            <M.QuizButton onClick={() => handleAnswer('X')}><M.StyledXImg/></M.QuizButton>
                        </M.XButton>
                    </M.OXButton>
                </>
              )}
              <M.CenterdContent>
              </M.CenterdContent>
            </M.QuizContainer>
          </M.PageContent>
        </React.Fragment>
      </div>
    );
  };
  
  export default Quiz;