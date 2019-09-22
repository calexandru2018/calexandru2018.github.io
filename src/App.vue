<template>
  <div id="app">
	<app-portfolio-header></app-portfolio-header>
	<app-navigation></app-navigation>
	<transition
		v-bind:enter-active-class="slide_enter"
  		v-bind:leave-active-class="slide_leave"
		v-if="class_visible == true">
		<keep-alive>
			<component 
				v-bind:is = "component_to_show"
				v-bind:card_base_layout="card_base_layout"
				v-bind:hide_comp_btn_shadow="hide_comp_btn_shadow"
				v-bind:left_hand_use="left_hand_use"
			></component>
		</keep-alive>
	</transition>
  </div>
</template>

<script>	
	import { eventBus } from './main.js';
	import PortfolioHeader from "@/components/PortfolioHeader.vue";
	import Navigation from "@/components/Navigation.vue";
	import Projects from "@/views/Projects.vue";
	import AboutMe from "@/views/AboutMe.vue";
	import Contacts from "@/views/Contacts.vue";	

	export default {
		data(){
			return{
				component_to_show: 'app-portfolio',
				class_visible: false,
				left_hand_use: true,
				slide_enter: 'slide-enter-active_left_hand',
				slide_leave: 'slide-leave-active_left_hand',
				hide_comp_btn_shadow: 'hide-component-btn-shadow-left',
				card_base_layout: {
					grid_layout_class: 'card-base-layout-left',
					grid_positioning: 'grid-column-star: 2; grid-column-end:3',
				}
			}
		},
		components:{
			'app-navigation': Navigation,
			'app-projects': Projects,
			'app-about-me': AboutMe,
			'app-contacts': Contacts,
			'app-portfolio-header': PortfolioHeader
		},
		created(){
			eventBus.$on('component-to-show', (component, show) => {
				this.component_to_show = component;
				this.class_visible = show;
			});
			eventBus.$on('show-component', (booleanVal) => {
				this.class_visible = booleanVal
			});
			eventBus.$on('left-hand-use', (booleanVal) => {
				this.left_hand_use = booleanVal;
				if(booleanVal == false){
					this.slide_enter = 'slide-enter-active_right_hand';
					this.slide_leave = 'slide-leave-active_right_hand';
					this.hide_comp_btn_shadow = 'hide-component-btn-shadow-right';
					this.card_base_layout.grid_layout_class = 'card-base-layout-right';
					this.card_base_layout.grid_positioning = 'grid-column-star: 1; grid-column-end: 2';
				}else{
					this.slide_enter = 'slide-enter-active_left_hand';
					this.slide_leave = 'slide-leave-active_left_hand';
					this.hide_comp_btn_shadow = 'hide-component-btn-shadow-left';
					this.card_base_layout.grid_layout_class = 'card-base-layout-right';
					this.card_base_layout.grid_positioning = 'grid-column-star: 2; grid-column-end: 3';
				}
			});
		},
	}
</script>

<style lang="scss">
$default-text-color: rgb(255,255,255);
$secondary-text-color: rgb(47,57,77);
$accent-color: whrgb(255,255,255);
$card-base-background: rgb(255,255,255);
$component-main-color: rgb(255, 255, 255);
$component-secondary-color: rgb(80, 146, 156);

/* eslint-disable */
	html, body{
		height: 100vh;
		padding: 0;
		margin: 0;
		overflow: hidden
	}
	#app {
		font-family: 'Inria Sans Regular';
		// font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $default-text-color;
		background-image: url('./assets/img/custom/tim-mossholder-4P5DMXQXzRI-unsplash.jpg');
		background-position: center;
		background-size: cover;
		height: inherit;
		overflow: hidden;
		display: grid;
    	grid-template-rows: 0.5fr 1fr;
	}
	.component{
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
	}
	.card-base-layout{
		display: grid;
		// grid-template-columns: 10% 90%;
		& > div:nth-child(2){
			background-color: $card-base-background;
			color: $secondary-text-color;
			.card-header{
				background-color: $component-main-color;
				margin: auto;
				padding: 0.6em 0 0.1em 0;
				width: 90%;
				z-index: 10;
			}
		}
		.projects-container{
			overflow-y: auto;
		}
		.projects-content-container{
			display: flex;
			flex-direction: column;
			padding: 0 1.5em;
		}
		.hide-component-btn{
			width: 100%;
			height: 100%;
			// background-color: $component-main-color;
			background-color: rgb(240, 248, 248);
			border: none;
			color: $default-text-color;
			padding: 0;
			cursor: pointer;
			transition: background-color ease-in-out 0.2s;
			&:hover, &:active{
				color:white;
				background-color: $component-secondary-color;
				i{
					color:white;
				}
			}	
		}
		.hide-component-btn-shadow-left{
			box-shadow: inset 13px 13px 0px -5px $component-secondary-color;
		}
		.hide-component-btn-shadow-right{
			box-shadow: inset -13px 13px 0px -5px $component-secondary-color;
		}
	}
	i{
		border: solid;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 0.7em;
		margin-left: -.4em;
		color:$component-secondary-color;
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
	.card-base-layout-left{
		grid-template-columns: 10% 90% !important;
	}
	.card-base-layout-right{
		grid-template-columns: 90% 10% !important;
	}
	

	// 	// MEDIA QUERIES START
	@media (min-width: 768px) { 
		#app{
			padding: 0em 2.5em !important;
			.component{
				left: 0;
			}
		}
	}
	@media (min-width: 992px) {
		#app{
			padding: 0em 6em !important;
		}
	}
	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1024px) { 
		#app{
			padding: 0em 10% !important;
			.component{
				width: 65vw;
				height: 75vh;
				left: 20vw;
				top: 10%;
				margin: 0 10%;
			}
			.card-base-layout{
				.hide-component-btn{
					border-top-left-radius: 10px;
					border-bottom-left-radius: 10px;
				}
				grid-template-columns: 5% 95%;
				& div:nth-child(2){
					border-top-right-radius: 10px;
					border-bottom-right-radius: 10px;
					.card-header{
						padding: 1em 0 0.1em 0;
						font-size: 3em;
					}
				}
			}
		}
		i{
			padding: 0.5em;
		}
	}
	@media (min-width: 1024px) and (min-height: 992px) { 
		
	}
	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) { 
		#app{
			padding: 0em 5% !important;
			.card-base-layout{
				grid-template-columns: 2% 98%;
				& div:nth-child(2){
					.card-header{
						padding: 35px 0 0 0;
						font-size: 70px;
					}
				}
			}
		}
	}
	// 2k resolutions 2048 x 1080
	@media (min-width: 2048px) { 
		#app{
			padding: 0em 10% !important;
			// .card-base-layout{
			// 	grid-template-columns: 2% 98%;
			// 	& div:nth-child(2){
			// 		.card-header{
			// 			padding: 35px 0 0 0;
			// 			font-size: 70px;
			// 		}
			// 	}
			// }
		}
	}
	// 4k resolutions 3840 x 2160
	@media (min-width: 3840px) { 
		#app{
			padding: 0em 10% !important;
			// .card-base-layout{
			// 	grid-template-columns: 2% 98%;
			// 	& div:nth-child(2){
			// 		.card-header{
			// 			padding: 35px 0 0 0;
			// 			font-size: 70px;
			// 		}
			// 	}
			// }
		}
	}
	// MEDIA QUERIES END
</style>
<style lang="scss" scoped>
$animation-duration: 0.35s;

	//START Animations
	.slide-enter-active_left_hand{
		animation: slide-in-left $animation-duration ease-in forwards;
	}
	.slide-leave-active_left_hand{
		animation: slide-out-left $animation-duration ease-out forwards;
	}
	.slide-enter-active_right_hand{
		animation: slide-in-right $animation-duration ease-in forwards;
	}
	.slide-leave-active_right_hand{
		animation: slide-out-right $animation-duration ease-out forwards;
	}
	@keyframes slide-in-left{
		from{
			transform: translateX(150%) scale(0);
			opacity: 0.0;
		}
		to{
			transform: translateX(0%) scale(1);
			opacity: 1.0;
		}
	}
	@keyframes slide-out-left{
		from{
			transform: translateX(0%) scale(1);
			opacity: 1.0;
		}
		to{
			transform: translateX(150%) scale(0);
			opacity: 0.0;
		}
	}

	@keyframes slide-in-right{
		from{
			transform: translateX(-150%) scale(0);
			opacity: 0.0;
		}
		to{
			transform: translateX(0%) scale(1);
			opacity: 1.0;
		}
	}
	@keyframes slide-out-right{
		from{
			transform: translateX(0%) scale(1);
			opacity: 1.0;
		}
		to{
			transform: translateX(-150%) scale(0);
			opacity: 0.0;
		}
	}
	// END Animation
</style>
