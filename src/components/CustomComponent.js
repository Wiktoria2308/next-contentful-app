export const CustomComponent = (props) => {
    return <div style={{
      border: props.noBorder ? "none" : "2px solid black",
      background: props.color === "white" ? "white" : props.color === "green" ? "#83d1c4" : "#78517c",
      padding: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      My custom component
    </div>
  }