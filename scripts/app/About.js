import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from './section/Header';
import Welcome from './section/Welcome';

export default class About extends Component {

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="morepage:about" />
              <Welcome title="Welcome To About page" />
          </Col>
        </Row>
      );
  }
  
}
