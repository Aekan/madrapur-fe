import React, { PureComponent } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


export default class DayTimePicker extends PureComponent {
  constructor(props) {
    super(props);
    const { times } = this.props;

    // console.log(times, 'daytime')

    this.handleDayClick = this.handleDayClick.bind(this);
    this.getDisabledDays = this.getDisabledDays.bind(this);

    this.state = {
      selectedDay: undefined,
      times,
    };
  }

  getDisabledDays(day) {
    const { times } = this.props;

    const isDisabled = times.some((time) => {
      // TODO: range is [x, y); should be [x, y]
      return (day < new Date(time.start_date) || day > new Date(time.end_date));
    });

    return isDisabled;
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) return;

    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }

    this.setState({ selectedDay: day });
  }

  render() {
    const {
      selectedDay,
    } = this.state;

    // console.log('daypickerrender', this.props)

    return (
      <div className="day-picker-div">
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={selectedDay}
          disabledDays={this.getDisabledDays}
        />

        <p>
          {selectedDay ? (selectedDay.toLocaleDateString()) : ('Please select a day.')}
        </p>
      </div>
    );
  }
}
