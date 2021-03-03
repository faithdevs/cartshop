const getDefaultStore = () => ({
	items: [
		{
			id: 1,
			category: "cat1",
			image:
				"https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80",
			title: "-20% For All Accessories",
			price: 20,
			quantity: 1,
			stock: 4
		},
		{
			id: 2,
			category: "cat3",
			image:
				"https://images.unsplash.com/photo-1579783483458-83d02161294e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80",
			title: "Discount On Sports Equipment",
			price: 42,
			quantity: 1,
			stock: 5
		},
		{
			id: 3,
			category: "cat2",
			image:
				"https://images.unsplash.com/photo-1578321270951-88bd84d09a64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1596&q=80",
			title: "All Week -30% On Breakfast",
			price: 30,
			quantity: 1,
			stock: 12
		},
		{
			id: 4,
			category: "cat2",
			image:
				"https://images.unsplash.com/photo-1580196923666-a197abb073ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=998&q=80",
			title: "-20% On All Desserts On Friday",
			price: 12,
			quantity: 1,
			stock: 15
		},
		{
			id: 5,
			category: "cat4",
			image:
				"https://images.unsplash.com/photo-1580197161959-8fb3ad6539ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1969&q=80",
			title: "Discount On Weekend Surfing Classes",
			price: 270,
			quantity: 1,
			stock: 6
		},
		{
			id: 6,
			category: "cat1",
			image:
				"https://images.unsplash.com/photo-1580714054217-1f9ab2b3643a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=923&q=80",
			title: "10$ Off For A Gym Membership",
			price: 8,
			quantity: 1,
			stock: 7
		},
		{
			id: 7,
			category: "cat3",
			image:
				"https://images.unsplash.com/photo-1578321272794-79e82a581d5d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGFydHdvcmt8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
			title: "Up To 20% On All Swimwear",
			price: 55,
			quantity: 1,
			stock: 8
		},
		{
			id: 8,
			category: "cat2",
			image:
				"https://images.unsplash.com/photo-1579009420909-b837eefa4274?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGFydHdvcmt8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
			title: "Dinner For 6 At The Local Restaurant",
			price: 33,
			quantity: 1,
			stock: 11
		},
		{
			id: 9,
			category: "cat1",
			image:
				"https://images.unsplash.com/photo-1580711508011-43bf78c465c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGFydHdvcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
			title: "Get a Free Sports Class",
			price: 7.99,
			quantity: 1,
			stock: 6
		}
	],
	item: {},
	currentFilter: "all"
});

export default {
	namespaced: true,
	state: getDefaultStore(),
	actions: {},
	getters: {},
	mutations: {
		setFilter(state, category) {
			state.currentFilter = category;
		},
		resetState(state) {
			Object.assign(state, getDefaultStore());
		}
	}
};
