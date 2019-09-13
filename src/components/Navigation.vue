<template>
	<nav>
		<button class="nav-btn" v-bind:style="{margin: nav_btn_margin}" @click="changeComponent('app-portfolio')">Portfolio</button>
		<button class="nav-btn" v-bind:style="{margin: nav_btn_margin}" @click="changeComponent('app-about-me')">About Me</button>
		<button class="nav-btn" v-bind:style="{margin: nav_btn_margin}" @click="changeComponent('app-contacts')">Contacts</button>
			
		<transition name="slide_btn">
			<button class="change-used-hand-btn"  @click="changeUseHand">
				<img v-bind:src="require('../assets/' + arrow_orientation)" alt="">
			</button>
		</transition>
	</nav>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		data() {
			return{
				left_hand_use: true,
				arrow_orientation: 'arrow-right.svg',
				nav_btn_margin: '0 auto 0 0',
				change_btn_margin: '0 0 0 auto',
				change_btn_transition_enter: 'slide-btn-enter',
				change_btn_transition_leaver: 'slide-btn-leave',
			}
		},
		methods:{
			changeComponent(component){
				eventBus.$emit('component-to-show', component, true);
			},
			changeUseHand(){
				if(this.left_hand_use == false){
					this.left_hand_use = true;
					this.arrow_orientation = 'arrow-right.svg';
					this.nav_btn_margin = '0 auto 0 0';
					this.change_btn_margin = '0 0 0 auto';
				}else{
					this.left_hand_use = false;
					this.arrow_orientation = 'arrow-left.svg';
					this.nav_btn_margin = '0 0 0 auto';
					this.change_btn_margin = '0 auto 0 0';
				}
				// console.clear();
				// console.log(`Display left handed ${this.left_hand_use} and ${this.arrow_orientation}`);
				
				eventBus.$emit('left-hand-use', this.left_hand_use);
			}
		},
		created(){
			console.log(`Created_____Display left handed ${this.left_hand_use} and ${this.arrow_orientation}`);
		}
	}
</script>

<style lang="scss" scoped>
	nav{
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items: start;
		margin: 0 25px;
		// grid-row-gap: 5em;
		// margin-top: 2em;
		// margin-left: 1.5em;
		// padding: 0 10px;
		// width: 80%;
	}
	nav .nav-btn{
		width: 50%;
		height: 1.5em;
		background-color: transparent;
		border: 2px solid white;
		border-radius: 2px;
		padding: 25px;
		line-height: 0;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		transition: all ease-in 0.15s;
		cursor: pointer;
	}
	nav .nav-btn:hover{
		color: black;
		background-color: white;
		transform: scale(1.01)
	}
	.change-used-hand-btn{
		width: 3em;
		background-color: white;
		border: none;
		border-radius: 3px;
		// margin: 0 0 0 auto;
	}
	.slide_btn-enter-active{
		animation: slide-in-left_ 1s ease-in-out forwards;
	}
	.slide_btn-leave-active{
		animation: slide-in-right_ 1s ease-in-out forwards;
		
	}

	@keyframes slide-in-left_{
		from{
			height: 1000px;
		}
		to{
			margin: 10px;
		}
	}
	@keyframes slide-in-right_{
		from{
			margin: 0 0 0 auto;
		}
		to{
			margin: 0 auto 0 0;
		}
	}

</style>