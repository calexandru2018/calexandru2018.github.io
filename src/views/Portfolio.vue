<template>
	<div class="component card-base-layout">
		<div>
			<button class="hide-component-button" @click="hideComponent"><i class="right"></i></button>
		</div>
		<div class="portfolio-container">
			<h1>Portfolio</h1>
			<div class="portfolio-grid">
				<div class="portfolio-item">
					<a href="https://lk-properties.pt">
						<img src="../assets/screen-lk.png" alt="">
					</a>
					<h4>Lk Properties</h4>
					<p>This is a project developped by me</p>
				</div>
				<div class="portfolio-item">
					<a href="https://bomaoquadrado.pt">
						<img src="../assets/screen-bom2.png" alt="">
					</a>
					<h4>Bom&sup2;</h4>
					<p>This is a project developped by me</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.portfolio-container{
		overflow-y: auto;
	}
	.portfolio-grid{
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap: 2em;
		margin: 1em 0;
		.portfolio-item{
			h4{
				margin: 0.5em 0;
			}
			p{
				font-size: 0.8em;
				margin: 0.2em 0;
			}
			img{
				width: 15em;

			}
		}
	}
</style>
