export default {
	namespace: 'a',
	state: [ { text: 'haha', id: 1 }, { text: 'hehe', id: 2 }, { text: 'xixi', id: 3 } ],
	subscriptions: {
		setup({ dispatch, history }) {
			// eslint-disable-line
		}
	},
	reducers: {
		delete(state, { payload: id }) {
			return state.filter((item) => item.id !== id);
		}
	},
	effects: {
		*remove({ payload }, { call, put }) {
			yield put({ type: 'delete', payload });
		}
	}
};
