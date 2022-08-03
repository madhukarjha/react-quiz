import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { useStore } from "../stores";
import IQuizConfig from "../models/QuizConfig";

const QuizList: React.FC = () => {
  const Container = Styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    & > div{
      flex: 50%;
    }
    & > div> * {
        padding: 5px;
        margin: 10px;
        flex: 50%;
    }
    `;
  const [selectedOption, setSelectedOption] = useState<IQuizConfig>({category: 'any', difficulty: 'any' });
  const navigate = useNavigate();
  const { quiz } = useStore();
  const openQuizHandler = () => {
    quiz.setDifficulty(selectedOption);
    navigate("/quiz");
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption({...selectedOption, [event.target.name]: event.target.value});
  };
  return (
    <Container>
      <div>
        <label>Difficulty:</label><br />
        <select name="difficulty" id="difficulty" onChange={handleChange}>
          <option value="any">Any difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div>
        <label>Category:</label><br />
        <select name="category" onChange={handleChange}>
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">
            Entertainment: Cartoon &amp; Animations
          </option>{" "}
        </select>
      </div>

      <div>
        <button onClick={openQuizHandler}>Open quiz</button>
      </div>
    </Container>
  );
};

export default QuizList;
