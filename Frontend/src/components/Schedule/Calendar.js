import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendar({ events }) {
  const formattedEvents = events.map(event => ({
    title: event.title,
    start: new Date(event.date),
    end: new Date(event.date),
  }));

  return (
    <div style={{ height: 500 }}>
      <BigCalendar
        localizer={localizer}
        events={formattedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
}

export default Calendar;
