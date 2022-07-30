import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStore } from "../stores";

const Quiz: React.FC = () => {
  const Container = Styled.div`
    display: flex;
    padding: 10px;
    & > * {
        padding: 5px;
        margin: 10px;
    }
    `;
  const navigate = useNavigate();
  const { quiz } = useStore();
  const backHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        Quiz - {quiz.difficulty.category} - {quiz.difficulty.difficulty}
        <button onClick={backHandler}>Back</button>
      </Container>
    </>
  );
};

export default Quiz;
