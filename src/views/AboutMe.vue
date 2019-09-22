<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">About me</h1>
			<div class="projects-content-container">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi quibusdam modi officia minima? Officiis et maiores est eligendi dolor ea, vel repellendus nisi numquam, ratione labore id molestias. At.
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi quibusdam modi officia minima? Officiis et maiores est eligendi dolor ea, vel repellendus nisi numquam, ratione labore id molestias. At.
				</p>
				<div class="no-display-m">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi quibusdam modi officia minima? Officiis et maiores est eligendi dolor ea, vel repellendus nisi numquam, ratione labore id molestias. At.
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi quibusdam modi officia minima? Officiis et maiores est eligendi dolor ea, vel repellendus nisi numquam, ratione labore id molestias. At.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: ['hide_comp_btn_shadow','card_base_layout', 'left_hand_use'],
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.projects-content-container{
		p{
			line-height: 0.6cm;
			text-align: justify;
		}
	}
</style>