import * as M from "../../styles/HomeStyle/WordStyle";
import React from 'react';

// StarInARow 함수 정의
const StarInARow = ({ count }) => {
  const stars = [...Array(count)].map((_, index) => <M.starImg key={index} />);
  return <>{stars}</>;
};

const WordComponents = ({ txt, score }) => {
  return (
    <M.wordContainer>
      <M.text>{txt}</M.text>
      <M.starsContainer>
        <StarInARow count={score} />
      </M.starsContainer>
    </M.wordContainer>
  );
};

export default WordComponents;