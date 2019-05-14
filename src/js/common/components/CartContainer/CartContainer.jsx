/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import styles from './CartContainer.css';

class CartContainer extends PureComponent {
  constructor(props) {
    super(props);
    let { items } = this.props;

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

  getAddedProducts() {
    console.log('getAdded', this.state);
    const { items } = this.state;
    let total = 0;

    const elements = items.map(
      (item) => {
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

  render() {
    const { items } = this.state;

    console.warn('cart', items);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 checkout-form">
            <form>
              <h1>Cart</h1>

              <div className={styles.section}>
                {this.getAddedProducts()}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
