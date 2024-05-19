import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/schedule', { headers: { Authorization: `Bearer ${token}` } });
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Schedule</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}: {event.start_time} - {event.end_time}</li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
