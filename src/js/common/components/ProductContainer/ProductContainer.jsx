import React from 'react'


const ProductContainer = (props) => {
  const { content } = props;
  const { sideBar } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 aside" style={{ float: 'left' }}>
          { sideBar }
        </div>
        <div className="col-lg-8">
          { content }
        </div>
      </div>
    </div>
  )
}

export default ProductContainer;
