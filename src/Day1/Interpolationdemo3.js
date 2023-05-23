function Interpolationdemo1() {
  let text = `React Js`;

  let mystyle = {
    background: "red",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "10px",
  };

  return (
    <div style={mystyle}>
      <h1>{text}</h1>
    </div>
  );
}

export default Interpolationdemo1;
