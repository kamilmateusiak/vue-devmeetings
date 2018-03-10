<template>
	<div>	
		<h3>Ordered products</h3>
		<v-list v-if="orderedProducts.length > 0" class="products-list">
			<li :key="product.id" v-for="(product, index) in orderedProducts">
				<single-list-item :product="product" :index="index" @onRemoveItem="removeOne"/>
			</li>
		</v-list>
		<p v-if="!orderedProducts.length">No products!</p>
	</div>
</template>

<script>
	import SingleListItem from './SingleListItem.vue';

	export default {
		name: 'OrderedList',
		components: {
			SingleListItem
		},
		props: {
			orderedProducts: {
				type: Array,
			}
		},
		methods: {
			removeOne(index) {
				this.$emit('onRemoveOneOrder', index)
			}
		}
	}
</script>
