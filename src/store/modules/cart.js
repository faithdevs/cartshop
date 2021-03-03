const getDefaultStore = () => ({
	cartItems: [],
	cartItem: {}
});

export default {
	namespaced: true,
	state: getDefaultStore(),
	actions: {
		addToCart({ commit }, itemToAdd) {
			commit("setCartItems", itemToAdd);
		},
		removeItem({ commit }, index) {
			commit("setRemove", index);
		}
	},
	getters: {},
	mutations: {
		setCartItems(state, itemToAdd) {
			state.cartItems.push(itemToAdd);
		},
		setRemove(state, index) {
			let itemInCart = state.cartItems.splice(index, 1);
			itemInCart[0].quantity = 1;
		},
		setIncrement(state, index) {
			let itemInCart = state.cartItems.filter(item => item.id === index);
			itemInCart[0].quantity++;
		},
		setDecrement(state, index) {
			let itemInCart = state.cartItems.filter(item => item.id === index);
			itemInCart[0].quantity--;
		},
		resetState(state) {
			Object.assign(state, getDefaultStore());
		}
	}
};
