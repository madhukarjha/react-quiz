import * as React from 'react';
import {Routes,Route } from 'react-router-dom';
import Quiz from './quiz/quiz';
const QuizList = React.lazy(() => import('./quiz/quizlist'));
const Loading = () => <p>Loading...</p>;
const AppRoute = () => {
return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<QuizList/>} />
      <Route path='quiz' element={<Quiz/>} />
    </Routes>
  </React.Suspense>
);
}
export default AppRoute;