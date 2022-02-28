export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px green",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alineItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "red"
  };
  const buttonStyle = {
    backgroundColor: "skyblue",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}> InlineStyle </p>
      <button style={buttonStyle}>Fight!!</button>
    </div>
  );
};
