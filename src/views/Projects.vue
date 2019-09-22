<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container"  v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">Projects</h1>
			<div class="projects-grid">
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/screen-prtf.svg" alt="">
					<div class="item-header">
						<h3>Web Portfolio</h3>
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
					<p>
						The following project, is my web portfolio. Since I had finished a course on udemy about VueJS, I decided that it was about time that I put that knowledge to good use.
						This is the time first that I use VueJs on a large scale and it is also the first time that I really use a css pre-compiler (I used in a previous project, but only to minify, uglify and create chunks).
						I learned how to use SASS/SCSS (which I always wanted to do), and really got into it quickly.
						I used the Vue CLI 3 tool to quickly start working with a project, so that I can avoid the overhead of setting up a project from scratch,
						it is really much more effective to start with a boilerplate code.
						<u>This project was developed during during 2019, no business logic was implemented, apart from the PHP Mailer function.</u>
					</p>
					<h5>Worked with the following languages and tools:</h5>
					<ul class="tech-skills-list">
						<li>
							<span class="list-item">PHP Mail</span>
						</li>
						<li>
							<span class="list-item">VueJS</span>
						</li>
						<li>
							<span class="list-item">SCSS</span>
						</li>
						<li>
							<span class="list-item">Webpack</span>
						</li>
						<li>
							<span class="list-item">Git</span>
						</li>
					</ul>
				</div>
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/screen-bom2.svg" alt="">
					<div class="item-header">
						<h3>Bom&sup2;</h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/img/utility/eye-closed.svg" alt="">
							<span></span>
							<a href="https://bomaoquadrado.pt/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p>
						This was another project that I developed for a customer in Portugal. Their main business is a food-truck,
						which they travel throughout Portugal selling their waffles and creps. 
						They wanted a webpage that could somehow make their on-line presence stronger. 
						The main goals was to somehow let customer know about the previous, actual and future locations, so that they could easily find them.
						I came up with the idea of a calendar, which they could insert the from-to dates and also the exact coordenates (longitute and latitude),
						enabling this way the end-user to click on the event and get a direct route suggestion to their exact location (Google Maps API). 
						I also managed to work a bit with the Instagram API, though it proved to be difficult since the token expire often. 
						To resolve this, I create a special button/function that allows the customer to generate a new token whenever the old one expires. 
						Most of the code is done in ES6 (arrow functions and fetch API), I used Babel in conjuction with Webpack to transpile code to older js.
						<u>This project was developed during late 2018 and begining of 2019, has both front and back-end. Front-end was developed only as a mobile version.</u>
					</p>
					<h5>Worked with the following languages and tools:</h5>
					<ul class="tech-skills-list">
						<li>
							<span class="list-item">PHP</span>
						</li>
						<li>
							<span class="list-item">PHP Mail</span>
						</li>
						<li>
							<span class="list-item">JS5/6</span>
						</li>
						<li>
							<span class="list-item">HTML/CSS</span>
						</li>
						<li>
							<span class="list-item">Webpack</span>
						</li>
						<li>
							<span class="list-item">Instagram API</span>
						</li>
						<li>
							<span class="list-item">Google Maps API</span>
						</li>
						<li>
							<span class="list-item">Git</span>
						</li>
					</ul>
				</div>
				<!-- lk Properties -->
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/screen-lk.svg" alt="">
					<div class="item-header">
						<h3>Lk Properties</h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/img/utility/eye-closed.svg" alt="">
							<span></span>
							<a href="https://lk-properties.pt/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p>
						This was a projec that I developped for a customer, that wanted to be able to post real-estate for buy, rent and sale.
						I had to conduct multiple interviews with the customer so that I could gather all the necessary requirments for the project.
						Primarly the customer wanted also a back-end so that it could insert all information independentrly, for this to be accomplished,
						i designed the database in such way that it could accomodate multiple languages. The customer also expressed the need of a "create account" 
						functionality for the end-users, I advised that that we could perhaprs prioritize other areas instead, since the end-users could easily contact
						the customer. The customer is located in Portugal. <u>This project was developed in 2018 during a couple of months, has both front and back-end which is rather complex.</u>
					</p>
					<h5>Worked with the following languages and tools:</h5>
					<ul class="tech-skills-list">
						<li>
							<span class="list-item">PHP & PHP Mail</span>
						</li>
						<li>
							<span class="list-item">JS/jQuery</span>
						</li>
						<li>
							<span class="list-item">HTML/CSS</span>
						</li>
						<li>
							<span class="list-item">Bootstrap</span>
						</li>
						<li>
							<span class="list-item">Git</span>
						</li>
					</ul>
				</div>
				<!-- project vartan-ik -->
				<div class="projects-item">
					<img class="cover-img" src="../assets/img/projects/vartan-b.svg" alt="">
					<div class="item-header">
						<h3>Värtan IK - B</h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/img/utility/eye.svg" alt="">
							<span></span>
							<a href="http://vartan-b.dx.am/" target="_blank">
								<img src="../assets/img/utility/domain.svg" alt="">
							</a>
						</div>
					</div>
					<p>
						This was a hobby project that I developed, during the time I played football for a  football team. 
						Not everybody in our team had a facebook account to join a facebook group and to let the rest of the team team if they were attending the training session or not.
						I came up with the idea of making a simple webpage so that every member of our team could have a way to mark their attendance, 
						this in turn helped us (trainers) to 
						better plan our training sessions.
						<u>This project was developed in 2014, has both front and back-end.</u>
					</p>
					<h5>Worked with the following languages and tools:</h5>
					<ul class="tech-skills-list">
						<li>
							<span class="list-item">PHP</span>
						</li>
						<li>
							<span class="list-item">JS</span>
						</li>
						<li>
							<span class="list-item">HTML/CSS</span>
						</li>
						<li>
							<span class="list-item">jQuery</span>
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
