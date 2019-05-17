/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import styles from './CheckoutContainer.css';
import { addReservation } from '../../api/index';
import { actionPay } from '../../api/module/rester/v1/product';

class CheckoutContainer extends PureComponent {
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
    let { items } = this.props;

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    items = items.length ? items : __CONFIG__.ITEMS;

    this.options = countryList().getData();

    this.state = {
      items,
      total: 0,
      options: this.options,
      country: null,
      hidden: '',
    };
  }

  componentWillUpdate() {
    const { items } = this.props;
    console.log('checkout_willupdate', this.props);
  }

  getBillingForm() {
    console.log(this.state);

    return (
      <div className="row">
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="firstname">First name</label>
          <input id="firstname" name="firstname" type="text" placeholder="firstname" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="lastname">Last name</label>
          <input id="lastname" name="lastname" type="text" placeholder="lastname" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="companyname">Company name | In case of invoice enquiry, please fill in the box below</label>
          <input id="companyname" name="companyname" type="text" placeholder="companyname" className="form-control input-md" />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="text" placeholder="phone" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="email">Email address</label>
          <input id="email" name="email" type="text" placeholder="email" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <Select
            className="form-control input-md"
            options={this.state.options}
            value={this.state.value}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="postcode">Postcode</label>
          <input id="postcode" name="postcode" type="text" placeholder="postcode" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="city">City</label>
          <input id="city" name="city" type="text" placeholder="city" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="address1">Address #1</label>
          <input id="address1" name="address1" type="text" placeholder="address1" className="form-control input-md" required />
        </div>
        <div className="form-group col-sm-6">
          <label className="control-label" htmlFor="address2">Address #2 (optional)</label>
          <input id="address2" name="address2" type="text" placeholder="address2" className="form-control input-md" />
        </div>
      </div>
    );
  }

  getAddedProducts() {
    console.log('getAdded', this.state);
    const { items } = this.state;
    let total = 0;

    const elements = items.map(
      (item) => {
        if (!item) return;

        const {
          product,
          selectedDay,
          selectedPerson,
          selectedTime,
        } = item;

        const selectedDayString = (new Date(selectedDay)).toLocaleDateString();
        let currentTotal = 0;

        const personElements = selectedPerson.map(
          (person) => {
            const {
              count,
              price,
            } = person;
            console.log('person', person);

            currentTotal += price.price * count;

            console.log('currentTotal', currentTotal);

            return (
              <div className="product-person-name" key={price.name}>
                {`${price.name} x ${count}`}
              </div>
            );
          }
        );

        total += currentTotal;

        // eslint-disable-next-line consistent-return
        return (
          <div className={`row ${styles.productCheckoutContainer}`} key={`chekout_${product.id}`}>
            <div className="col-sm-6">
              <div className={styles.productName}>{product.title}</div>

              <div className={styles.bookingDate}>
                <b>Booking date: </b>
                {selectedDayString}
              </div>

              <div className={styles.bookingTime}>
                <b>Booking time: </b>
                {selectedTime.name}
              </div>

              {personElements}
            </div>
            <div className="col-sm-6">
              <div className={styles.totalPrice}>
                {`${currentTotal} ${product.currency}`}
              </div>
            </div>
          </div>
        );
      }
    );

    console.log('total', total);

    return (
      <div className="">
        <div className={`row ${styles.productCheckoutContainer}`}>
          <div className="col-sm-6">
            <h4>Products</h4>
          </div>
          <div className="col-sm-6">
            <h4>Subtotal</h4>
          </div>
        </div>

        {elements}

        <div className={`row ${styles.productCheckoutContainer}`}>
          <div className="col-sm-12">
            <h4>{`Total: ${total} EUR`}</h4>
          </div>
        </div>
      </div>
    );
  }

  getPaymentMethod() {
    console.log(this.state);

    return (
      <div className="row">
        <div className="form-group col-sm-12">
          <label className="control-label" htmlFor="paymentmethod_otp">
            <input id="paymentmethod_otp" name="paymentmethod" type="radio" className="form-control" required defaultChecked />
            SIMPLEPAY CREDIT CARD PAYMENT
          </label>
        </div>
        <div className="form-group col-sm-12">
          <label className="control-label" htmlFor="terms">
            <input id="terms" name="terms" type="checkbox" className="form-control" required />
            I have read and agree to the website terms and conditions
          </label>
        </div>
        <div className="form-group col-sm-12">
          <input id="placeorder" name="placeorder" type="submit" value="Place order" className="form-control input-md" />
        </div>
      </div>
    );
  }

  changeHandler = (country) => {
    this.setState({ country });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const {
      country,
      items,
    } = this.state;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const companyname = document.getElementById('companyname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const postcode = document.getElementById('postcode').value;
    const city = document.getElementById('city').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;

    const billingData = items.map(
      (item) => {
        console.warn('item', item);
        const {
          product,
          selectedDay,
          selectedPerson,
          selectedTime,
        } = item;

        let currentTotal = 0;
        let currentCount = 0;
        const personInfo = {};

        const totalPrice = selectedPerson.map(
          (person, index) => {
            const {
              count,
              price,
            } = person;
            console.log('person', person);

            currentTotal += price.price * count;
            currentCount += count;

            personInfo[index] = {
              name: price.name,
              personID: price.id,
              purchaseNumber: count,
              oneCost: price.price.toString(),
            };

            console.log('currentTotal', currentTotal);

            return price.price * count;
          }
        );

        const selectedDayString = selectedDay.toLocaleDateString();
        const selectedTimetring = selectedTime.name;
        const bookingDate = new Date(`${selectedDayString} ${selectedTimetring}`).toLocaleString();

        return {
          bookingDetails: {
            booking_name: product.title,
            booking_cost: currentTotal,
            booking_product_id: product.id,
            booking_start: bookingDate,
            booking_end: bookingDate,
          },
          orderDetails: {
            allPersons: currentCount,
            windowed: false,
            customer_ip_adress: '',
            paid_date: '',
            billing_first_name: firstname,
            billing_last_name: lastname,
            billing_email: email,
            billing_phone: phone,
            billing_company_name: companyname,
            billing_country: country,
            billing_postcode: postcode,
            billing_city: city,
            billing_address1: address1,
            billing_address2: address2,
            order_currency: product.currency,
            order_total: totalPrice,
          },
          personInfo,
        };
      }
    );

    const data = {
      source: __CONFIG__.SOURCENAME,
      data: JSON.stringify(billingData),
      productId: 1,
      bookingDate: '2019-06-28',
    };

    const cb = (responseData) => {
      this.setState({ hidden: responseData });

      console.log('hiddenResponseData', responseData);

      document.getElementById('otpdiv').innerHTML = responseData;

      document.getElementById('SimpleForm').submit();
    };

    const hidden = addReservation(JSON.stringify(data), cb);

    console.log('proceed', this.state, data);
  }

  render() {
    const { items, hidden } = this.state;

    console.warn('checkout', items);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 checkout-form">
            <form onSubmit={this.handleFormSubmit}>
              <h1>Checkout</h1>

              <div className={styles.section}>
                {this.getBillingForm()}
              </div>

              <div className={styles.section}>
                {this.getAddedProducts()}
              </div>

              <div className={styles.section}>
                {this.getPaymentMethod()}
              </div>

              <div className={styles.section}>
                <pre>{JSON.stringify(items, null, 2) }</pre>
              </div>
            </form>

            <div dangerouslySetInnerHTML={{ __html: hidden }} />

            <div id="otpdiv"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutContainer;
