<template>
	<div>
		<v-layout wrap>
			<v-flex xs12 sm6>
				<products-list @onRemoveOneProduct="handleRemoveOneProduct" :products="products"/>
				<sort-control @onSortProducts="handleSortProducts" />
			</v-flex>
			<v-flex xs12 sm6>
				<ordered-list @onRemoveOneOrder="handleRemoveOneOrder" :orderedProducts="orderedProducts"/>
			</v-flex>
		</v-layout>
		<div>
			<new-product-form @onAddProduct="handleAddProduct"/>
			<SelectProductForm @onOrderProduct="handleProductOrder" :products="products"/>
		</div>
		<div>
			<v-btn @click="removeLast()" color="error">Remove last item</v-btn>
		</div>
	</div>
</template>

<script>
import uuid from 'uuid/v4';
import _ from 'lodash';
import ProductsList from '../components/ProductsList.vue';
import OrderedList from '../components/OrderedList.vue';
import NewProductForm from '../components/NewProductForm.vue';
import SelectProductForm from '../components/SelectProductForm.vue';
import SortControl from '../components/SortControl.vue';

export default {
	name: 'ProductsPage',
	components: {
		ProductsList,
		OrderedList,
		NewProductForm,
		SelectProductForm,
		SortControl
	},
	data() {
		return {
			products: [
				{ id: 0, name: 'Coffee' },
				{ id: 1, name: 'Pizza' },
				{ id: 2, name: 'Coke' },
				{ id: 3, name: 'Apple' }
			],
			orderedProducts: []
		}
	},
	computed: {
		// products(order = 'ASC') {
		// 	let sortedData = _.sortBy(this.data, 'name')
		// 	if (order === 'DESC') {
		// 		return sortedData.reverse();
		// 	}
		// 	return sortedData;
		// }
	},
	methods: {
		removeLast() {
			this.products.pop();
		},
		handleAddProduct(product) {
			this.products.push(product)
		},
		handleRemoveOneProduct(index) {
			this.products.splice(index, 1);
		},
		handleRemoveOneOrder(index) {
			if(this.orderedProducts[index].count > 1) {
				this.orderedProducts[index].count -= 1
			} else {
				this.orderedProducts.splice(index, 1);
			}
		},
		handleProductOrder(itemName) {
			const productItem = _.find(this.products, ['name', itemName]);
			const orderedItem = _.find(this.orderedProducts, ['name', itemName]);
			if (orderedItem) {
				orderedItem.count+=1;
			} else {
				this.orderedProducts.push({...productItem, count: 1})
			}
		},
		handleSortProducts(order) {
			let sortedData = _.sortBy(this.products, 'name')
			if (order === 'DESC') {
				this.products = sortedData.reverse();
			} else {
				this.products = sortedData;
			}
		}
	}
}
</script>

<style>
	.products-list {
		border: 1px solid #000;
		margin: 20px;
		border-radius: 5px;
		font-size: 16px;
	}
</style>
