import React, { PropTypes } from 'react';
import render from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { Table, Popconfirm, Button, Menu, Icon, Breadcrumb, Layout } from 'antd';
const { SubMenu } = Menu;

//class ManageMenu extends Component {
//	
//}

//class ManageMenu extends Component {
//  constructor(props){
//    super(props)
//  }	
//}
const ManageMenu = React.createClass({	
  getInitialState() {
	// 利用 Menu 中 key 值的层级关系来获取当前展开的 SubMenu 的 key 值
	const key = 'sub' + this.props.current.slice(0, 1);
    return {
      current: this.props.current,
	  openKeys: [key],
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  },
  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  },
  render() {
    return (
			<Menu
			  theme="dark"
			  mode="inline"
		      openKeys={this.state.openKeys}
		      selectedKeys={[this.state.current]}
		      onOpenChange={this.onOpenChange}
		      onClick={this.handleClick}
			  style={{ height: '100%' }}
			>
			  <SubMenu key="sub1" title={<span><Icon type="rocket" />Nav One</span>}>
				<Menu.Item key="11"><Link to="11">Option1</Link></Menu.Item>
				<Menu.Item key="12"><Link to="12">Option2</Link></Menu.Item>
				<Menu.Item key="13"><Link to="13">Option3</Link></Menu.Item>
				<Menu.Item key="14"><Link to="14">Option4</Link></Menu.Item>
			  </SubMenu>
				<SubMenu key="sub2" title={<span><Icon type="trophy" /><span>Nav Two</span></span>}>
				  <Menu.Item key="21"><Link to="21">Option 5</Link></Menu.Item>
				  <Menu.Item key="22"><Link to="22">Option 6</Link></Menu.Item>
				  <Menu.Item key="23"><Link to="23">Option 7</Link></Menu.Item>
				</SubMenu>
				<SubMenu key="sub4" title={<span><Icon type="bulb" /><span>Nav Three</span></span>}>
				  <Menu.Item key="31"><Link to="31">Option 8</Link></Menu.Item>
				</SubMenu>
			</Menu>
    );
  },
});
export default ManageMenu;