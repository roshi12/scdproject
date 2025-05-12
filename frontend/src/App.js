import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import StudentForm from './components/StudentForm';
import HomePage from './pages/HomePage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudentPage />} />
          <Route path="/edit-student/:id" element={<EditStudentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;