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
				<div class="projects-item" v-for="project in portfolioProjects" :key="project">
					<div class="card-top">
						<img class="cover-img" :src="require('../assets/img/projects/' + project.imgUrl)" alt="">
						<div class="item-header">
							<h3 v-html="project.title"></h3>
							<div class="item-links">
								<span></span>
								<span></span>
								<a style="display: inline-block; position: relative; z-index: 1" :href="project.link.github" target="_blank">
									<span style="display: inline-block" :class="project.link.github ? 'blink-eye-animation' : 'negation-eye-animation'">
										<object style="position: relative; z-index: -1" class="eye" type="image/svg+xml" :data="(project.link.github ? require('../assets/img/utility/' + utility.eyeOpenImgUrl) : require('../assets/img/utility/' + utility.eyeClosedImgUrl))"></object>
									</span>
								</a>
								<a :href="project.link.href ? project.link.href : '#' " target="_blank">
									<img class="external-link" :src="(project.link.href ? require('../assets/img/utility/' + utility.domainImgUrl) : require('../assets/img/utility/' + utility.domainlessImgUrl))" alt="">
								</a>
							</div>
						</div>
					</div>
					<transition name="slide" mode="out-in">
						<div class="card-middle" v-if="project.expanded">
							<p v-html="project.projDesc"></p>
						</div>
					</transition>
					<transition name="slide" mode="out-in">
						<div class="card-bottom" v-if="project.expanded">
							<h5>{{ project.projSkillsTitle }}</h5>
							<ul class="tech-skills-list">
								<li v-for="(i) in project.skills" :key="i">
									<span class="list-item">{{i}}</span>
								</li>
							</ul>
						</div>
					</transition>
					<button class="btn-read-more" @click="expand(project.projName)" v-if="!project.expanded" v-html="$t('projects.btn_show') + ' ' + project.title"></button>
					<button class="btn-read-more" @click="minimize(project.projName)" v-else>{{ $t("projects.btn_close") }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: ['hide_comp_btn_shadow','card_base_layout', 'left_hand_use'],
		data(){
			return{
				utility:{
					eyeOpenImgUrl: 'eye.svg',
					eyeClosedImgUrl: 'eye-closed.svg',
					domainImgUrl: 'domain.svg',
					domainlessImgUrl: 'no-domain.svg',
				},
				portolio_skills: this.$i18n.t('projects.portfolio.skills'),
				portfolioProjects: {
					pvpn: {
						projName: 'protonvpn_linux_gui',
						imgUrl: 'screen-pvpn.png',
						title: this.$i18n.t('projects.protonvpn_linux_gui.title'),
						link:{
							github: 'https://github.com/calexandru2018/protonvpn-linux-gui',
							href: false
						},
						projDesc: this.$i18n.t('projects.protonvpn_linux_gui.desc'),
						projSkillsTitle: this.$i18n.t('projects.skills_text'),
						skills: this.$i18n.t('projects.protonvpn_linux_gui.skills'),
						expanded: false,
					},
					portfolio: {
						projName: 'portfolio',
						imgUrl: 'screen-prtf.png',
						title: this.$i18n.t('projects.portfolio.title'),
						link:{
							github: 'https://github.com/calexandru2018/portfolio',
							href: 'https://calexandru.com/'
						},
						projDesc: this.$i18n.t('projects.portfolio.desc'),
						projSkillsTitle: this.$i18n.t('projects.skills_text'),
						skills: this.$i18n.t('projects.portfolio.skills'),
						expanded: false,
					},
					bom2: {
						projName: 'bom2',
						imgUrl: 'screen-bom2.png',
						title: this.$i18n.t('projects.bom2.title'),
						link:{
							github: false,
							href: 'https://bomaoquadrado.pt/'
						},
						projDesc: this.$i18n.t('projects.bom2.desc'),
						projSkillsTitle: this.$i18n.t('projects.skills_text'),
						skills: this.$i18n.t('projects.bom2.skills'),
						expanded: false,
					},
					lkproperties: {
						projName: 'lkproperties',
						imgUrl: 'screen-lk.png',
						title: this.$i18n.t('projects.lkproperties.title'),
						link:{
							github: false,
							href: 'https://lk-properties.pt/'
						},
						projDesc: this.$i18n.t('projects.lkproperties.desc'),
						projSkillsTitle: this.$i18n.t('projects.skills_text'),
						skills: this.$i18n.t('projects.lkproperties.skills'),
						expanded: false,
					},
					projekt: {
						projName: 'projekt',
						imgUrl: 'screen-projekt.png',
						title: this.$i18n.t('projects.projekt.title'),
						link:{
							github: 'https://github.com/calexandru2018/projekt/',
							href: false
						},
						projDesc: this.$i18n.t('projects.projekt.desc'),
						projSkillsTitle: this.$i18n.t('projects.skills_text'),
						skills: this.$i18n.t('projects.projekt.skills'),
						expanded: false,
					},
					vartan: {
						projName: 'vartan',
						imgUrl: 'screen-vartanb.png',
						title: this.$i18n.t('projects.vartan.title'),
						link:{
							github: 'https://github.com/calexandru2018/football-project',
							href: 'http://vartan-b.dx.am/'
						},
						projDesc: this.$i18n.t('projects.vartan.desc'),
						projSkillsTitle: this.$i18n.t('projects.skills_text'),
						skills: this.$i18n.t('projects.vartan.skills'),
						expanded: false,
					},
				},
			}
		},
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			},
			expand(project, hide_project = false){
				const t  = this;
				let hide = true;

				if(hide_project)
					hide = false;

				switch(project){
					case 'protonvpn_linux_gui':
						t.portfolioProjects.pvpn.expanded = hide;
						break;
					case 'portfolio':
						t.portfolioProjects.portfolio.expanded = hide;
						break;
					case 'bom2':
						t.portfolioProjects.bom2.expanded = hide;
						break;
					case 'lkproperties':
						t.portfolioProjects.lkproperties.expanded = hide;
						break;
					case 'projekt':
						t.portfolioProjects.projekt.expanded = hide;
						break;
					case 'vartan':
						t.portfolioProjects.vartan.expanded = hide;
						break;
				}
			},
			minimize(project){
				this.expand(project, true);
			},
		},
	}
</script>

<style lang="scss" scoped>
$item-shdw-color: rgb(0,0,0);
$secondary-text-color: rgb(47,57,77);

	.slide-enter-active,
	.slide-leave-active {
		overflow:hidden;
		transition: opacity 0.7s, max-height 0.6s;
		max-height: 450px;
	}
	.slide-enter,
	.slide-leave-to
	{
		opacity: 0;
		max-height: 0;
	}
	.projects-grid{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 1em 0;
		.projects-item{
			pointer-events: all;
			width: 85%;
			display: table !important;
			padding: 1em 1.5em;
			margin-bottom: 1em;
			border-radius: 5px;
			background-color: rgb(255,255,255);
			.cover-img{
				width: 100%;
			}
			.item-header{
				display: grid;
				grid-template-columns: 1fr 1fr;
				align-items: center;
				margin: 1em 0;
				border-radius: 0 !important;
				box-shadow: 0px 4px 2px -4px $secondary-text-color;
			}
			.item-header > *:first-child{
				justify-items: start;
				text-align: left;
			}
			.item-header > *:last-child{
				justify-items: center;
			}
			.item-links{
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				height: 100%;
				img, object{
					width: auto;
					height: 1.8em;
					vertical-align: middle;
					cursor: pointer;
				}
			}
			.card-middle{
				margin: 2em 0 2em 0;
				p{
					color: gray !important;
				}
			}
			.card-bottom{
				align-self: center;
				ul{
					color: gray !important;
				}
			}
			.btn-read-more{
				border: none;
				outline: none;
				padding: 1em 2em;
				border-radius: 5px;
				font-size: 0.8em;
				color: rgb(255, 255, 255);
				font-weight: bold;
				background-image: linear-gradient(to bottom, rgb(135, 206, 250) 50%, rgb(255, 255, 255) 50%);
				background-size: 100% 202%;
				background-position:right top;
				margin: 2em 0em;
				cursor: pointer;
				transition: background-size ease 0.3s, background-position ease 0.3s;
				&:hover{
					background-position: left bottom;
					color: rgb(135, 206, 250);
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
	.blink-eye-animation:hover{
		animation: blink-animation .6s ease forwards;
	}
	.negation-eye-animation:hover{
		animation: no-access 0.7s ease forwards;
	}

	@media (min-width: 576px) { 

	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		.card-header{
			font-size: 4em !important;
		}
		.projects-grid{
			.projects-item{
				width: 35% !important;
				margin: 1em !important;
    			font-size: 1.2em !important;
				background-color: transparent !important;
				&:hover{
					transition: filter  ease 0.3s, transform  ease 0.3s, background-color  ease 0.3s;
					filter: drop-shadow(0px 0px 3px gray);
					transform: scale(1.03);
					background-color: rgb(255,255,255) !important;
				}
			}
		}
	}
	@media (min-width: 992px) and (min-height: 720px){ 
		.projects-item{
			width: 30% !important;
		}
	}
	@media (min-width: 1024px) { 

	}
	@media (min-width: 1300px) { 
		.projects-grid{
			.projects-item{
				margin: 1.5em;
    			font-size: 1.15em;
				p{
					line-height: 1.3em;
				}
			}
		}
	}
	// 2k resolutions 2048 x 1080
	@media (min-width: 2048px) { 
		.projects-grid{
			.projects-item{
				width: 20% !important;
				margin: 1.5em;
				font-size: 1.30em;
				p{
					line-height: 1.4em !important;
				}
			}
		}
	}
	// 4k resolutions 3840 x 2160
	@media (min-width: 3840px) { 
		.projects-grid{
			.projects-item{
				margin: 1.5em;
				font-size: 1.6em;
				p{
					line-height: 1.4em !important;
				}
			}
		}
	}
	@keyframes blink-animation{
		from{
			transform: rotateX(0deg);
		}
		50%{
			transform: rotateX(80deg);
			
		}
		to{
			transform: rotateX(0deg);
		}
	}
	@keyframes no-access{
		0%{
			transform: translateX(0) skewY(0deg) rotateY(0deg);
		}
		33%{
			transform: translateX(10px) skewY(-10deg) rotateY(80deg);
		}
		66%{
			transform: translateX(-10px) skewY(10deg) rotateY(-80deg);
		}
		100%{
			transform: translateX(0) skewY(0deg) rotateY(0deg);
		}
	}
</style>
