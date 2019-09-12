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
	}
	.hide-component-button{
		width: 100%;
    	height: 100%;
		background-color: #2F394D;
		border: none;
		color: white;
		padding: 0;
		cursor: pointer;
		transition: background-color ease-in 0.1s;
	}
	.hide-component-button:hover{
		background-color: rgb(57, 67, 87);
	}
	.slide-enter-active{
		animation: slide-in .4s ease-in-out forwards;
	}
	.slide-leave-active{
		animation: slide-out .3s ease-out forwards;
	}
	.card-base-layout{
		display: grid;
		grid-template-columns: 10% 90%;
	}
	.card-base-layout div:nth-child(2){
		background-color: #EEE1B3;
		color: #2F394D;
	}
	i{
		border: solid;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 0.7em;
		margin-left: -1.2em;
	}
	i.links{
		background-repeat: no-repeat;
		background-position: center center;
		border:none;
		width: 2em;
	}
	// .links.github{
		.link-github{
		background-image: url("./assets/mark-github.svg");
	}
	.link-eye-open{
		background-image: url("./assets/eye.svg");
	}
	.link-eye-closed{
		background-image: url("./assets/eye-closed.svg");
	}
	.link-external{
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url("./assets/link-external.svg");
	}
	.right {
		transform: rotate(-45deg);
	}
	.left {
		transform: rotate(135deg);
	}
	.up {
		transform: rotate(-135deg);
	}
	.down {
		transform: rotate(45deg);
	}

	//START Animations
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
	// END Animation
</style>
