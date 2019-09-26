<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">{{ $t("about_me.menu_title") }}	</h1>
			<div class="projects-content-container">
				<p>
					{{ $t("about_me.p1") }}	
				</p>
				<p>
					{{ $t("about_me.p2") }}	
				</p>
				<div class="no-display-m">
					<p>
						{{ $t("about_me.p3") }}	
					</p>
					<p>
						{{ $t("about_me.p4") }}	
					</p>
					<p>
						{{ $t("about_me.p5") }}	
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
			line-height: 0.8cm;
			text-align: justify;
			font-size: 1.5em;
		}
	}
</style>