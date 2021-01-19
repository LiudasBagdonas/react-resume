import Divider from "../Divider";
import "./index.css";

function ContentBox({ children, title, className = "" }) {

  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      <Divider isFancy />
      {children}
    </div>
  );
}

export default ContentBox;