import React , {Component} from 'react'
import { Row , Col } from 'antd';
import Cookie from 'react-cookie';

import Header from './section/Header';
import Welcome from './section/Welcome';
import ButtonCart from './section/ButtonCart';
import Products from './section/Products/Products';
import Data from './../data';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products : Data,
      orders : ( typeof(Cookie.load('orders')) == "undefined" ? [] : Cookie.load('orders') )
    }

    this.addToCart = this.addToCart.bind(this);
    this.removeOfCart = this.removeOfCart.bind(this);
  }

  addToCart(key) {
    if(this.state.products[key].available && this.state.orders.indexOf(key) == -1) {
      this.state.orders.push(key);
      Cookie.save('orders' , this.state.orders , { path : '/'});
      this.setState((prevState) => {
        orders : prevState.orders
      });
    }
  }

  removeOfCart(key) {
    let productKey = this.state.orders[key.key];
    let i = this.state.orders.indexOf(productKey);
    if( i != -1 ) {
      this.state.orders.splice(i , 1);
      Cookie.save('orders', this.state.orders , { path : '/' });
      this.setState((prevState) => {
        orders : prevState.orders
      });
    }
  }

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="home" />
              <Welcome title="Welcome To My Shop" />
              <Products products={this.state.products} addToCart={this.addToCart} orders={this.state.orders}/>
          </Col>
          <ButtonCart orders={this.state.orders} removeOfCart={this.removeOfCart} products={this.state.products} />
        </Row>
      );
  }

}
