import React, { useState } from 'react';

const Home = () => {
    const [rojo, setRojo] = useState("secondary");
    const [amarillo, setAmarillo] = useState("secondary");
    const [verde, setVerde] = useState("secondary");

  function handleRojo() {
    setRojo("danger");
    setAmarillo("secondary");
    setVerde("secondary");
  }

  function handleAmarillo() {
     setRojo("secondary");
     setAmarillo("warning");
     setVerde("secondary");
  }

  function handleVerde() {
    setRojo("secondary");
    setAmarillo("secondary");
    setVerde("success");
  }
  

  return (
    <>
   <div className="container text-center p-5" style={{
              textShadow: "0px 0px 15px blue",
            }}> 
      <div className="row justify-content-center">
        <div className="col-2 bg-dark rounded-top">
          <button
            className={"btn btn-" + rojo + " p-5 rounded-circle m-3"} style={{
              boxShadow: rojo === "danger" ? "0px 0px 80px 1px red" : "",
            }}
            onClick={handleRojo}
          ></button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 bg-dark">
          <button
            className={"btn btn-" + amarillo + " p-5 rounded-circle m-3"} style={{
              boxShadow: amarillo === "warning" ? "0px 0px 80px 1px yellow" : ""
            }}
            onClick={handleAmarillo}
          ></button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 bg-dark rounded-bottom">
          <button
            className={"btn btn-" + verde + " p-5 rounded-circle m-3"} style={{
              boxShadow: verde === "success" ? "0px 0px 80px 1px green" : ""
            }}
            onClick={handleVerde}
          ></button>
        </div>
      </div>
      <div className="container text-center bg-dark" style={{ height: '290px', width: '15px' }}></div>
    </div>
    </>
  );
};

export default Home;
