<template>
	<nav>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-portfolio')">
			<span>
				Portfolio
			</span>
		</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-about-me')">
			<span>
				About Me
			</span>
		</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-contacts')">
			<span>
				Contacts
			</span>
		</button>

		<button v-bind:class="'change-hand-btn ' + change_hand_btn" @click="changeUseHand">
			<img src="../assets/img/utility/arrow-left.svg" alt="">
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
$default-text-color: rgb(255,255,255);
$btn-def-border-color: rgb(255,255,255);
$btn-hover-text-color:rgba(100,100,100,0.9);

	nav{
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items: start;
		margin: -1em 25px 0 25px;
		.nav-btn{
			width: 50%;
			height: 1.5em;
			background-color: transparent;
			border: 2.5px solid $btn-def-border-color;
			border-radius: 2px;
			padding: 25px;
			line-height: 0;
			color: $default-text-color;
			font-weight: bold;
			text-transform: uppercase;
			transition: all ease-in-out 0.45s;
			cursor: pointer;
			position: relative;
			&:first-child{
				transition: all ease-in-out 0.7s;
			}
			&:nth-child(3){
				transition: all ease-in-out 0.2s;
			}
			&:hover{
				color: $btn-hover-text-color;
				background-color: $btn-def-border-color;
				border:none;
				border: 2.5px solid $btn-def-border-color;
			}
		}
	}
	.change-hand-btn{
		width: 3.5em;
    	height: 3.5em;
		background-color: $btn-def-border-color;
		border: none;
		border-radius: 30px;
		transition: all 0.6s;
    	position: relative;
		align-self: center;
		img{
			vertical-align: middle;
			width: 25px;
			height: 25px;
			vertical-align: middle;
		}
	}
	.nav-btn-slide-right{//initial stage; using in left hande mode
		left: 50%;
	}
	.nav-btn-slide-left{//alt stage; using in right hande mode
		left: 0;
	}
	.change-hand-btn-slide-right{//initial stage; using in left hande mode
		left: 80%;
		transform: rotate(180deg);
	}
	.change-hand-btn-slide-left{//alt stage; using in right hande mode
		left: 0;
	}
</style>