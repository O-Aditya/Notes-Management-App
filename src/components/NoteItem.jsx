import './NoteItem.css';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <div className="note-content">
        <h3 className="note-title">{note.title}</h3>
        {/* Only render description if it exists */}
        {note.description && <p className="note-description">{note.description}</p>}
      </div>
      
      <button 
        className="delete-btn" 
        onClick={() => onDelete(note.id)} // Pass the ID back up
        aria-label="Delete note"
      >
        &times; {/* This is a fancy HTML entity for 'X' */}
      </button>
    </div>
  );
};

export default NoteItem;