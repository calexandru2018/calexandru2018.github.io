<template>
	<nav>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-projects')">
			<span>
				Projects
			</span>
		</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-about-me')">
			<span>
				About Me
			</span>
		</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-contacts')">
			<span>
				Contact
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
				left_hand_use: true,
				arrow_orientation: 'arrow-right.svg',
				nav_btn_margin: '0 auto 0 0',
				nav_btn_slide: 'nav-btn-slide-left', //default
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
					this.arrow_orientation = 'arrow-left.svg';
					this.nav_btn_slide = 'nav-btn-slide-right';
					this.change_hand_btn = 'change-hand-btn-slide-left';
				}else{
					this.left_hand_use = true;
					
					this.arrow_orientation = 'arrow-right.svg';
					this.nav_btn_slide = 'nav-btn-slide-left';
					this.change_hand_btn = 'change-hand-btn-slide-right';
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
$chng-btn-size: 3.5em;
$nav-btn-width: 50%;
$nav-btn-transition: 0.15s;

	nav{
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items: start;
		margin: -0.5em 25px 0 25px;
		.nav-btn{
			width: $nav-btn-width;
			height: 1.5em;
			background-color: transparent;
			border: 2.5px solid $btn-def-border-color;
			border-radius: 5px;
			padding: 25px;
			line-height: 0;
			color: $default-text-color;
			font-weight: bold;
			text-transform: uppercase;
			// transition: color 2s ease-in-out, background-color 2s ease-in-out, border 2s ease-in-out;
			cursor: pointer;
			position: relative;
			&:first-child{
				transition: 
					color $nav-btn-transition ease-in-out, 
					background-color $nav-btn-transition ease-in-out, 
					border $nav-btn-transition ease-in-out, 
					left ease-in-out 0.7s;
			}
			&:nth-child(2){
				transition: 
					color $nav-btn-transition ease-in-out, 
					background-color $nav-btn-transition ease-in-out, 
					border $nav-btn-transition ease-in-out, 
					left ease-in-out 0.4s;
			}
			&:nth-child(3){
				transition: 
					color $nav-btn-transition ease-in-out, 
					background-color $nav-btn-transition ease-in-out, 
					border $nav-btn-transition ease-in-out, 
					left ease-in-out 0.2s;
			}
			&:hover{
				color: $btn-hover-text-color;
				background-color: $btn-def-border-color;
				border: 2.5px solid $btn-def-border-color;
			}
		}
	}
	.change-hand-btn{
		width: $chng-btn-size;
    	height: $chng-btn-size;
		background-color: $btn-def-border-color;
		border: none;
		border-radius: 100px;
		transition: all 0.6s;
    	position: relative;
		align-self: center;
		outline: none !important;
		img{
			width: $chng-btn-size - 1;
			height: $chng-btn-size - 1;
			vertical-align: middle;
			vertical-align: middle;
			outline: none !important;
		}
	}
	.nav-btn-slide-right{//initial stage; using in left hande mode
		left: 50%;
		outline: none !important;
	}
	.nav-btn-slide-left{//alt stage; using in right hande mode
		left: 0;
		outline: none !important;
	}
	.change-hand-btn-slide-right{//initial stage; using in left hande mode
		left: 83%;
		transform: rotate(180deg);
		outline: none !important;
	}
	.change-hand-btn-slide-left{//alt stage; using in right hande mode
		left: 0;
		outline: none !important;
	}

	@media (min-width: 375px) {
		.nav-btn{
			font-size: 1em;
		}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 85%;
		}
	}
	@media (min-width: 375px) and (min-height: 750px){
		nav{
			margin: -1.5em 25px 0 25px !important;
		}
	}
	@media (min-width: 576px) { 
		
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		nav{
    		margin: -3em 25px 0 25px;
			.nav-btn{
				font-size: 1.3rem;
				width: $nav-btn-width - 5% !important;
				height: 3.5em !important;
			}
			.change-hand-btn{
				width:  $chng-btn-size + 2em;
				height: $chng-btn-size + 2em;
				img{
					width:  $chng-btn-size + 1em;
					height: $chng-btn-size + 1em;
				}
			}
		}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 88%;
		}
	}
	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		nav{
    		margin: 1em 25px 0 25px !important;
			.nav-btn{
				font-size: 1.3rem;
				width: $nav-btn-width - 10% !important;
				height: 3.5em !important;
			}
			.change-hand-btn{
				width:  $chng-btn-size + 1.5em;
				height: $chng-btn-size + 1.5em;
				img{
					width:  $chng-btn-size + 1em;
					height: $chng-btn-size + 1em;
				}
			}
		}
		.nav-btn-slide-right{//initial stage; using in left hande mode
			left: 60%;
		}
	}
	@media (min-width: 1024px) and (min-height: 720px) { 
		.change-hand-btn{
				width:  $chng-btn-size + 1em !important;
				height: $chng-btn-size + 1em !important;
				img{
					width:  $chng-btn-size + 0.2em !important;
					height: $chng-btn-size + 0.2em !important;
				}
			}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 90%;
		}
	}
	@media only screen and (min-width: 992px) and (min-height: 720px) {
		nav{
    		margin: 0em 25px 0 25px !important;
			.nav-btn{
				font-size: 1rem;
				width: $nav-btn-width - 17% !important;
				height: 3.8em !important;
			}
			.change-hand-btn{
				width:  $chng-btn-size + 2em;
				height: $chng-btn-size + 2em;
				img{
					width:  $chng-btn-size + 1em;
					height: $chng-btn-size + 1em;
				}
			}
		}
		.nav-btn-slide-right{//initial stage; using in left hande mode
			left: 60%;
		}
	}
	@media (min-width: 1024px) and (min-height: 992px) { 
		.change-hand-btn{
				width:  $chng-btn-size + 1.5em !important;
				height: $chng-btn-size + 1.5em !important;
				img{
					width:  $chng-btn-size + 0.2em !important;
					height: $chng-btn-size + 0.2em !important;
				}
			}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 92%;
		}
	}
	@media (min-width: 1200px) and (max-height: 1024px) { 
		// nav{
		// 	margin: 50px 25px 0 25px !important;
		// 	.nav-btn{
		// 		font-size: 1.3rem !important;
		// 		width: $nav-btn-width - 25% !important;
		// 		height: 3.5em !important;
		// 	}
		// 	.change-hand-btn{
		// 		display: none; 
		// 	}
		// }
	}
	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) { 
		nav{
			margin: 50px 25px 0 25px !important;
			.nav-btn{
				font-size: 1.3rem !important;
				width: $nav-btn-width - 25% !important;
				height: 3.5em !important;
			}
			.change-hand-btn{
				display: none; 
			}
		}
	}
	@media (min-width: 2048px) { 
		nav{
			// margin: 50px 25px 0 25px !important;
			.nav-btn{
				font-size: 1.3rem !important;
				width: $nav-btn-width - 25% !important;
				height: 5em !important;
			}
			.change-hand-btn{
				display: none; 
			}
		}
	}
	@media (min-width: 3840px) { 
		nav{
			// margin: 50px 25px 0 25px !important;
			.nav-btn{
				font-size: 1.7rem !important;
				width: $nav-btn-width - 30% !important;
				height: 5.5em !important;
			}
			.change-hand-btn{
				display: none; 
			}
		}
	}
</style>