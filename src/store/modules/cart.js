const getDefaultStore = () => ({
	cartItems: [],
	cartItem: {},
	total: 0,
	coupon_code: null,
	discount: 0
});

export default {
	namespaced: true,
	state: getDefaultStore(),
	actions: {
		addToCart({ commit }, itemToAdd) {
			commit("setCartItems", itemToAdd);
			commit("setTotal");
		},
		removeItem({ commit }, index) {
			commit("setRemove", index);
			commit("setTotal");
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
		setTotal(state, payload = null) {
			let total = 0;
			state.cartItems.forEach(cartItem => {
				if (payload) {
					const { code, discount } = payload;
					state.coupon_code = code;
					state.discount = discount;
				}

				if (state.coupon_code && state.discount) {
					if (state.coupon_code == "FIXED10") {
						total += cartItem.price * cartItem.quantity - state.discount;
					} else if (state.coupon_code == "PERCENT10") {
						total +=
							cartItem.price * cartItem.quantity -
							cartItem.price * cartItem.quantity * state.discount;
					}
				} else {
					total += cartItem.price * cartItem.quantity;
				}
			});
			state.total = total;
		},
		resetCoupon(state) {
			state.coupon_code = null;
			state.discount = 0;
		},
		resetState(state) {
			Object.assign(state, getDefaultStore());
		}
	}
};
