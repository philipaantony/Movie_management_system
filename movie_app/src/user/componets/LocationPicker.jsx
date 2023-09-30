import React, { useState } from "react";
import keralaCities from "../../const/cities";




function LocationPicker() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div className="form-group">
      
  <div className="input-group">
       
  <i style={{ fontSize: '30px', paddingRight:"34px", margin:"3px"}} className="bi bi-geo-alt"></i>
    <input
      type="text"
      list="cities"
      className="form-control"
      placeholder="Pick your location"
      onChange={handleInputChange}
      value={inputValue}
    />
  </div>
  <datalist id="cities" >
    {keralaCities
      .filter((city) =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 5) // Display only the top 5 results
      .map((city, index) => (
        <option key={index} value={city}  />
      ))}
  </datalist>
</div>

  );
}

export default LocationPicker;
