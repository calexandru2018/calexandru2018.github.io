<template>
  <div id="app">
	<app-portfolio-header></app-portfolio-header>
	<app-navigation></app-navigation>
	<transition
		v-bind:enter-active-class="updated_slide_enter"
  		v-bind:leave-active-class="updated_slide_leave"
		v-if="class_visible == true">
		<keep-alive>
			<component 
				v-bind:is = "component_to_show"
				v-bind:hide_comp_btn_order="hide_comp_btn_order" 
				v-bind:card_base_layout="card_base_layout" ></component>
		</keep-alive>
	</transition>
  </div>
</template>

<script>	
	import { eventBus } from './main.js';
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
				left_hand_use: true,
				slide_enter: 'slide-enter-active_left_hand',
				slide_leave: 'slide-leave-active_left_hand',
				hide_comp_btn_order: 'grid-column-star: 1; grid-column-end:2',
				card_base_layout: {
					grid_positioning: 'grid-column-star: 2; grid-column-end:3',
					grid_width: 'grid-template-columns: 10% 90%'
				}
				

			}
		},
		components:{
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
			eventBus.$on('left-hand-use', (booleanVal) => {
				this.left_hand_use = booleanVal
				console.log(this.slide_enter);
				
				if(booleanVal == true){
					this.slide_enter = 'slide-enter-active_right_hand';
					this.slide_leave = 'slide-leave-active_right_hand';
					this.hide_comp_btn_order = 'grid-column-star: 2; grid-column-end:3';
					this.card_base_layout.grid_positioning = 'grid-column-star: 1; grid-column-end:2';
					this.card_base_layout.grid_width = 'grid-template-columns: 90% 10%';
				}else{
					this.slide_enter = 'slide-enter-active_left_hand';
					this.slide_leave = 'slide-leave-active_left_hand';
					this.hide_comp_btn_order = 'grid-column-star: 1; grid-column-end:2';
					this.card_base_layout.grid_positioning = 'grid-column-star: 2; grid-column-end:3';
					this.card_base_layout.grid_width = 'grid-template-columns: 10% 90%';
				}
			});
		},
		computed: {
			updated_left_hand_use() {				
				return this.left_hand_use;

			},
			updated_slide_enter(){
				return this.slide_enter;
			},
			updated_slide_leave(){
				return this.slide_leave;
			}
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
		overflow: hidden;
		display: grid;
    	grid-template-rows: 0.5fr 1fr;
	}
</style>
<style lang="scss">
	.component{
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
	}
	.card-base-layout{
		display: grid;
	}
	.card-base-layout div:nth-child(2){
		background-color: #EEE1B3;
		color: #2F394D;
	}
	.hide-component-btn{
		width: 100%;
    	height: 100%;
		background-color: #2F394D;
		border: none;
		color: white;
		padding: 0;
		cursor: pointer;
		transition: background-color ease-in 0.1s;
	}
	.hide-component-btn:hover{
		background-color: rgb(57, 67, 87);
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
</style>
<style lang="scss" scoped>
	//START Animations
	.slide-enter-active_left_hand{
		animation: slide-in-left .4s ease-in-out forwards;
	}
	.slide-leave-active_left_hand{
		animation: slide-out-left .3s ease-out forwards;
	}
	.slide-enter-active_right_hand{
		animation: slide-in-right .4s ease-in-out forwards;
	}
	.slide-leave-active_right_hand{
		animation: slide-out-right .3s ease-out forwards;
	}
	@keyframes slide-in-left{
		from{
			transform: translateX(150%)
		}
		to{
			transform: translateX(0%)
		}
	}
	@keyframes slide-out-left{
		from{
			transform: translateX(0%)
		}
		to{
			transform: translateX(150%)
		}
	}

	@keyframes slide-in-right{
		from{
			transform: translateX(-100%)
		}
		to{
			transform: translateX(0%)
		}
	}
	@keyframes slide-out-right{
		from{
			transform: translateX(0%)
		}
		to{
			transform: translateX(-100%)
		}
	}
	// END Animation
</style>
