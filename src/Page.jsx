import React from "react";

const Page = (props) => {
  return (
    
     <div className="main-page">
         <div className="page">
        <div className="head">
          <h1>{props.name}</h1>

          <img src={props.image} alt="image" />
        </div>
       <div className="process">
       <p>{props.process}</p>
       <button onClick={props.fun}>back</button>
       </div>
      </div>
     </div>
    
  );
};

export default Page;
