import './index.css';

function LinkBox({ className = "", children }) {

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default LinkBox;