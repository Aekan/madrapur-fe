/* eslint-disable react/no-danger */
import React, { PureComponent } from 'react';
import BookingForm from '../BookingForm/BookingForm';

class ProductContainer extends PureComponent {
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

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUpdate() {
    const { result } = this.props;
    console.log('willupdate', result);
  }

  onSubmit(bookedProduct) {
    const { onBookNow } = this.props;

    console.log(this.props);
    console.log('bookedproduct', bookedProduct);

    onBookNow(bookedProduct);
  }

  getCurrentProduct(result) {
    const products = result.result;

    if (products) {
      let currProduct;
      const { match } = this.props;

      products.forEach((element) => {
        if (element.slug === match.url) {
          currProduct = element;
        }
      });

      console.log(currProduct.prices, 'getCurrentProduct');

      return currProduct;
    }

    return {
      capacity: '100',
      category: 'Sightseeing Tour Budapest',
      currency: 'EUR',
      description: '',
      duration: '75',
      end_date: '2019-12-31',
      id: 4,
      images: '',
      prices: [{
        description: 'Include: 4 course dinner + 1 drink',
        discount: '',
        id: 6,
        name: 'Child ticket 5-10 years old ( ',
        price: 0,
        product_id: '1',
      }],
      short_description: '',
      slug: '/product/:id',
      start_date: '2019-04-01',
      status: 'active',
      thumbnail: '',
      times: [],
      title: 'Budapest Booze & Pizza Cruise',
    };
  }

  render() {
    const { result, items } = this.props;
    const product = this.getCurrentProduct(result);

    console.warn('prodcontrender', items)

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 aside" style={{ float: 'left' }}>
            <BookingForm product={product} onSubmit={this.onSubmit} />
          </div>
          <div className="col-lg-9">
            <h1>
              {product.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
