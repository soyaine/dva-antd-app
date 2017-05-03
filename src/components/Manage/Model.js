import React, { PropTypes } from 'react';
import { Menu, message } from 'antd';

const ManageMenu = ({ current, dataSource }) => {
	const columns = [{
		title: 'Menu - 1',
		dataIndex: "菜单1"
	},{
		title: 'Menu - 2',
		dataIndex: "菜单2"
	}]
}

const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;