<template>
	<div class="top-nav">
		<h2 class="regular">Alexandru Cheltuitor</h2>
		<p>Web Portfolio</p>
		<div class="lang-select">
			EN <span>&#124;</span> SV <span>&#124;</span> PT
		</div>
	</div>
</template>

<style lang="scss" scoped>
$default-text-color: rgb(255,255,255);
$h2-shdw: rgb(255,255,255);

	.top-nav{
		color: $default-text-color;
		max-width: 100%;
		margin: 10px 25px 0 25px;
		text-align: left;
		h2{
			font-size: 1.79em;
			margin: 1em 0 0 0;
			box-shadow: 0px 5px 0px -1px $h2-shdw;
		}
		p{
			font-family: "Inria Sans Bold";
			margin: 0.7em 0;
			font-size: 1.2em;
		}
		.lang-select{
			font-size: 1em;
		}
	}
</style>