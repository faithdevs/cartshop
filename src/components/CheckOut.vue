<template>
	<!-- checkout -->
	<div class="col-12 col-lg-4">
		<form action="#" class="checkout">
			<h4 class="checkout__title">Checkout</h4>
			<div class="form__group">
				<input type="text" name="name" placeholder="Jane Doe" />
			</div>
			<div class="form__group">
				<input type="email" name="email" placeholder="my@cartshop.com" />
			</div>
			<div class="form__group">
				<input type="text" name="coupon" placeholder="Coupon code" />
			</div>

			<button class="form__btn" type="button">
				Complete the order
			</button>
		</form>
	</div>
	<!-- end checkout -->
</template>

<script>
export default {
	name: "CheckOut"
};
</script>

<style></style>
