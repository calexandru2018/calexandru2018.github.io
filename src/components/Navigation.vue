<template>
	<nav>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-projects')">
			<div>
				Projects
			</div>
		</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-about-me')">
			<div>About Me</div>
		</button>
		<button class="nav-btn" v-bind:class="nav_btn_slide"  @click="changeComponent('app-contacts')">
			<div>Contact</div>
		</button>

		<button v-bind:class="'change-hand-btn ' + change_hand_btn" @click="changeUseHand">
			<img src="../assets/img/utility/arrow-left.svg" alt="">
		</button> 
		<div class=about-me-lg>
			<!-- <h1>text about me</h1> -->
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste maiores debitis, optio cupiditate molestias modi alias fugiat recusandae facilis numquam eum animi sit amet odit hic deserunt vel distinctio. Magni!
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste maiores debitis, optio cupiditate molestias modi alias fugiat recusandae facilis numquam eum animi sit amet odit hic deserunt vel distinctio. Magni!
			</p>
		</div>
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
$left-btn-pos-trans: 100%; 

	nav{
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items: start;
		margin: -0.5em 25px 0 25px;
		.nav-btn{
			width: $nav-btn-width;
			height: 2.5em;
			background-color: transparent;
			border: 2.5px solid $btn-def-border-color;
			border-radius: 5px;
			padding: 0;
			overflow: hidden;
			color: $default-text-color;
			font-weight: bold;
			text-transform: uppercase;
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
				border: 2.5px solid $btn-def-border-color;
				div{
					background-position:left bottom;
				}
			}
			div{
				transition: all 0.25s ease;
				background: linear-gradient(to left, rgba(0, 0, 0, 0) 45%, rgb(255, 255, 255) 45%);
				background-size: 200% 100%;
				background-position:right bottom;
				width: 100%;
				height: 100%;
				padding: 0;
				padding: 0.5em 0;
				margin: 0;
				line-height: 2em;
				mix-blend-mode: hard-light;
			}
		}
	}
	.about-me-lg{
		font-family: "Inria Sans Bold";
		font-weight: bold;
		text-align: justify;
		display: flex;
		flex-direction: column;
		width: 100%;
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 4;
		// background-color: rgba(255,255,255, 0.5);
		h1{
			margin: 1em auto 0.5em auto;
			text-align: center;
		}
		p{
			margin: 1em 3em 0.5em 2em;
			line-height: 1.2em;
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
		left: $left-btn-pos-trans - 50%;
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

	@media (max-width: 374px) {
		.about-me-lg{
			display: none;
		}
	}
	@media (min-width: 375px) {
		.nav-btn{
			font-size: 0.9em;
		}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 85%;
		}
		.about-me-lg{
			display: none;
		}
	}
	@media (min-width: 375px) and (min-height: 750px){
		nav{
			margin: -1.5em 25px 0 25px !important;
			.about-me-lg{
				display: none;
			}
			.nav-btn{
				font-size: 1em;
			}
		}
	}
	@media (min-width: 576px) { 
		.about-me-lg{
			display: none;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		nav{
    		margin: -3em 25px 0 25px;
			.about-me-lg{
				display: none;
			}
			.nav-btn{
				font-size: 1rem;
				width: $nav-btn-width - 10% !important;
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
		.nav-btn-slide-right{//initial stage; using in left hande mode
			left: $left-btn-pos-trans -  ($nav-btn-width - 10%);
		}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 88%;
		}
	}
	@media (min-width: 992px) and (min-height: 720px){ 
		nav{
    		margin: 2em 25px 0 25px !important;
			.about-me-lg{
				display: none;
			}
			.nav-btn{
				font-size: 1rem;
				width: $nav-btn-width - 15% !important;
				height: 3.5em !important;
			}
		}
		.nav-btn-slide-right{//initial stage; using in left hande mode
			left: $left-btn-pos-trans -  ($nav-btn-width - 15%);
		}
	}
	@media (min-width: 992px) and (min-height: 1024px){ 
		nav{
			margin: -6em 25px 0 25px !important;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				display: flex !important;
			}
			.nav-btn{
				// align-self: center;
				font-size: 1.3rem;
				width: $nav-btn-width - 0% !important;
				height: 4em !important;
			}
			.change-hand-btn{
				display: none; 
			}
		}
	}
	@media (min-width: 1300px) { 
		nav{
			margin: 50px 25px 0 25px !important;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				display: flex !important;
				height: 100%;
				font-size: 1.2em;
			}
			.nav-btn{
				font-size: 1.3rem !important;
				width: $nav-btn-width - 0% !important;
				height: 3.5em !important;
			}
			.change-hand-btn{
				display: none; 
			}
		}
	}
	// 2k resolutions 2048 x 1080
	@media (min-width: 2048px) { 
		nav{
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				display: flex !important;
				height: 100%;
			}
			.nav-btn{
				font-size: 1.5rem !important;
				width: $nav-btn-width - 25% !important;
				height: 3.5em !important;
			}
			.change-hand-btn{
				display: none; 
			}
		}
	}
	// 4k resolutions 3840 x 2160
	@media (min-width: 3840px) { 
		nav{
			grid-template-columns: 1fr 1fr;
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				display: flex !important;
				height: 100%;
			}
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