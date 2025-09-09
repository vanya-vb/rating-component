export default function Button({ children, className, disabled, onClick }) {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}