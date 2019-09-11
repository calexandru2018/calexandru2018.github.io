<template>
  <div id="app">
	<h1> {{component_to_show}} </h1>
	<h1>Class Visible {{class_visible}} </h1>
	<app-portfolio-header></app-portfolio-header>
	<app-navigation></app-navigation>
	<keep-alive>
    	<component 
			class = "component" 
			v-bind:class = "{'show-component': class_visible}" 
			v-bind:is = "component_to_show" 
			></component>
	</keep-alive>
  </div>
</template>

<script>	
	import { eventBus } from './main.js';
	import TopSocialLinks from "@/components/TopSocialLinks.vue";
	import PortfolioHeader from "@/components/PortfolioHeader.vue";
	import Navigation from "@/components/Navigation.vue";
	import Portfolio from "@/views/Portfolio.vue";
	import AboutMe from "@/views/AboutMe.vue";
	import Contacts from "@/views/Contacts.vue";

	export default {
		data(){
			return{
				component_to_show: 'app-portfolio',
				class_visible: false,
			}
		},
		components:{
			'top-social-links': TopSocialLinks,
			'app-navigation': Navigation,
			'app-portfolio': Portfolio,
			'app-about-me': AboutMe,
			'app-contacts': Contacts,
			'app-portfolio-header': PortfolioHeader
		},
		created(){
			eventBus.$on('component-to-show', (component, show) => {
				this.component_to_show = component
				this.class_visible = show
			});
			eventBus.$on('hide-component', (booleanVal) => {
				this.class_visible = false
			});
		}
	}
</script>

<style lang="scss">
/* eslint-disable */
	html, body{
		height: 100vh;
		padding: 0;
		margin: 0;
		overflow: hidden
	}
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
		background-image: url('./assets/abstract-design-diagonal-2387532(1).jpg');
		background-position: center;
		background-size: cover;
		height: inherit;
		overflow: hidden
	}
</style>
<style lang="scss" scoped>
	.component{
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		background-color: rgba(110, 110, 110, 0.7);
		transition: all ease-in-out 0.7s;
		transform: translate(150%);
	}
	.show-component{
		// transform: translate(0)
	}
</style>
