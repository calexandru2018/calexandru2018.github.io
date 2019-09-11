<template>
  <div id="app">
	<app-portfolio-header></app-portfolio-header>
	<app-navigation></app-navigation>
	<transition name="slide" v-if="class_visible == true">
		<keep-alive>
			<component v-bind:is = "component_to_show" ></component>
		</keep-alive>
	</transition>
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
			eventBus.$on('show-component', (booleanVal) => {
				this.class_visible = booleanVal
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
		background-image: url('./assets/josh-rose-trYl7JYATH0-unsplash.jpg');
		background-position: center;
		background-size: cover;
		height: inherit;
		overflow: hidden
	}
</style>
<style lang="scss">
	.component{
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		background-color: rgba(110, 110, 110, 0.7);
	}
	.hide-component-button{
		width: inherit;
    	height: 100%;
		background-color: #2F394D;
		border: none;
		color: white;
		// enable this and change height to inherit in case the button is not be all along the line
		// margin-top: 20em;
	}
	.slide-enter-active{
		animation: slide-in .4s ease-in-out forwards;
	}
	.slide-leave-active{
		animation: slide-out .3s ease-out forwards;
	}
	@keyframes slide-in{
		from{
			transform: translateX(150%)
		}
		to{
			transform: translateX(0%)
		}
	}
	@keyframes slide-out{
		from{
			transform: translateX(0%)
		}
		to{
			transform: translateX(150%)
		}
	}
	.card-base-layout{
		display: flex;
		// grid-template-columns: 1fr 1fr;
		// grid-template-columns: fit-content 1fr;
		flex-flow: column no-wrap;

	}
	.card-base-layout div:first-child{
		background-color: #2F394D;
		width: 10%;
	}
	.card-base-layout div:nth-child(2){
		background-color: #EEE1B3;
		width: 90%;
		color: #2F394D;
	}
	i {
		border: solid;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 0.7em;
		margin-left: -1.2em;
	}
	.right {
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}

	.left {
		transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
	}

	.up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}

	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
</style>
