<template>
	<div class="top-nav">
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/calexandru2018/" target="_blank">
					<img src="../assets/LI-In-Bug.png" alt="" srcset="">
				</a>
			</li>
			<li></li>
			<li>
				<a href="https://github.com/calexandru2018" target="_blank">
					<img src="../assets/GitHub-Mark-Light-64px.png" alt="" srcset="">
				</a>
			</li>
			<li></li>
			<li>
				<a href="https://stackoverflow.com/users/2547630/calexandru?tab=profile" target="_blank">
					<img class="size-L" src="../assets/so-icon.png" alt="" srcset="">
				</a>
			</li>
			<li></li>
			<li>
				<a href="https://twitter.com/calexandru2018" target="_blank">
					<img class="size-L" src="../assets/Twitter_Logo_Blue.svg" alt="" srcset="">
				</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	.top-nav{
		padding: 20px 10px;
		color: white;
		max-width: 80%;
		margin: 0 auto;
	}
	ul{
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		align-items: center;
	}
	ul li{
		display: inline;
		max-height: 35px
	}
	img{
		width: 25px;
	}
	img:hover{
		box-shadow: 10px 10px 10px 10px white;
	}
	img.size-L{
		width: 35px !important;
	}
</style>