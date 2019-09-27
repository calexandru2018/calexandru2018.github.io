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
				<div class="projects-item fit-height">
					<div class="card-top">
						<img class="cover-img" src="../assets/img/projects/screen-prtf.png" alt="">
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
					</div>
					<transition name="slide" mode="out-in">
						<div class="card-middle" v-if="projects_expander.portfolio">
							<p v-html="$t('projects.portfolio.desc')"></p>
						</div>
					</transition>
					<transition name="slide" mode="out-in">
						<div class="card-bottom" v-if="projects_expander.portfolio">
							<h5>{{ $t("projects.skills_text") }}</h5>
							<ul class="tech-skills-list">
								<li v-for="(i) in portolio_skills" :key="i">
									<span class="list-item">{{i}}</span>
								</li>
							</ul>
						</div>
					</transition>
					<button class="btn-read-more" @click="expand('portfolio')" v-if="!projects_expander.portfolio">Read about</button>
					<button class="btn-read-more" @click="minimize('portfolio')" v-else>Close</button>
				</div>
				<div class="projects-item fit-height">
					<div class="card-top">
						<img class="cover-img" src="../assets/img/projects/screen-bom2.png" alt="">
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
					</div>
					<transition name="slide" mode="out-in">
						<div class="card-middle" v-if="projects_expander.bom2">
							<p v-html="$t('projects.bom2.desc')"></p>
						</div>
					</transition>
					<transition name="slide" mode="out-in">
						<div class="card-bottom" v-if="projects_expander.bom2">
							<h5>{{ $t("projects.skills_text") }}</h5>
							<ul class="tech-skills-list">
								<li v-for="(i) in bom2_skills" :key="i">
									<span class="list-item">{{i}}</span>
								</li>
							</ul>
						</div>
					</transition>
					<button class="btn-read-more" @click="expand('bom2')" v-if="!projects_expander.bom2">Read about</button>
					<button class="btn-read-more" @click="minimize('bom2')" v-else>Close</button>
				</div>
				<!-- lk Properties -->
				<div class="projects-item fit-height">
					<div class="card-top">
						<img class="cover-img" src="../assets/img/projects/screen-lk.png" alt="">
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
					</div>
					<transition name="slide" mode="out-in">
						<div class="card-middle" v-if="projects_expander.lkproperties">
							<p v-html="$t('projects.lkproperties.desc')"></p>
						</div>
					</transition>
					<transition name="slide" mode="out-in">
						<div class="card-bottom"  v-if="projects_expander.lkproperties">
							<h5>{{ $t("projects.skills_text") }}</h5>
							<ul class="tech-skills-list">
								<li v-for="(i) in lkproperties_skills" :key="i">
									<span class="list-item">{{i}}</span>
								</li>
							</ul>
						</div>
					</transition>
					<button class="btn-read-more" @click="expand('lkproperties')" v-if="!projects_expander.lkproperties">Read about</button>
					<button class="btn-read-more" @click="minimize('lkproperties')" v-else>Close</button>
				</div>
				<!-- project vartan-ik -->
				<div class="projects-item fit-height">
					<div class="card-top">
						<img class="cover-img" src="../assets/img/projects/vartan-b.png" alt="">
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
					</div>
					<transition name="slide" mode="out-in">
						<div class="card-middle" v-if="projects_expander.vartan">
							<p v-html="$t('projects.vartan.desc')"></p>
						</div>
					</transition>
					<transition name="slide" mode="out-in">
						<div class="card-bottom" v-if="projects_expander.vartan">
							<h5>{{ $t("projects.skills_text") }}</h5>
							<ul class="tech-skills-list">
								<li v-for="(i) in vartan_skills" :key="i">
									<span class="list-item">{{i}}</span>
								</li>
							</ul>
						</div>
					</transition>
					<button class="btn-read-more" @click="expand('vartan')" v-if="!projects_expander.vartan">Read about</button>
					<button class="btn-read-more" @click="minimize('vartan')" v-else>Close</button>
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
				portolio_skills: this.$i18n.t('projects.portfolio.skills'),
				bom2_skills: this.$i18n.t('projects.bom2.skills'),
				lkproperties_skills: this.$i18n.t('projects.lkproperties.skills'),
				vartan_skills: this.$i18n.t('projects.vartan.skills'),
				project_name_expand: '',
				project_expand: false, 
				projects_expander:{
					portfolio: false,
					bom2: false,
					lkproperties: false,
					vartan: false,
				}
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
					case 'portfolio':
						t.projects_expander.portfolio = hide;
						break;
					case 'bom2':
						t.projects_expander.bom2 = hide;
						break;
					case 'lkproperties':
						t.projects_expander.lkproperties = hide;
						break;
					case 'vartan':
						t.projects_expander.vartan = hide;
						break;
				}
				
				// this.project_name_expand = project
				// this.project_expand = true;
			},
			minimize(project){
				this.expand(project, true);
			}
		},
	}
</script>

<style lang="scss" scoped>
$item-shdw-color: rgb(0,0,0);
$secondary-text-color: rgb(47,57,77);

	.slide-enter-active,
	.slide-leave-active {
		overflow:hidden;
		transition: opacity 0.5s, max-height 0.5s;
		max-height: 230px;
	}
	.slide-enter,
	.slide-leave-to
	{
	opacity: 0;
	max-height: 0px;
	}

	.projects-grid{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 1em 0;
		.projects-item{
			width: 100%;
			display: table !important;
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
			.card-middle{
				margin: 2em 0 2em 0;
			}
			.card-bottom{
				align-self: center;
			}
			.btn-read-more{
				border: none;
				outline: none;
				padding: 1em 2em;
				border-radius: 5px;
				font-size: 0.8em;
				color: rgb(255, 255, 255);
				font-weight: bold;
				// background-color: rgb(135, 206, 250);
				background-image: linear-gradient(to bottom, rgb(135, 206, 250) 50%, rgb(255, 255, 255) 50%);
				background-size: 100% 203%;
				background-position:right top;
				margin: 2em 0em;
				cursor: pointer;
				transition: background-size ease 0.3s, background-position ease 0.3s;
				// width: (100vh / 4)+'px';
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
	@media (min-width: 576px) { 

	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		.projects-grid{
			.projects-item{
				margin: 1em;
				// .card-top{
				// 	height: 17em;
				// }
			}
		}
	}
	@media (min-width: 992px) and (min-height: 720px){ 
		.projects-item{
			width: 30% !important;
		}
	}
	@media (min-width: 1024px) { 
		.projects-grid{
			.projects-item{
				margin: 1em;
			}
		}
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
	
</style>
