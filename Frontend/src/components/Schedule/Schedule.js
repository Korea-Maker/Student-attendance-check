import React, { useState, useEffect } from 'react';
import { fetchSchedule, updateSchedule } from '../../services/api';
import Calendar from './Calendar';

function Schedule() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const response = await fetchSchedule();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };
    getSchedule();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevEvent => ({ ...prevEvent, [name]: value }));
  };

  const handleAddEvent = async () => {
    try {
      const response = await updateSchedule(newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ title: '', date: '' });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <h1>Schedule</h1>
      <div>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event Title"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.title} - {event.date}</li>
        ))}
      </ul>
      <Calendar events={events} />
    </div>
  );
}

export default Schedule;
