<template>
	<nav>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-portfolio')">Portfolio</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-about-me')">About Me</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-contacts')">Contacts</button>

		<button v-bind:class="'change-hand-btn ' + change_hand_btn" @click="changeUseHand">
			<img v-bind:src="require('../assets/' + arrow_orientation)" alt="">
		</button> 
	</nav>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		data() {
			return{
				left_hand_use: false,
				arrow_orientation: 'arrow-right.svg',
				nav_btn_margin: '0 auto 0 0',
				nav_btn_slide: 'nav-btn-slide-left',
				change_hand_btn: 'change-hand-btn-slide-right',
			}
		},
		methods:{
			changeComponent(component){
				eventBus.$emit('component-to-show', component, true);
			},
			changeUseHand(){
				if(this.left_hand_use == true){
					this.left_hand_use = false;
					this.arrow_orientation = 'arrow-right.svg';
					this.nav_btn_slide = 'nav-btn-slide-left';
					this.change_hand_btn = 'change-hand-btn-slide-right';
				}else{
					this.left_hand_use = true;
					this.arrow_orientation = 'arrow-left.svg';
					this.nav_btn_slide = 'nav-btn-slide-right';
					this.change_hand_btn = 'change-hand-btn-slide-left';
				}

				eventBus.$emit('left-hand-use', this.left_hand_use);
			},
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
		transition: all ease-in-out 0.9s;
		cursor: pointer;
    	position: relative;
	}
	nav .nav-btn:hover{
		color: black;
		background-color: white;
		transform: scale(1.01)
	}
	.change-hand-btn{
		width: 3em;
		background-color: white;
		border: none;
		border-radius: 3px;
		transition: left 1s;
    	position: relative;
		img{
			transition: all 1s;
		}
	}
	.nav-btn-slide-right{//initial stage; using in left hande mode
		left: 50%;
	}
	.nav-btn-slide-left{//alt stage; using in right hande mode
		left: 0;
	}
	.change-hand-btn-slide-right{//initial stage; using in left hande mode
		left: 85%;
		.change-hand-btn img{
			transform: rotate(180)
		}
	}
	.change-hand-btn-slide-left{//alt stage; using in right hande mode
		left: 0;
	}

</style>