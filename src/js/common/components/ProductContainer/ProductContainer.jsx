import React from 'react';

const ProductContainer = (props) => {
  const { content } = props;
  const { sideBar } = props;
  const { id } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 aside" style={{ float: 'left' }}>
          { sideBar } { id }
        </div>
        <div className="col-lg-8">
          { content.description }
        </div>
      </div>
    </div>
  )
}

export default ProductContainer;
