import React, { useState } from 'react';
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';
import './App.css'

function App() {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const deleteExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  return (
    <div className="App">
      <h1 className = "title">Fitness Tracker</h1>
      <ExerciseForm addExercise={addExercise} />
      <ExerciseList exercises={exercises} deleteExercise={deleteExercise} />
    </div>
  );
}

export default App;