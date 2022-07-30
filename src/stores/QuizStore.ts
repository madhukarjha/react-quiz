import { makeAutoObservable } from "mobx";

const QuizStore = () => makeAutoObservable({
    level: '',
    setDifficulty(_difficulty: string) {
        this.level = _difficulty;
    },
    get difficulty() {
        return this.level;
    }
});


export default QuizStore;