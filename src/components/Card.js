import Link from "next/link"


export const Card = (props) => {
    
      return (
        <div className="product-card" style={{
            border: props.noBorder ? "none" : "2px solid black",
            background: props.color === "white" ? "white" : props.color === "green" ? "#83d1c4" : "#78517c",
            padding: 54,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}>
           
            <div className="content">
                <div className="info">
                    <h4>
                        Product
                    </h4>
                    <p>Price: kr</p>
                </div>
                    <div className="actions">
                        <Link href=''>Buy this</Link>
                    </div>
            </div>
        </div>
      )
    }