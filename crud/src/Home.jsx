import React from "react";
import { useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
  const buttonStyle = {
    width: "100vh",
    height: "50vh",
    backgroundColor: "black",
   
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  };
  const handleButton = () => {
        navigate('/')
    

}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <button style={buttonStyle} onClick={handleButton}>CRUD APPLICATION MERN</button>
    </div>
  );
}

export default HomePage;
