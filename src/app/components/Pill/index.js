import "./index.css";

function Pill({ children, color, id }) {
  const asignedColor = ["green", "yellow", "red"].includes(color)
    ? color
    : "grey";

  return (
    <div id={id} className={`skill-description-box bg-${asignedColor}`}>
      <span>{children}</span>
    </div>
  );
}

export default Pill;

// function Pill() {
//     return (
//         <p>herewillbeapill</p>
//     );
// }
// export default Pill;