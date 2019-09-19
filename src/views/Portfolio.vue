<template>
	<div class="component card-base-layout" v-bind:style="card_base_layout.grid_width">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent"><i class="right"></i></button>
		</div>
		<div class="portfolio-container"  v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1 class="card-header">Portfolio</h1>
			<div class="portfolio-grid">
				<div class="portfolio-item">
					<img class="cover-img" src="../assets/img/projects/screen-prtf.svg" alt="">
					<div class="item-header">
						<h3>Portfolio</h3>
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint dolorum qui ut repellendus laudantium sunt debitis. Beatae suscipit tenetur cupiditate rem dolorum molestiae labore doloremque, ab nam, dolores commodi!
					</p>
					<h5>Worked with the following technologies:</h5>
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
							<span class="list-item">Bootstrap</span>
						</li>
					</ul>
				</div>
				<div class="portfolio-item">
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint dolorum qui ut repellendus laudantium sunt debitis. Beatae suscipit tenetur cupiditate rem dolorum molestiae labore doloremque, ab nam, dolores commodi!
					</p>
					<h5>Worked with the following technologies:</h5>
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
							<span class="list-item">Bootstrap</span>
						</li>
					</ul>
				</div>
				<div class="portfolio-item">
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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet illum veritatis excepturi? Sapiente vero, inventore maiores explicabo fugiat ut qui ipsam magni dignissimos at nam dolor voluptates quo nesciunt facilis?
					</p>
					<h5>Worked with the following technologies:</h5>
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
							<span class="list-item">Webpack</span>
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
		props: ['hide_comp_btn_shadow','card_base_layout'],
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

	.portfolio-grid{
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 2em;
		padding: 4em 0;
		.portfolio-item{
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
	
</style>
