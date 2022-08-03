import { makeAutoObservable } from "mobx";
import IQuizConfig from "../models/QuizConfig";

const QuizStore = () => makeAutoObservable({
    level: {},
    setDifficulty(_difficulty: IQuizConfig) {
        this.level = _difficulty;
    },
    get difficulty() {
        return this.level;
    }
});


export default QuizStore;