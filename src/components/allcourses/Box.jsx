import React from "react";

const Box = (props) => {
  const boxStyle = {
    width: "250px", // Adjust the width as needed
    margin: "10px", // Add margin for spacing
  };
  const classStyle = {
    marginLeft:"300px"
  }
  const imgStyle = {
    width:"248px",
    height:"200px"
  }
  return (
    <>
    <a href={props.dest}>
    <div className="col-md-3 mb-4" style={classStyle}>
      <div className="card" style={boxStyle}>
        <img src={props.url} className="card-img-top" alt="..." style={imgStyle} />
        <div className="card-body">
          <p className="card-text">
            {props.name}
          </p>
        </div>
      </div>
    </div>
    </a>
    </>
  );
};

export default Box;
