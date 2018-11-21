import React , {Component} from 'react';
import {Modal, Button, Menu, Dropdown, Icon } from 'antd';

export default class ButtonCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
     }
    this.renderMenu = this.renderMenu.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
  }
  showModal (){
    this.setState({
      visible: true,
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }
  handleMenuClick(e) {
    console.log('click', e);
  }

  renderMenu(key) {
    return <Menu.Item key={key}>{ this.props.products[this.props.orders[key]].title} <Icon type="close" style={{ margin: 5 }}/></Menu.Item>
  }

  render() {
    let menu = (
      <Menu onClick={(key) => this.props.removeOfCart(key)}>
          {Object.keys(this.props.orders).map(this.renderMenu)}
      </Menu>
    );


    return (
    <div>
        <div className="cart-button">

            <Button type="primary" style={{ marginLeft : 8 }} onClick={this.showModal}>
              Your Cart <Icon type="shopping-cart" />
            </Button>
        </div>
        <Modal
            title="Your Shopping Card"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            cancelText="Cancel"
            okText="Ok"
          >
            {menu}
        </Modal>
    </div>
    );
  }


}
