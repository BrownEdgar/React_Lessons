import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import QuizCreator from './QuizCreator/QuizCreator';
import QuizList from './QuizList/QuizList';
import Header from './Header/Header';
import './App.css';
import Home from './Home/Home';
import TestList from './TestList/TestList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quizCreator' element={<QuizCreator />} />
            <Route path='/quizlist' element={<QuizList />} />
            <Route path='/quizlist/:id' element={<TestList />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
