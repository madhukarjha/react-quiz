import { makeAutoObservable } from "mobx";
import QuizConfig from "../models/QuizConfig";

const QuizStore = () => makeAutoObservable({
    level: {},
    setDifficulty(_difficulty: {}) {
        this.level = _difficulty;
    },
    get difficulty() {
        return this.level;
    }
});


export default QuizStore;