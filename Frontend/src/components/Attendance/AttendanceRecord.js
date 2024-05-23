import React from 'react';

function AttendanceRecord({ student, onStatusChange }) {
  const handleStatusChange = (e) => {
    onStatusChange(student.id, e.target.value);
  };

  return (
    <li>
      <span>{student.name}</span>
      <select value={student.status} onChange={handleStatusChange}>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
    </li>
  );
}

export default AttendanceRecord;
