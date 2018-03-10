<template>
	<div>
		<h3>All products</h3>
		<v-list v-if="products.length > 0" class="products-list">
			<li :key="product.id" v-for="(product, index) in products">
				<single-list-item :product="product" :index="index" @onRemoveItem="removeOne"/>
			</li>
		</v-list>
		<p v-if="!products.length">No products!</p>
	</div>
</template>

<script>
	import SingleListItem from './SingleListItem.vue';

	export default {
		name: 'ProductsList',
		components: {
			SingleListItem
		},
		props: {
			products: {
				type: Array,
			}
		},
		methods: {
			removeOne(index) {
				this.$emit('onRemoveOneProduct', index)
			}
		}
	}
</script>
