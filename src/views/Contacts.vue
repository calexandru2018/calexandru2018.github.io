<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">{{ $t("contact.menu_title") }}</h1>
			<div class="projects-content-container">
				<p v-html="$t('contact.menu_text')"></p>
				<app-contact-form></app-contact-form>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';
	import ContactForm from '../components/ContactForm.vue'

	export default {
		props: ['hide_comp_btn_shadow','card_base_layout', 'left_hand_use'],
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			}
		},
		components:{
			'app-contact-form': ContactForm,
		}
	}
</script>

<style lang="scss" scoped>
	.projects-container{
		p{
			text-align: justify;
			line-height: 0.6cm;
			a{
				font-weight: bold;
				text-decoration: none;
				color: pink;
			}
		}
		
	}
</style>