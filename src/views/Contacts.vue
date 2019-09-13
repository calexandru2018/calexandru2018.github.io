<template>
	<div class="component card-base-layout" v-bind:style="card_base_layout.grid_width">
		<div v-bind:style="hide_comp_btn_order">
			<button class="hide-component-btn" @click="hideComponent">
				<i class="right"></i>
			</button>
		</div>
		<div class="portfolio-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1>Contacts</h1>
			<p>You can either email me at <a href="mailto:calexandru2018@pm.me" target="_top">calexandru2018@pm.me</a> or fill the contact form:</p>
			<app-contact-form></app-contact-form>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';
	import ContactForm from '../components/ContactForm.vue'

	export default {
		props: ['hide_comp_btn_order','card_base_layout'],
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
	.portfolio-container{
		display: grid;
		grid-template-rows: 1fr 1fr 5fr;
		padding: 0 1.5em;
	}
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