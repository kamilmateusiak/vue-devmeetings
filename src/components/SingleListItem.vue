<template>
	<v-layout wrap>
		<v-flex xs12 sm6>{{ product.name }} <span v-if="product.count">x{{product.count}}</span></v-flex>
		<v-flex xs12 sm6><v-btn color="warning" small @click="removeItem(index)">Remove</v-btn></v-flex>
	</v-layout>
</template>

<script>
	export default {
		name: 'SingleListItem',
		props: {
			product: {
				type: Object,
			},
			index: {
				type: Number
			}
		},
		methods: {
			removeItem(index) {
				this.$emit('onRemoveItem', index)
			}
		}
	}
</script>
