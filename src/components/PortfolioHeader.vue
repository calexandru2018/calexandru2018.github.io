<template>
	<div class="top-nav">
		<h2 class="regular">Alexandru Cheltuitor</h2>
		<p>Web Portfolio</p>
		<div class="under-menu">
			<div class="lang-select">
				<div>
					EN
				</div>
				<div>&#124;</div>
				<div>
					SV
				</div>
				<div>&#124;</div>
				<div>
					PT
				</div>
			</div>
			<div></div>
			<div class="external-links">
				<a class="github" href="https://github.com/calexandru2018" target="_blank">
					<img src="../assets/img/utility/github.svg" alt="">
				</a>
				<a class="stackoverflow" href="https://stackoverflow.com/users/2547630/calexandru" target="_blank">
					<img src="../assets/img/utility/stack-overflow.svg" alt="">
				</a>
				<a class="linkedin" href="https://www.linkedin.com/in/calexandru2018/" target="_blank">
					<img src="../assets/img/utility/linkedin.svg" alt="">
				</a>
				<a class="twitter" href="https://twitter.com/calexandru2018" target="_blank">
					<img src="../assets/img/utility/twitter.svg" alt="">
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$default-text-color: rgb(255,255,255);
$h2-shdw: rgb(255,255,255);
$font-header-size: 1.79em;
$font-p-size: 1.3em;
$font-lang-size: 1em;

	.top-nav{
		color: $default-text-color;
		max-width: 100%;
		margin: 10px 25px 0 25px;
		text-align: left;
		h2{
			font-size: $font-header-size;
			margin: 1em 0 0 0;
			box-shadow: 0px 5px 0px -1px $h2-shdw;
		}
		p{
			font-family: "Inria Sans Bold";
			margin: 0.7em 0 0 0;
			font-size: $font-p-size;
		}
		.under-menu{
			display: grid;
    		grid-template-columns: 1.5fr 0.4fr 2.5fr;
			.lang-select{
			font-size: $font-lang-size;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			}
			.external-links{
				display: flex;
    			justify-content: space-between;
				outline: none;
				img{
					width: 1.5em;
					transition: filter ease-out 0.1s;
					&:hover{
						filter: drop-shadow(0px 0px 3px $h2-shdw);
					}
					&:active{
						outline: none;
						background: transparent;
						filter: drop-shadow(0px 0px 3px black);
						transform: scale(0.97);
					}
				}
			}
		}
	}
	@media only screen
	and (min-width : 411px)
	and (min-height: 731px) {
		.top-nav{
			h2{
				font-size: $font-header-size + 0.3em;
			}
		}
	}
	@media only screen
	and (min-width : 411px)
	and (min-height: 823px) {
		.top-nav{
			h2{
				font-size: $font-header-size + .3em !important;
			}
		}
	}
	@media only screen
	and (min-width : 375px)
	and (min-height: 800px) {
		.top-nav{
			h2{
				font-size: $font-header-size + 0.1em;
			}
		}
		.external-links{
			img{
				width: 2em !important;
			}
		}
	}
</style>