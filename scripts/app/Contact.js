import React , {Component} from 'react'
import { Row , Col , Form , Input ,Button } from 'antd';
const FormItem = Form.Item;

import Header from './section/Header';
import Welcome from './section/Welcome';

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formBody : {
        name : '',
        email : '',
        message : ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.state.formBody[name] = value;
    this.setState((prevState) => {
      formBody : prevState.formBody
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="morepage:contact" />
              <Welcome title="Welcome To Contact Page" />
              <Row type="flex" justify="center">
                  <Col span={12}>
                      <h2>Contact Form</h2>
                      <Form onSubmit={this.handleSubmit}>
                        <FormItem label="Name">
                          <Input type="text" name="name" placeholder="Please enter your name" value={this.state.formBody.name} onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem label="E-mail">
                          <Input type="text" name="email" placeholder="Please enter your email" value={this.state.formBody.email} onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem label="Message">
                          <Input type="text" name="message" placeholder="Please enter your message" value={this.state.formBody.message} onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem >
                          <Button type="primary" htmlType="submit">Send</Button>
                        </FormItem>
                      </Form>
                  </Col>
              </Row>
          </Col>
        </Row>
      );
  }
}
