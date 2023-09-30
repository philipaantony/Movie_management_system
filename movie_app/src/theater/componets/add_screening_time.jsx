import * as React from "react";
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import GoBackButton from "../../public/gobackButton";
import axios from "axios";
import { baseUrl } from "../../config/config";

function AddScreeningTime(props) {
  const [showtimes, setShowtimes] = useState([]);
  const [refresh,setRefresh] = useState(false); 
  const [id, setId] = useState(props.screenid); // Initialize id with the screenid prop

  useEffect(() => {
    axios.get(`${baseUrl}/api/getshowtime/${id}`)
      .then((response) => {
        if (response.data) {
          setShowtimes(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [refresh]);

  const initialTime = dayjs().hour(12).minute(0); // Initialize with 12:00 PM
  const [selectedTime, setSelectedTime] = React.useState(initialTime);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const formattedTime = selectedTime.format("h:mm A");

  const handleTimeAccept = () => {
    const trid = props.trid;
    const screenid = props.screenid;
    const mytime = selectedTime.format("h:mm A");

    axios.post(`${baseUrl}/api/postshowtime`, { trid, screenid, mytime })
      .then((response) => {
        if (response.data.message) {
          setRefresh(true);
          setRefresh(false);
          alert(response.data.message);

        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error");
      });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
  {showtimes.map((showtime) => (
    <div key={showtime._id} style={{ 
      border: '1px solid ', 
      margin: '20px', padding: '10px', 
      borderRadius: '10px' ,
      color: 'white',
      backgroundColor :'#146C94',
      
      }}>
      {showtime.time}
    </div>
  ))}
</div>


      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["StaticTimePicker"]}>
          <DemoItem label="Pick Your Time Slot">
            <StaticTimePicker
              value={selectedTime}
              onChange={handleTimeChange}
              onAccept={handleTimeAccept}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      {selectedTime && <p>Selected Time: {formattedTime}</p>}
    </>
  );
}

export default AddScreeningTime;
