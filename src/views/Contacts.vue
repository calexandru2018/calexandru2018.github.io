<template>
	<div class="component card-base-layout" v-bind:style="card_base_layout.grid_width">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent"><i class="right"></i></button>
		</div>
		<div class="portfolio-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">Contacts</h1>
			<div class="portfolio-content-container">
				<p>You can either email me at <a href="mailto:calexandru2018@pm.me" target="_top">calexandru2018@pm.me</a> or fill the contact form:</p>
				<app-contact-form></app-contact-form>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';
	import ContactForm from '../components/ContactForm.vue'

	export default {
		props: ['hide_comp_btn_shadow','card_base_layout'],
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
	p{
		text-align: justify;
		line-height: 0.6cm;
	}
	a{
		font-weight: bold;
		text-decoration: none;
		color: unset;
	}
</style>