import NoteItem from './NoteItem';
import './NoteList.css';

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem 
          key={note.id} // Critical for React performance!
          note={note} 
          onDelete={onDeleteNote} 
        />
      ))}
    </div>
  );
};

export default NoteList;