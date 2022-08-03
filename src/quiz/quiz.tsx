import React, { useEffect } from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
  const quizDetails = (category: string, difficulty: string) => async () => {
    const quizData = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple').then((res)=>res.json());
    return quizData;
  };

  const {data, isLoading} = useQuery(
    ["quiz"],
    quizDetails(quiz.difficulty.category, quiz.difficulty.difficulty),
    { staleTime: 600_000 }
  );

  
  const backHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        {/* Quiz - {quiz.difficulty.category} - {quiz.difficulty.difficulty} */}
        {!isLoading? data && data.results && data.results.map((data: any)=>{
          return <span>{data.question}</span>
        }): ''}
        <button onClick={backHandler}>Back</button>
      </Container>
    </>
  );
};

export default Quiz;
