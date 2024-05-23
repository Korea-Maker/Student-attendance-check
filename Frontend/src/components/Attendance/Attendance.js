import React, { useState, useEffect } from 'react';
import { fetchAttendance, updateAttendance } from '../../services/api';
import AttendanceRecord from './AttendanceRecord';

function Attendance() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const response = await fetchAttendance();
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };
    getAttendance();
  }, []);

  const handleAttendanceChange = (studentId, status) => {
    setStudents(students.map(student =>
      student.id === studentId ? { ...student, status } : student
    ));
  };

  const handleSaveAttendance = async () => {
    try {
      await updateAttendance(students);
      alert('Attendance saved successfully.');
    } catch (error) {
      console.error('Error saving attendance:', error);
      alert('Failed to save attendance.');
    }
  };

  return (
    <div>
      <h1>Attendance</h1>
      <ul>
        {students.map(student => (
          <AttendanceRecord
            key={student.id}
            student={student}
            onStatusChange={handleAttendanceChange}
          />
        ))}
      </ul>
      <button onClick={handleSaveAttendance}>Save Attendance</button>
    </div>
  );
}

export default Attendance;
