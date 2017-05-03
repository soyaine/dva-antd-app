import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
	<Router>
      <Route path="/" component={ProductList}>
        <IndexRedirect to="home"/>
        <Route path="home" component={App2}></Route>
        <Route path="two" component={App3}></Route>
      </Route>
    </Router>    
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);