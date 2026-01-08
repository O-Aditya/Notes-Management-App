import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import EmptyState from './components/EmptyState';
import Loader from './components/Loader';
import './App.css';

function App() {
  // 1. STATE MANAGEMENT
  // 'notes' state to store the list of note objects
  const [notes, setNotes] = useState([]);
  
  // 'loading' state for the initial 2-second simulation
  const [isLoading, setIsLoading] = useState(true);

  // 2. EFFECT HOOK (Simulate API Call)
  useEffect(() => {
    // Simulate a fetch delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function to avoid memory leaks if component unmounts
    return () => clearTimeout(timer);
  }, []);

  // 3. HANDLERS
  // Add a new note to the beginning of the list
  const addNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  // Remove a note by its ID
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes App</h1>
        <p className="subtitle">Manage your daily tasks efficiently</p>
      </header>

      {/* The Container Component (Logical Wrapper) */}
      <div className="content-wrapper">
        
        {/* The Form is always visible so users can start typing immediately */}
        <NoteForm onAddNote={addNote} />

        {/* 4. CONDITIONAL RENDERING (The UX Logic) */}
        <div className="list-section">
        {!isLoading && <h2 className="section-title">My Notes</h2>}
          {isLoading ? (
            // State 1: Loading
            <Loader />
          ) : notes.length === 0 ? (
            // State 2: Empty
            <EmptyState />
          ) : (
            // State 3: Data Available
            <NoteList notes={notes} onDeleteNote={deleteNote} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;