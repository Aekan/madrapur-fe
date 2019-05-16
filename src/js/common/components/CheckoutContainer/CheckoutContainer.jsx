/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import styles from './CheckoutContainer.css';
import { addReservation } from '../../api/index';

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

    items = items.length ? items : [
      {
        selectedDay: '2019-05-09T10:00:00.000Z',
        product: {
          capacity: '100',
          category: 'Sightseeing Tour Budapest',
          currency: 'EUR',
          description: '',
          duration: '75',
          end_date: '2019-12-31',
          id: 4,
          images: '',
          prices: [
            {
              description: 'Include: 4 course dinner + 1 drink',
              discount: '',
              id: 6,
              name: 'Child ticket 5-10 years old ( ',
              price: 49,
              product_id: '1',
            },
          ],
          short_description: '',
          slug: '/product/:id',
          start_date: '2019-04-01',
          status: 'active',
          thumbnail: '',
          times: [],
          title: 'Budapest Booze & Pizza Cruise',
        },
        productsTotal: 0,
        selectedPerson: [
          {
            price: {
              id: 2,
              product_id: '1',
              description: '4-course meal + glass of drink',
              discount: '0',
              price: 63,
              name: 'Dinner Ticket ( € 63 / person )',
            },
            count: 4,
          },
          {
            price: {
              id: 10,
              product_id: '1',
              description: '4-course meal + glass of drink ( under 10 years )',
              discount: '0',
              price: 57,
              name: 'Child Dinner ( € 57 / person )',
            },
            count: 2,
          },
        ],
        selectedTime: {
          id: 1,
          product_id: '1',
          name: '19:00',
          start_date: '2019-05-07',
          end_date: '2019-05-17',
        },
      },
    ];

    this.state = {
      items,
      total: 0
    }
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
          <label className="control-label" htmlFor="email">Coupon</label>
          <input id="coupon" name="coupon" type="text" placeholder="coupon" className="form-control input-md" />
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

  handleFormSubmit(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const companyname = document.getElementById('companyname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const coupon = document.getElementById('coupon').value;

    const billingData = {
      firstname, lastname, companyname, phone, email, coupon,
    };

    const data = {
      source: '',
      data: billingData,
      productId: 1,
      bookingDate: '2019-06-28',
    };

    addReservation(data);

    console.log('proceed', this.state, billingData);
  }

  render() {
    const { items } = this.state;

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
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutContainer;
