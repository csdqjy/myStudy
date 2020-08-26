import React from 'react';
import { connect } from 'dva';

const Products = ({ dispatch, a }) => {
	function remove(id) {
		dispatch({
			type: 'a/remove',
			payload: id
		});
	}
	return (
		<div>
			{a.map((item) => {
				return (
					<div key={item.id}>
						<span>{item.text}</span>
						<button onClick={()=>{remove(item.id)}}>删除</button>
					</div>
				);
			})}
		</div>
	);
};

// export default Products;
export default connect(({ a }) => ({ a }))(Products);
