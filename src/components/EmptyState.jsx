import './EmptyState.css';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-icon">📝</div>
      <h3>No notes yet</h3>
      <p>No notes available. Add your first note.</p>
    </div>
  );
};

export default EmptyState;