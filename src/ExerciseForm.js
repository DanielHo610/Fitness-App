import React, { useState } from 'react';

function ExerciseForm({ addExercise }) {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && weight && reps) {
      const exercise = {
        name,
        reps,
        weight
      };
      addExercise(exercise);
      setName('');
      setWeight('');
      setReps('')
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
      <input
        type = "text"
        placeholder = "Exercise name"
        value = {name}
        onChange = {e => setName(e.target.value)}
      />
      <input
        type = "number"
        placeholder = "Reps"
        value = {reps}
        onChange = {e => setReps(e.target.value)}
      />
      <input
        type = "number"
        placeholder = "Weight (lbs)"
        value = {weight}
        onChange = {e => setWeight(e.target.value)}
      />
      
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default ExerciseForm;
