import  React , { Component } from 'react';
import { Row , Col } from 'antd';

import h from './../../../helper';
import Product from './Product';

class Products extends Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.chunkProduct = h.array_chunk(Object.keys(this.props.products) , 3);
  }

  renderProduct(key) {
      return (
        <Col key={key} span={8}>
            <Product index={key} details={this.props.products[key] }  addToCart={this.props.addToCart} orders={this.props.orders}/>
        </Col>
      );
  }

  renderRow(key) {
    return (
      <Row key={key}>
         {this.chunkProduct[key].map(this.renderProduct)}
      </Row>
    );
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row className="row-product">
              {Object.keys(this.chunkProduct).map(this.renderRow)}
          </Row>
        </Col>
      </Row>
    );
  }

}

Products.propTypes = {
  addToCart : React.PropTypes.func.isRequired,
  products : React.PropTypes.object.isRequired,
  orders : React.PropTypes.array.isRequired
};


export default Products;
