export function Button({ type, onClick, value, className, children }) {
  return (
    <button type={type} onClick={onClick} value={value} className={className}>
      {children}
    </button>
  );
}
