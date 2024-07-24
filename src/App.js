import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/Todolist';
import ThemeStore from './Components/ThemeStore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/theme-store' element={<ThemeStore />} />
      </Routes>
    </Router>
  );
}

export default App;
