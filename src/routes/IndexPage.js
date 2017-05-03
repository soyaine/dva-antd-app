import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import { Menu, Icon, Breadcrumb, Layout } from 'antd';
const { Header, Content, Sider } = Layout;
import ManageMenu from '../components/ManageMenu';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
  	  <Layout>
  		<Header className="header">
  		  <div className="logo" />
  		</Header>
  		<Layout>
  		  <Sider width={200} style={{ background: '#fff' }}>
  			<ManageMenu current={this.props.location.pathname.slice(1)} />
  		  </Sider>
  		  <Layout style={{ padding: '0 24px 24px' }}>
  			<Breadcrumb style={{ margin: '12px 0' }}>
  			  <Breadcrumb.Item>Home</Breadcrumb.Item>
  			  <Breadcrumb.Item>List</Breadcrumb.Item>
  			  <Breadcrumb.Item>App</Breadcrumb.Item>
  			</Breadcrumb>
  			<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
  			  {this.props.children||'Content'}
		      {this.props.location.pathname}
  			</Content>
  		  </Layout>
  		</Layout>
  	  </Layout>
    )
  }
}

export default connect()(App);