<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">{{ $t("about_me.menu_title") }}	</h1>
			<div class="projects-content-container">
				<div>
					<div class="about-me-lg">
						<p>
							{{ $t("about_me.p1") }}	
						</p>
					</div>
					<p>
						{{ $t("about_me.p2") }}	
					</p>
					<p>
						{{ $t("about_me.p3") }}	
					</p>
				</div>
				<div class="skill-list">
					<div>
						<p>
							{{ $t("about_me.p4") }}	
						</p>
						<div class="prog-langs-icons">
							<img src="../assets/img/lang/html-5.svg" alt="">
							<img src="../assets/img/lang/css-3.svg" alt="">
							<img src="../assets/img/lang/js.svg" alt="">
							<img src="../assets/img/lang/php.svg" alt="">
							<img src="../assets/img/lang/python.svg" alt="">
						</div>
					</div>
					<div>
						<p>
							{{ $t("about_me.p5") }}	
						</p>
						<div class="prog-langs-icons">
							<img src="../assets/img/tools/bootstrap.svg" alt="">
							<img src="../assets/img/tools/jquery.svg" alt="">
							<img src="../assets/img/tools/node.svg" alt="">
							<img src="../assets/img/tools/npm.svg" alt="">
							<img src="../assets/img/tools/webpack.svg" alt="">
							<img src="../assets/img/tools/sass.svg" alt="">
							<img src="../assets/img/tools/vue.png" alt="">
							<img src="../assets/img/tools/git.svg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: ['hide_comp_btn_shadow','card_base_layout', 'left_hand_use'],
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.projects-content-container{
		.skill-list{
			p{
				margin-top: 1.2em;
				margin-bottom: 0.2em;
			}
			.prog-langs-icons {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-evenly;
				img{
					width: 2.5em;
					margin: 0.2em 0.2em;
				}
			}
		}
		p{
			line-height: 0.6cm;
			text-align: justify;
			font-size: 1.1em;
		}
	}
	//1440 x 821
	@media (min-width: 992px) and (min-height: 1024px){ 
		.about-me-lg{
			display: none;
		}
	}
	@media (min-width: 1920px){
		.skill-list{
			display: grid;
			grid-template-columns: 1fr 1fr;
			.prog-langs-icons{
				justify-content: flex-start !important;
			}
		}
	}
	// @media (min-width: 1300px) { 
	// 	.about-me-lg{
	// 		display: none;
	// 	}
	// }
	// // 2k resolutions 2048 x 1080
	// @media (min-width: 2048px) { 
	// 	// .about-me-lg{
	// 	// 	display: none;
	// 	// }
	// }
	// // 4k resolutions 3840 x 2160
	// @media (min-width: 3840px) { 
	// 	.about-me-lg{
	// 		display: none;
	// 	}
	// }
</style>