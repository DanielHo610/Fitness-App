import React from 'react';

function ExerciseList({ exercises, deleteExercise }) {
  return (
    <ul>
      {exercises.map((exercise, index) => (
        <li key={index}>
          {exercise.name} | {exercise.reps} Reps | {exercise.weight} lbs
          <button onClick={() => deleteExercise(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExerciseList;