import React, { useState } from 'react';
import DateSelector from './components/DateSelector';
import PhotoUploader from './components/PhotoUploader';
import AttendanceList from './components/AttendanceList';
import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [presentStudents, setPresentStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);

  const handleDateChange = date => {
    setSelectedDate(date);
    // Fetch data for the selected date (present and absent students) from the backend API
    // Update presentStudents and absentStudents state accordingly
  };

  return (
      <div className="App">
        <h1>Attendance Taking App</h1>
        <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
        <PhotoUploader selectedDate={selectedDate} />
        <AttendanceList presentStudents={presentStudents} absentStudents={absentStudents} />
      </div>
  );
};

export default App;
