/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import NumericInput from 'react-numeric-input';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { getSpaces } from '../../api/index';
import styles from './BookingForm.css'

class BookingForm extends PureComponent {
  fields = [
    'capacity',
    'category',
    'currency',
    'description',
    'duration',
    'end_date',
    'id',
    'images',
    'prices',
    'short_description',
    'slug',
    'start_date',
    'status',
    'thumbnail',
    'times',
    'title',
  ]

  constructor(props) {
    super(props);
    const { product } = this.props;

    this.getDisabledDays = this.getDisabledDays.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleTimesClick = this.handleTimesClick.bind(this);

    this.state = {
      selectedDay: undefined,
      product,
      productsTotal: 0,
      selectedPerson: [],
      selectedTime: {},
    };
  }

  componentWillReceiveProps() {
    
  }

  componentDidMount() {
    this.setState(...this.props);
  }

  // eslint-disable-next-line class-methods-use-this
  getBookNow() {
    return (
      <div className="book-now-div">
        <input
          type="submit"
          value="Book now!"
        />
      </div>
    );
  }

  getDayPicker() {
    const {
      selectedDay,
    } = this.state;

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

  getDisabledDays(day) {
    const { product } = this.props;
    const localeDate = day.toLocaleDateString();
    const localeToday = (new Date()).toLocaleDateString();

    const isDisabled = product.times.some((time) => {
      const localeStartDate = (new Date(time.start_date)).toLocaleDateString();
      const localeEndDate = (new Date(time.end_date)).toLocaleDateString();

      return (
        localeDate < localeStartDate
        || localeDate > localeEndDate
        || localeDate < localeToday
        || localeDate > localeEndDate
      );
    });

    return isDisabled;
  }

  getForm() {
    const formElement = (
      <form onSubmit={this.handleFormSubmit}>
        <div className="row">
          <div className="col-12 booking-form-block">
            {this.getPrices()}
          </div>

          <div className="col-12 booking-form-block">
            {this.getDayPicker()}
          </div>

          <div className="col-12 booking-form-block">
            {this.getTimesPicker()}
          </div>

          <div className="col-12 booking-form-block">
            {this.getBookNow()}
          </div>
        </div>
      </form>
    );

    return formElement;
  }

  getPrices() {
    const { product } = this.description;
    const { prices } = product;

    console.log(prices[0]);

    const priceElements = prices.map(
      (price) => {
        return (
          <div key={`price-element_${price.id}`}>
            <label htmlFor={`price_${price.id}`}>
              {price.name}
            </label>

            <NumericInput
              className="form-control"
              data-price-element={JSON.stringify(price)}
              min={0}
              mobile
              name={`price_${price.id}`}
              max={100}
              onChange={this.handlePersonChange}
              value={0}
            />

            {price.description}
          </div>
        )
      }
    );

    return (
      <div className="price-picker-div">
        {priceElements}
      </div>
    );
  }

  getTimesPicker() {
    const { product } = this.props;
    const { times } = product;

    const timeStyle = {
      margin: '0px',
    };

    const timeInputStyle = {
      width: '100%',
    }

    const timesElements = times.map(
      (time) => {
        return (
          <div key={`time-element_${time.id}`} style={timeStyle}>
            <input
              type="button"
              value={time.name}
              onClick={this.handleTimesClick}
              className={styles.timesButton}
              data-time-element={JSON.stringify(time)}
              style={timeInputStyle}
            />
          </div>
        )
      }
    );

    console.log(product.times, 'times');

    return (
      <div className="time-picker-div">
        {timesElements}
      </div>
    );
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) return;

    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }

    const { product } = this.props;

    console.warn('space', getSpaces(day.toLocaleDateString(), product.id));

    this.setState({ selectedDay: day });
  }

  handleFormSubmit(event, history) {
    event.preventDefault();
    const { onSubmit } = this.props;

    const {
      product,
      selectedDay,
      selectedPerson,
      selectedTime,
      productsTotal,
    } = this.state;

    console.log('submit', history);

    let newProductsTotal = productsTotal;
    selectedPerson.forEach(
      (person, id) => {
        console.log(product.prices)
      }
    );

    this.setState({
      newProductsTotal
    })

    onSubmit(this.state);
  }

  handlePersonChange(valueAsNumber, valueAsString, input) {
    const { selectedPerson } = this.state;
    const priceObject = JSON.parse(input.dataset.priceElement);

    let currIndex = 0;
    const currentPrice = selectedPerson.find(
      (price, index) => {
        console.log('curpfe', priceObject.id, price)
        if (priceObject.id === price.price.id) currIndex = index;

        return priceObject.id === price.price.id;
      }
    );

    console.log('currp', currentPrice);

    if (!currentPrice) {
      selectedPerson.push({
        price: priceObject,
        count: valueAsNumber,
      });
    } else {
      selectedPerson[currIndex] = {
        price: priceObject,
        count: valueAsNumber,
      };

      console.log('exists', selectedPerson);
    }

    console.log(currentPrice);

    this.setState({
      selectedPerson,
    });
  }

  handleTimesClick(event) {
    event.preventDefault();
    const timeElement = JSON.parse(event.target.dataset.timeElement);

    console.log(timeElement);

    this.setState({
      selectedTime: timeElement,
    });
  }

  render() {
    console.log('formrender', this.props);

    return (
      <div className="booking-form">
        {this.getForm()}
      </div>
    );
  }
}

export default withRouter(BookingForm);
