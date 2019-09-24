<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container"  v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">{{ $t("projects.menu_title") }}</h1>
			<div class="projects-grid">
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/screen-prtf.svg" alt="">
					<div class="item-header">
						<h3 v-html="$t('projects.portfolio.title')"></h3>
						<div class="item-links">
							<span></span>
							<a href="https://github.com/calexandru2018/portfolio" target="_blank">
								<img src="../assets/img/utility/eye.svg" alt="">
							</a>
							<span></span>
							<a href="https://calexandru.com/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p v-html="$t('projects.portfolio.desc')"></p>
					<h5>{{ $t("projects.skills_text") }}</h5>
					<ul class="tech-skills-list">
						<li v-for="(i) in portolio_skills" :key="i">
							<span class="list-item">{{i}}</span>
						</li>
					</ul>
				</div>
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/screen-bom2.svg" alt="">
					<div class="item-header">
						<h3 v-html="$t('projects.bom2.title')"></h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/img/utility/eye-closed.svg" alt="">
							<span></span>
							<a href="https://bomaoquadrado.pt/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p v-html="$t('projects.bom2.desc')"></p>
					<h5>{{ $t("projects.skills_text") }}</h5>
					<ul class="tech-skills-list">
						<li v-for="(i) in bom2_skills" :key="i">
							<span class="list-item">{{i}}</span>
						</li>
					</ul>
				</div>
				<!-- lk Properties -->
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/screen-lk.svg" alt="">
					<div class="item-header">
						<h3 v-html="$t('projects.lkproperties.title')"></h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/img/utility/eye-closed.svg" alt="">
							<span></span>
							<a href="https://lk-properties.pt/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p v-html="$t('projects.lkproperties.desc')"></p>
					<h5>{{ $t("projects.skills_text") }}</h5>
					<ul class="tech-skills-list">
						<li v-for="(i) in lkproperties_skills" :key="i">
							<span class="list-item">{{i}}</span>
						</li>
					</ul>
				</div>
				<!-- project vartan-ik -->
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/vartan-b.svg" alt="">
					<div class="item-header">
						<h3 v-html="$t('projects.vartan.title')"></h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/img/utility/eye.svg" alt="">
							<span></span>
							<a href="http://vartan-b.dx.am/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p v-html="$t('projects.vartan.desc')"></p>
					<h5>{{ $t("projects.skills_text") }}</h5>
					<ul class="tech-skills-list">
						<li v-for="(i) in vartan_skills" :key="i">
							<span class="list-item">{{i}}</span>
						</li>
					</ul>
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
		},
		data(){
			return{
				portolio_skills: this.$i18n.t('projects.portfolio.skills'),
				bom2_skills: this.$i18n.t('projects.bom2.skills'),
				lkproperties_skills: this.$i18n.t('projects.lkproperties.skills'),
				vartan_skills: this.$i18n.t('projects.vartan.skills'),
			}
		},
		computed:{
			
		}
	}
</script>

<style lang="scss" scoped>
$item-shdw-color: rgb(0,0,0);
$secondary-text-color: rgb(47,57,77);


	.projects-grid{
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 2em;
		padding: 1em 0;
		.projects-item{
			display: grid;
			grid-template-rows: repeat(5, auto);
			padding: 1em 1.5em;
			border-radius: 5px;
			box-shadow: 1px 1px 10px -6px $item-shdw-color;
			.cover-img{
				width: 100%;
			}
			.item-header{
				display: grid;
				grid-template-columns: 1fr 1fr;
				align-items: center;
				margin: 1em 0;
				box-shadow: 0px 4px 3px -3px $secondary-text-color;
			}
			.item-header > *:first-child{
				justify-items: start;
				text-align: left;
			}
			.item-header > *:last-child{
				justify-items: center;
			}
			.item-links{
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				justify-items: center;
				align-items: center;
				height: 100%;
				img{
					width: auto;
					height: 1.8em;
					vertical-align: middle;
					cursor: pointer;
				}
			}
			h3, h4, h5{
				margin: 0.5em 0;
			}
			h4, h5{
				text-align: left;
			}
			p{
				line-height: 0.5cm;
				font-size: 0.8em;
				margin: 0.5em 0;
				text-align: justify;
			}
			a{
				cursor: pointer;
			}
			.tech-skills-list{
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				text-align: left;
				font-size: 0.8em;
				grid-row-gap: 0.7em;
				margin: 0.5em 0;
				padding-left: 1em;
				.list-item{
					position: relative;
					left: -5px;
				}
			}
		}
	}
	@media (min-width: 1024px) { 
		.projects-grid{
			// display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 1em;
			.projects-item{
				margin: 1em;
			}
		}
	}
	@media (min-width: 1300px) { 
		.projects-grid{
			display: grid;
			grid-template-columns: 1fr 1fr;
			.projects-item{
				margin: 1.5em;
			}
		}
	}
	// 2k resolutions 2048 x 1080
	@media (min-width: 2048px) { 
		.projects-grid{
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			.projects-item{
				margin: 1.5em;
			}
		}
	}
	// 4k resolutions 3840 x 2160
	@media (min-width: 3840px) { 
		.projects-grid{
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			.projects-item{
				margin: 1.5em;
			}
		}
	}
	
</style>
