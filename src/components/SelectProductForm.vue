<template>
	<div>	
		<form @submit.prevent="orderItem()">
			<v-layout wrap>
				<v-flex xs6>
					<v-select
						:items="products.map(product => product.name)"
						v-model="selectedItem"
						label="Select"
						single-line
					></v-select>
				</v-flex>
				<v-flex xs6>
					<v-btn color="success" type="submit">Order</v-btn>
				</v-flex>
			</v-layout>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'ProductsList',
		data() {
			return {
				selectedItem: null
			}
		},
		props: {
			products: {
				type: Array,
			}
		},
		methods: {
			orderItem() {
				this.$emit('onOrderProduct', this.selectedItem)	
			}
		}
	}
</script>
