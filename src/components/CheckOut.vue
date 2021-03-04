<template>
	<!-- checkout -->
	<div class="col-12 col-lg-4">
		<form action="#" class="checkout">
			<h4 class="checkout__title">Checkout</h4>
			<div class="form__group">
				<input type="text" name="name" placeholder="Jane Doe" v-model="name" />
			</div>
			<div class="form__group">
				<input
					type="email"
					name="email"
					placeholder="my@cartshop.com"
					v-model="email"
				/>
			</div>
			<div class="form__group">
				<input
					type="text"
					name="coupon"
					placeholder="Coupon code"
					v-model="couponCode"
				/>
			</div>

			<button class="form__btn" type="button">
				Complete the order
			</button>
		</form>
	</div>
	<!-- end checkout -->
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
	name: "CheckOut",
	data: () => ({
		name: "",
		email: "",
		couponCode: "",
		couponCodes: ["FIXED10", "PERCENT10", "MIXED10", "REJECTED10"],
		discount: 0
	}),
	computed: {
		...mapState({
			cartItems: state => state.cart.cartItems,
			total: state => state.cart.total
		})
	},
	watch: {
		couponCode(after) {
			if (this.couponCodes.includes(after)) {
				if (this.couponCode == "FIXED10") {
					if (this.cartItems.length >= 1 && this.total > 50) {
						this.setTotal({ code: this.couponCode, discount: 10 });
					}
				} else if (this.couponCode == "PERCENT10") {
					if (this.cartItems.length >= 2 && this.total > 100) {
						this.setTotal({ code: this.couponCode, discount: 0.1 });
					}
				} else if (this.couponCode == "MIXED10") {
					if (this.cartItems.length >= 3 && this.total > 200) {
						this.setTotal({ code: this.couponCode, discount: [10, 0.1] });
					}
				} else if (this.couponCode == "REJECTED10") {
					if (this.total > 1000) {
						this.setTotal({ code: this.couponCode, discount: [10, 0.1] });
					}
				}
			}
			if (after == "") {
				this.resetCoupon();
				this.setTotal();
			}
		}
	},
	methods: {
		...mapMutations({
			setTotal: "cart/setTotal",
			resetCoupon: "cart/resetCoupon"
		})
	},
	mounted() {
		this.resetCoupon();
		this.setTotal();
	}
};
</script>

<style></style>
