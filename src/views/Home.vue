<template>
	<div class="home">
		<!-- section -->
		<section class="section" id="catalog">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<!-- section title -->
						<h2 class="section__title">Catalog</h2>
						<!-- end section title -->

						<!-- section sort -->
						<category
							@setFilter="setFilter($event)"
							:currentFilter="currentFilter"
						/>
						<!-- end section sort -->
					</div>
				</div>

				<!-- grid -->
				<products
					:items="items"
					:currentFilter="currentFilter"
					@addToCart="handleAdd($event)"
				/>
				<!-- grid -->
			</div>
		</section>
		<!-- end section -->

		<!-- section -->
		<section class="section" id="cart">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<!-- section title -->
						<h2 class="section__title">Cart ({{ cartItems.length }})</h2>
						<!-- end section title -->
					</div>

					<!-- cart -->
					<cart
						:items="cartItems"
						@removeItem="handleRemove($event)"
						@setIncrement="handleIncrement($event)"
						@setDecrement="handleDecrement($event)"
					/>
					<!-- end cart -->

					<!-- checkout -->
					<check-out />
					<!-- end checkout -->
				</div>
			</div>
		</section>
		<!-- end section -->
	</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

// Components
import Cart from "@/components/Cart";
import Category from "@/components/Category";
import CheckOut from "@/components/CheckOut";
import Products from "@/components/Products";
export default {
	components: { Cart, Category, CheckOut, Products },
	name: "Home",
	computed: {
		...mapState({
			items: state => state.product.items,
			currentFilter: state => state.product.currentFilter,
			cartItems: state => state.cart.cartItems
		})
	},
	methods: {
		...mapActions({
			addToCart: "cart/addToCart",
			removeItem: "cart/removeItem"
		}),
		...mapMutations({
			setCurrentFilter: "product/setFilter",
			setIncrement: "cart/setIncrement",
			setDecrement: "cart/setDecrement",
			setTotal: "cart/setTotal"
		}),
		handleAdd(itemToAdd) {
			// add the item or increase quantity
			let itemInCart = this.cartItems.filter(item => item.id === itemToAdd.id);
			let isItemInCart = itemInCart.length > 0;

			if (isItemInCart === false) {
				this.addToCart(itemToAdd);

				this.$toast.open({
					message: "Added to cart",
					type: "success",
					duration: 4000,
					dismissible: true
				});
			} else {
				if (itemInCart[0].quantity < itemToAdd.stock)
					this.setIncrement(itemInCart[0].id);
			}
		},
		// category filter
		setFilter(filter) {
			this.setCurrentFilter(filter);
		},
		// increment filter
		handleIncrement(index) {
			this.setIncrement(index);
			this.setTotal();
		},
		// decrement filter
		handleDecrement(index) {
			this.setDecrement(index);
			this.setTotal();
		},
		// remove item by index
		handleRemove(index) {
			this.removeItem(index);

			this.$toast.open({
				message: "Removed from cart",
				type: "success",
				duration: 4000,
				dismissible: true
			});
		}
	}
};
</script>
