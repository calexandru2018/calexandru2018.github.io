<template>
	<nav>
		<button class="nav-btn" :class="nav_btn_slide"  @click="changeComponent('app-projects'); check()">
			<div :class="(component_to_show == 'app-projects' & class_visible == true)  ? 'keep_highlight':''">
				<p>{{ $t("main_navigation_btns.projects") }}</p>
			</div>
		</button>
		<button class="nav-btn" :class="nav_btn_slide"  @click="changeComponent('app-about-me'); check()">
			<div :class="(component_to_show == 'app-about-me' & class_visible == true) ? 'keep_highlight':''">
				<p>{{ $t("main_navigation_btns.about_me") }}</p>
			</div>
		</button>
		<button class="nav-btn" :class="nav_btn_slide"  @click="changeComponent('app-pdfview'); check()">
			<div :class="(component_to_show ==  'app-pdfview' & class_visible == true)  ? 'keep_highlight':''">
				<p>{{ $t("main_navigation_btns.contact") }}</p>	
			</div>
		</button>

		<button :class="'change-hand-btn ' + change_hand_btn" @click="changeUseHand">
			<img src="../assets/img/utility/arrow-left.svg" alt="">
		</button> 
		<div class=about-me-lg>
			<div>
				<h2 v-html="$t('landing_page.short_desc')"></h2>
				<p v-html="$t('landing_page.long_desc')"></p>
				<p v-html="$t('landing_page.contact_desc')"></p>
			</div>
		</div>
	</nav>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props:['component_to_show','class_visible'],
		data() {
			return{
				left_hand_use: true,
				nav_btn_margin: '0 auto 0 0',
				nav_btn_slide: 'nav-btn-slide-left', //default
				change_hand_btn: 'change-hand-btn-slide-right', //default
			}
		},
		methods:{
			changeComponent(component){
				eventBus.$emit('component-to-show', component, true);
			},
			changeUseHand(){
				this.nav_btn_slide = 'nav-btn-slide-left';
				this.change_hand_btn = 'change-hand-btn-slide-right';

				if(this.left_hand_use){
					this.left_hand_use = false;
					this.nav_btn_slide = 'nav-btn-slide-right';
					this.change_hand_btn = 'change-hand-btn-slide-left';
				}else{
					this.left_hand_use = true;					
				}
				eventBus.$emit('left-hand-use', this.left_hand_use);
			},
			check(){
				// console.log(this.component_to_show)
			}
		},
		created(){
			// console.log(`Created_____Display left handed ${this.left_hand_use} and ${this.arrow_orientation}`);
		}
	}
</script>

<style lang="scss">
	.landing-email-link{
		text-decoration: none;
		color: rgb(192, 153, 103);
		transition: color ease 0.5s;
		&:hover{
			color: rgb(135, 206, 250);
		}
	}
</style>

<style lang="scss" scoped>
// $default-text-color: rgb(255,255,255);
$default-text-color: rgb(241,242,242);
$btn-def-border-color: rgb(255,255,255);
$btn-hover-text-color:rgba(100,100,100,0.9);
$chng-btn-size: 3.5em;
$nav-btn-width: 50%;
$nav-btn-transition-time: 0.15s;
$left-btn-pos-trans: 100%; 

	nav{
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		align-items: start;
		margin: 0em 25px 0 25px;
		.nav-btn{
			width: $nav-btn-width;
			height: 2.5em;
			background-color: transparent;
			border: none;
			padding: 0;
			overflow: hidden;
			color: $default-text-color;
			font-weight: bold;
			text-transform: uppercase;
			cursor: pointer;
			position: relative;
			&:first-child{
				transition: 
					color $nav-btn-transition-time ease-in-out, 
					background-color $nav-btn-transition-time ease-in-out, 
					border $nav-btn-transition-time ease-in-out, 
					left ease-in-out 0.7s;
			}
			&:nth-child(2){
				transition: 
					color $nav-btn-transition-time ease-in-out, 
					background-color $nav-btn-transition-time ease-in-out, 
					border $nav-btn-transition-time ease-in-out, 
					left ease-in-out 0.4s;
			}
			&:nth-child(3){
				transition: 
					color $nav-btn-transition-time ease-in-out, 
					background-color $nav-btn-transition-time ease-in-out, 
					border $nav-btn-transition-time ease-in-out, 
					left ease-in-out 0.2s;
			}
			&:hover{
				// color: $btn-hover-text-color;
				// border: 1.5px solid $btn-def-border-color;
				border: none;
				div{
					// background-position:left bottom;
					background-position:50%;
					margin: 0;
				}
			}
			.keep_highlight{
				background-position:50% !important;
			}
			div{
				transition: all 0.4s ease;
				background: linear-gradient(to right, rgb(241, 242, 242) 49%, rgba(0, 0, 0, 0) 49%);
				background-size: 205% 110%;
				background-position: left;
				width: 100%;
				height: 100%;
				margin: 0;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				mix-blend-mode: screen;
				color: rgb(241,242,242);
				p{
					mix-blend-mode: difference;
					color: rgb(241,242,242);
					padding: 0;
					margin: 0;
					color: $default-text-color;
				}
			}
		}
	}
	.about-me-lg{
		font-family: "Inria Sans Bold";
		font-weight: bold;
		background-color: transparent;
		display: none;
		flex-direction: column;
		width: 100%;
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 4;
		&>div{
			padding: 1em 5em;
			border-radius: 2px;
			background-color: rgb(241,242,242);
			color: rgb(112, 128, 144);
		}
		h1,h2,h3,h4,h5,h6{
			text-align: left !important;
		}
		p{
			line-height: 1.2em;
			text-align: justify;
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
		mix-blend-mode: screen;
		img{
			width: $chng-btn-size - 1;
			height: $chng-btn-size - 1;
			vertical-align: middle;
			vertical-align: middle;
			outline: none !important;
			mix-blend-mode: difference;
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

	}
	@media (min-width: 375px) {
		.nav-btn{
			font-size: 0.9em;
		}
		.change-hand-btn-slide-right{//initial stage; using in left hande mode
			left: 85%;
		}

	}
	@media (min-width: 375px) and (min-height: 750px){
		nav{
			.nav-btn{
				font-size: 1em;
			}
		}
	}
	@media (min-width: 414px) { 
		.nav-btn{
			font-size: 1rem;
			height: 3em !important;
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		nav{
			.nav-btn{
				font-size: 1.5rem;
				width: $nav-btn-width - 5% !important;
				height: 3em !important;
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
			grid-template-columns: 1fr 2fr;
			grid-column-gap: 2em;
    		margin: 0em 25px 0 25px !important;
			.about-me-lg{
				display: flex !important;
				justify-self: end;
				font-size: 1em;
				div{
					padding: 1em 2em;
				}
			}
			.nav-btn{
				font-size: 1rem;
				width: $nav-btn-width + 40% !important;
				height: 3.5em !important;
			}
		}
		.change-hand-btn{
			display: none !important; 
		}
		.nav-btn-slide-right{//initial stage; using in left hande mode
			left: $left-btn-pos-trans -  ($nav-btn-width - 15%);
		}
	}
	//1440 x 821
	@media (min-width: 992px) and (min-height: 1024px){ 
		nav{
			margin: -6em 25px 0 25px !important;
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				width: 100% !important;
			}
			.nav-btn{
				// align-self: center;
				font-size: 1.3rem;
				width: $nav-btn-width + 30% !important;
				height: 4em !important;
			}
		}
	}
	@media (min-width: 1300px) { 
		nav{
			margin: 0 25px 0 25px !important;
			grid-template-columns: 1fr 2fr;
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				height: 100%;
				width: 100% !important;
				font-size: 1.2em;
				div{
					padding: 1em 5em;
				}
			}
			.nav-btn{
				font-size: 1.3rem !important;
				width: $nav-btn-width + 15% !important;
				height: 3.5em !important;
			}
		}
	}
	// 2k resolutions 2048 x 1080
	@media (min-width: 2048px) { 
		nav{
			grid-template-rows: repeat(4, 1fr);
			.nav-btn{
				font-size: 1.5rem !important;
				width: $nav-btn-width + 25% !important;
				height: 3.5em !important;
			}
			.about-me-lg{
				width: 100% !important;
			}
		}
	}
	// 4k resolutions 3840 x 2160
	@media (min-width: 3840px) { 
		nav{
			grid-template-rows: repeat(4, 1fr);
			.about-me-lg{
				width: 100% !important;
				font-size: 2.4em !important;
			}
			.nav-btn{
				font-size: 2.2rem !important;
				width: $nav-btn-width + 20% !important;
				height: 5em !important;
			}
		}
	}
</style>