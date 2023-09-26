import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <div style={{padding:"10px"}}>
 <button className="btn btn-primary" onClick={() => navigate(-1)}>
      <i class="bi bi-caret-left-fill"></i> Go back
    </button>
    </div>
   
  );
}

export default GoBackButton;
