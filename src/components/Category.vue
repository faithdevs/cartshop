<template>
	<!-- section sort -->
	<div class="section__sort">
		<button
			:class="{ active: currentFilter === 'all' }"
			@click="$emit('setFilter', 'all')"
			type="button"
		>
			All
		</button>
		<button
			:class="{ active: currentFilter === 'cat1' }"
			@click="$emit('setFilter', 'cat1')"
			type="button"
		>
			Painting
		</button>
		<button
			:class="{ active: currentFilter === 'cat2' }"
			@click="$emit('setFilter', 'cat2')"
			type="button"
		>
			Drawing
		</button>
		<button
			:class="{ active: currentFilter === 'cat3' }"
			@click="$emit('setFilter', 'cat3')"
			type="button"
		>
			Surfaces
		</button>
		<button
			:class="{ active: currentFilter === 'cat4' }"
			@click="$emit('setFilter', 'cat4')"
			type="button"
		>
			Craft and Hobby
		</button>
	</div>
	<!-- end section sort -->
</template>

<script>
export default {
	name: "Category",
	props: ["currentFilter"]
};
</script>

<style></style>
