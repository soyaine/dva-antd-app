import React, { PropTypes } from 'react';
import render from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { Table, Popconfirm, Button, Menu, Icon, Breadcrumb, Layout } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const ProductList = React.createClass({	
  getInitialState() {
    return {
      current: '1',
	  openKeys: [],
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
	  <Layout>
		<Header className="header">
		  <div className="logo" />
		</Header>
		<Layout>
		  <Sider width={200} style={{ background: '#fff' }}>
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
				<Menu.Item key="1"><Link to="/nav1/o1">Option1</Link></Menu.Item>
				<Menu.Item key="2"><Link to="/nav1/o2">Option2</Link></Menu.Item>
				<Menu.Item key="3"><Link to="/nav1/o3">Option3</Link></Menu.Item>
				<Menu.Item key="4"><Link to="/nav1/o4">Option4</Link></Menu.Item>
			  </SubMenu>
				<SubMenu key="sub2" title={<span><Icon type="trophy" /><span>Nav Two</span></span>}>
				  <Menu.Item key="5"><Link to="/nav2/o5">Option 5</Link></Menu.Item>
				  <SubMenu key="sub3" title="Submenu">
					<Menu.Item key="6"><Link to="/nav2/o5">Option 6</Link></Menu.Item>
					<Menu.Item key="7"><Link to="/nav2/o7">Option 7</Link></Menu.Item>
				  </SubMenu>
				</SubMenu>
				<SubMenu key="sub4" title={<span><Icon type="bulb" /><span>Nav Three</span></span>}>
				  <Menu.Item key="8"><Link to="/nav3/o8">Option 8</Link></Menu.Item>
				</SubMenu>
			</Menu>
		  </Sider>
		  <Layout style={{ padding: '0 24px 24px' }}>
			<Breadcrumb style={{ margin: '12px 0' }}>
			  <Breadcrumb.Item>Home</Breadcrumb.Item>
			  <Breadcrumb.Item>List</Breadcrumb.Item>
			  <Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
			  Content
			</Content>
		  </Layout>
		</Layout>
	  </Layout>
    );
  },
});
export default ProductList;


//const ProductList = ({ onDelete, products }) => {
//  const columns = [{
//    title: 'Name',
//    dataIndex: 'name',
//  }, {
//    title: 'Actions',
//    render: (text, record) => {
//      return (
//        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
//          <Button>Delete</Button>
//        </Popconfirm>
//      );
//    },
//  }];
//  return (
//    <Table
//      dataSource={products}
//      columns={columns}
//    />
//  );
//};
//
//ProductList.propTypes = {
//  onDelete: PropTypes.func.isRequired,
//  products: PropTypes.array.isRequired,
//};
//
//export default ProductList;