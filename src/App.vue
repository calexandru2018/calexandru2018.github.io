<template>
  <div id="app">
	<app-portfolio-header></app-portfolio-header>
	<app-navigation v-bind:component_to_show="component_to_show" v-bind:class_visible="class_visible"></app-navigation>
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
	import PDFView from "@/components/PDFViewer.vue";	
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
				},
				default_lang: 'en',
			}
		},
		components:{
			'app-navigation': Navigation,
			'app-projects': Projects,
			'app-about-me': AboutMe,
			'app-contacts': Contacts,
			'app-portfolio-header': PortfolioHeader,
			'app-pdfview': PDFView
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

				this.slide_enter = 'slide-enter-active_left_hand';
				this.slide_leave = 'slide-leave-active_left_hand';
				this.hide_comp_btn_shadow = 'hide-component-btn-shadow-left';
				this.card_base_layout.grid_layout_class = 'card-base-layout-left';
				this.card_base_layout.grid_positioning = 'grid-column-star: 2; grid-column-end: 3';

				if(!booleanVal){
					this.slide_enter = 'slide-enter-active_right_hand';
					this.slide_leave = 'slide-leave-active_right_hand';
					this.hide_comp_btn_shadow = 'hide-component-btn-shadow-right';
					this.card_base_layout.grid_layout_class = 'card-base-layout-right';
					this.card_base_layout.grid_positioning = 'grid-column-star: 1; grid-column-end: 2';
				}
			});
		},
	}
</script>

<style lang="scss">
$default-text-color: rgb(255,255,255);
$secondary-text-color: rgb(47,57,77);
$accent-color: whrgb(255,255,255);
$card-base-background: rgb(241,242,242);
$component-main-color: rgb(255, 255, 255);
$component-secondary-color: rgb(80, 146, 156);
/* eslint-disable */
.page{ //Used in CV to show it aligned to center
	margin: 0 auto !important;
}	
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
		background-image: url('./assets/img/background/beautiful-branch-bright-772520.jpg');
		background-position: top;
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
		& > div:nth-child(2){
			background-color: $card-base-background;
			color: $secondary-text-color;
			.card-header{
				background-color: $card-base-background;
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
			padding: 0 1.5em 1.5em 1.5em;
		}
		.hide-component-btn{
			width: 100%;
			height: 100%;
			// background-color: $component-main-color;
			background-color: $card-base-background;
			border: none;
			color: rgb(112, 128, 144);
			padding: 0;
			cursor: pointer;
			transition: background-color ease-in-out 0.2s;
			&:hover, &:active{
				background-color: rgb(112, 128, 144);
				i{
					color:$card-base-background;
				}
			}	
		}
		.hide-component-btn-shadow-left{
			box-shadow: inset 13px 13px 0px -5px rgb(112, 128, 144);
		}
		.hide-component-btn-shadow-right{
			box-shadow: inset -13px 13px 0px -5px rgb(112, 128, 144);
		}
	}
	i{
		border: solid;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 0.7em;
		margin-left: -.4em;
		color:rgb(112, 128, 144);
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
	

	// MEDIA QUERIES START
	@media (min-width: 768px) { 
		#app{
			padding: 0em 2.5em !important;
			.component{
				left: 0;
				filter: drop-shadow(2px 4px 6px black);
			}
			.card-base-layout {
				.projects-content-container{
					margin: 1em 5em;
				}
			}
		}
		.contact-form{
			text-area{
				width: 90% !important;
				padding: 5% 5%  !important;
			}
		}

	}
	@media (min-width: 992px) {
		#app{
			padding: 0em 6em !important;
			.card-base-layout {
				.projects-content-container{
					margin: 1em 5em;
					text-area{
						width: 96%;
						padding: 2% 2%;
					}
				}
			}
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
				& div:nth-child(2){
					.card-header{
						padding: 1em 0 0.1em 0;
						font-size: 3em;
					}
				}
			}
			.card-base-layout-left{
				grid-template-columns: 3% 97% !important;
			}
		}
		i{
			padding: 0.5em;
		}
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
			.card-base-layout{
				& div:nth-child(2){
					.card-header{
						padding: 35px 0 0 0;
						font-size: 70px;
					}
				}
			}
			.card-base-layout-left{
				grid-template-columns: 2% 98% !important;
			}
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
$animation-duration: 0.4s;

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
			transform: translateX(150%);
			// transform: translateX(150%) scale(0);
			opacity: 0;
		}
		to{
			transform: translateX(0%);
			// transform: translateX(0%) scale(1);
			opacity: 1;
		}
	}
	@keyframes slide-out-left{
		from{
			transform: translateX(0%);
			// transform: translateX(0%) scale(1);
			opacity: 1;
		}
		to{
			transform: translateX(150%);
			// transform: translateX(150%) scale(0);
			opacity: 0;
		}
	}

	@keyframes slide-in-right{
		from{
			transform: translateX(-150%);
			// transform: translateX(-150%) scale(0);
			opacity: 0;
		}
		to{
			transform: translateX(0%);
			// transform: translateX(0%) scale(1);
			opacity: 1;
		}
	}
	@keyframes slide-out-right{
		from{
			transform: translateX(0%);
			// transform: translateX(0%) scale(1);
			opacity: 1;
		}
		to{
			transform: translateX(-150%);
			// transform: translateX(-150%) scale(0);
			opacity: 0;
		}
	}
	// END Animation
</style>
