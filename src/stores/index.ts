import {createContext, useContext} from "react";
import QuizStore from "./QuizStore";

const store = {
    quiz: QuizStore(),
};

export const StoreContext = createContext(store);

export const useStore= () => {
    return useContext(StoreContext) as typeof store;
};

export default store;
