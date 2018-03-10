<template>
	<v-select
		:items="options"
		v-model="sortValue"
		label="Sort"
		single-line
		@change="sortProducts"
	></v-select>
</template>

<script>
	export default {
		name: 'SortControl',
		data() {
			return {
				options: ['ASC', 'DESC'],
				sortValue: 'ASC'
			}
		},
		methods: {
			sortProducts(value) {
				this.$emit('onSortProducts', value)	
			}
		}
	}
</script>
