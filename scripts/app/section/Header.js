import React , {Component} from 'react'
import { Row , Col , Menu, Icon } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current : this.props.SelectedMenu
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault ;
    this.setState({
      current : e.key
    });
  }

  render() {
    return (
        <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal">
          <Menu.Item key="home">
              <Icon type="home" /> <Link style={{ display:'inline-block' }} to="/">Home</Link>
          </Menu.Item>
        
          <Menu.Item key="alipay">
            <a href="http://marjanahmadi.ir/" target="_blank">My Website</a>
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />More Pages</span>}>
            <MenuItemGroup>
              <Menu.Item key="morepage:about"><Link to="/about">About Page</Link></Menu.Item>
              <Menu.Item key="morepage:contact"><Link to="/contact">Contact Page</Link></Menu.Item>
            </MenuItemGroup>
         </SubMenu>
        </Menu>
    )
  }
}
