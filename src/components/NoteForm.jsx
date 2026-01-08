import { useState } from 'react';
import './NoteForm.css'; // We will create this simple CSS file next

const NoteForm = ({ onAddNote }) => {
  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // Local state for UI error handling
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation Logic 
    if (!title.trim()) {
      setError('Title is required');
      return; // Stop the function here
    }

    // Create the new note object
    const newNote = {
      id: Date.now(), // Simple unique ID generation
      title,
      description
    };

    // Pass data "up" to the parent (App.jsx)
    onAddNote(newNote);

    // Reset form fields and error state [cite: 145]
    setTitle('');
    setDescription('');
    setError('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // Requirement: Error must disappear once the input is valid 
    if (error && e.target.value.trim()) {
      setError('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter note title"
          value={title}
          onChange={handleTitleChange}
          className={error ? 'input-error' : ''}
        />
        {/* Conditional Rendering for Error Message */}
        {error && <span className="error-message">{error}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description (Optional)</label>
        <textarea
          id="description"
          placeholder="Enter note description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-btn">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;