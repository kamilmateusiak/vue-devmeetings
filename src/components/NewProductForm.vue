<template>
	<div>
		<form @submit.prevent="addItem()">
			<v-layout wrap>
				<v-flex xs12 sm6>
					<v-text-field name="product" v-model="newItemName" placeholder="Add next" v-validate="'required|min:3'" />
				</v-flex>
				<v-flex xs12 sm6>
					<v-btn color="success" type="submit">Add new</v-btn>
				</v-flex>
				<div v-show="errors.has('product')">
					{{ errors.first('product') }}
				</div>
			</v-layout>
		</form>
	</div>
</template>

<script>
	import uuid from 'uuid/v4';

	export default {
		name: 'NewProductForm',
		data() {
			return {
				newItemName: ''
			}
		},
		methods: {
			addItem() {
				this.$validator.validateAll().then(result => {
					if (!result) {
						return;
					}
					this.$emit('onAddProduct', {
						id: uuid(),
						name: this.newItemName
					});
					this.newItemName = '';
					this.$validator.reset();
				})
			}
		}
	}
</script>
