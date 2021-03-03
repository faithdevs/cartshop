<template>
	<!-- grid -->
	<transition-group name="fadex" class="row row--grid" tag="div">
		<div class="col-12 col-sm-6 col-lg-4" v-for="item in items" :key="item.id">
			<span v-if="currentFilter === item.category || currentFilter === 'all'">
				<div class="product">
					<div class="product__img">
						<img :src="item.image" alt="" />
					</div>
					<h3 class="product__title">{{ item.title }}</h3>
					<span class="product__price">${{ item.price | formatCurrency }}</span>
					<button
						@click="$emit('addToCart', item)"
						class="product__add"
						type="button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="512"
							height="512"
							viewBox="0 0 512 512"
						>
							<path
								d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
								style="
									fill: none;
									stroke-miterlimit: 10;
									stroke-width: 32px;
								"
							/>
							<line
								x1="256"
								y1="176"
								x2="256"
								y2="336"
								style="
									fill: none;
									stroke-linecap: round;
									stroke-linejoin: round;
									stroke-width: 32px;
								"
							/>
							<line
								x1="336"
								y1="256"
								x2="176"
								y2="256"
								style="
									fill: none;
									stroke-linecap: round;
									stroke-linejoin: round;
									stroke-width: 32px;
								"
							/>
						</svg>
					</button>
				</div>
			</span>
		</div>
	</transition-group>
	<!-- grid -->
</template>

<script>
export default {
	name: "Products",
	props: {
		items: {
			type: Array,
			required: true
		},
		currentFilter: {
			type: String,
			required: true
		}
	}
};
</script>

<style></style>
