<template>
	<div class="col-12 col-lg-8">
		<div class="cart">
			<div class="table-responsive">
				<table class="cart__table">
					<thead>
						<tr>
							<th>Product</th>
							<th>Title</th>
							<th>Quantity</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(item, index) in items" :key="item.id">
							<td>
								<div class="cart__img">
									<img :src="item.image" alt="" />
								</div>
							</td>
							<td>{{ item.title }}</td>
							<td>
								<div class="cart__quantity">
									<button
										@click="$emit('setDecrement', item.id)"
										:disabled="item.quantity < 2"
										type="button"
									>
										<i class="ion ion-ios-remove"></i>
									</button>
									<input type="text" v-model="item.quantity" />
									<button
										@click="$emit('setIncrement', item.id)"
										:disabled="item.quantity >= item.stock"
										type="button"
									>
										<i class="ion ion-ios-add"></i>
									</button>
								</div>
							</td>
							<td>
								<span class="cart__price"
									>${{ item.price | formatCurrency }}</span
								>
							</td>
							<td>
								<button
									@click="$emit('removeItem', index)"
									class="cart__delete"
									type="button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="512"
										height="512"
										viewBox="0 0 512 512"
									>
										<line
											x1="368"
											y1="368"
											x2="144"
											y2="144"
											style="
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
										/>
										<line
											x1="368"
											y1="144"
											x2="144"
											y2="368"
											style="
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 32px;
                      "
										/>
									</svg>
								</button>
							</td>
						</tr>

						<tr v-show="items.length === 0">
							<td colspan="6">
								<p class="cart__empty">Cart is empty</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="cart__info">
				<div class="cart__total">
					<p>Total:</p>
					<span>${{ Total | formatCurrency }}</span>
				</div>

				<div class="cart__systems">
					<i class="pf pf-visa"></i>
					<i class="pf pf-mastercard"></i>
					<i class="pf pf-paypal"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cart",
	props: ["items"],
	computed: {
		Total() {
			let total = 0;
			this.items.forEach(item => {
				total += item.price * item.quantity;
			});
			return total;
		}
	}
};
</script>

<style></style>
