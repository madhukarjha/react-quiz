import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { useStore } from "../stores";

const QuizList: React.FC = () => {
  const Container = Styled.div`
    display: flex;
    padding: 10px;
    & > div> * {
        padding: 5px;
        margin: 10px;
    }
    `;
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const { quiz } = useStore();
  const openQuizHandler = () => {
    quiz.setDifficulty(selectedOption);
    navigate("/quiz");
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Container>
      <div>
        <label>Difficulty:</label>
        <select name="difficulty" id="difficulty" onChange={handleChange}>
          <option value="Select">Select</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div>
        <button onClick={openQuizHandler}>Open quiz</button>
      </div>
    </Container>
  );
};

export default QuizList;
