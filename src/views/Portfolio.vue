<template>
	<div class="component card-base-layout">
		<div>
			<button class="hide-component-button" @click="hideComponent"><i class="right"></i></button>
		</div>
		<div class="portfolio-container">
			<h1>Portfolio</h1>
			<div class="portfolio-grid">
				<div class="portfolio-item">
					<img src="../assets/screen-lk.png" alt="">
					<div class="item-header">
						<h3>Lk Properties</h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/eye-closed.svg" alt="">
							<span></span>
							<a class="clickable" href="https://lk-properties.pt/" target="_blank">
								<img src="../assets/link-external.svg" alt="">
							</a>
						</div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint dolorum qui ut repellendus laudantium sunt debitis. Beatae suscipit tenetur cupiditate rem dolorum molestiae labore doloremque, ab nam, dolores commodi!
					</p>
				</div>
				<div class="portfolio-item">
					<img src="../assets/screen-bom2.png" alt="">
					<div class="item-header">
						<h3>Bom&sup2;</h3>
						<div class="item-links">
							<span></span>
							<img src="../assets/eye-closed.svg" alt="">
							<span></span>
							<a class="clickable" href="https://bomaoquadrado.pt/" target="_blank">
								<img src="../assets/link-external.svg" alt="">
							</a>
						</div>
					</div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet illum veritatis excepturi? Sapiente vero, inventore maiores explicabo fugiat ut qui ipsam magni dignissimos at nam dolor voluptates quo nesciunt facilis?
					</p>
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
			display:grid;
			grid-template-rows: repeat(3, fit-content);
			padding: 0 1.5em;
			.item-header{
				display: grid;
				grid-template-columns: 1fr 1fr;
				align-items: center;
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
				img{
					width: auto;
					height: 1.2em;
					vertical-align: middle;
				}
			}
			h3{
				margin: 0.5em 0;
				
			}
			p{
				font-size: 0.8em;
				margin: 0.5em 0;
				text-align: justify;
			}
			img{
				width: 100%;

			}
		}
		.portfolio-item > div{
			box-shadow: 0px 4px 3px -3px #2F394D;
		}
	}
	.clickable{
		cursor: pointer;
	}
</style>
