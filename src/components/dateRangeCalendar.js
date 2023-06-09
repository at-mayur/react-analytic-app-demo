import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range';

import styles from "../styles/dateRangeCalendar.module.css";
import { useState } from 'react';

function DateRangeCalendar() {

  const date = new Date();
  date.setDate(date.getDate()-7)

  const [dateRange, setDateRange] = useState([
    {
      startDate: date,
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleChange = (item) => {
    setDateRange([item.selection]);
  };

  return (
    <div className={styles.dateRangeContainer}>

      <DateRange
      editableDateInputs={true}
      onChange={handleChange}
      moveRangeOnFirstSelection={false}
      ranges={dateRange}
      rangeColors={['rgb(114 23 249)']}
      
      />
      
    </div>
  );
}

export default DateRangeCalendar;
