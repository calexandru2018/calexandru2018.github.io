<template>
	<div class="component card-base-layout" v-bind:style="card_base_layout.grid_width">
		<div v-bind:style="hide_comp_btn_order">
			<button class="hide-component-btn" @click="hideComponent">
				<i class="right"></i>
			</button>
		</div>
		<div v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1>Contacts</h1>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: ['hide_comp_btn_order','card_base_layout'],
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>