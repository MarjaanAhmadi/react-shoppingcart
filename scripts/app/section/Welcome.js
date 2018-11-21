import React , {Component} from 'react'
import { Row , Col } from 'antd';


export default class Welcome extends Component {

  render() {
    return (
      <Row>
        <Col>
          <h1 className="header_title">{ this.props.title }</h1>
          <p className="header_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
    );
  }


}
