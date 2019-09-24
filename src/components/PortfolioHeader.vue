<template>
	<div class="top-nav">
		<h2 class="page-tile">Alexandru Cheltuitor</h2>
		<p>{{ $t("sub_title") }}</p>
		<div class="under-menu">
			<div class="lang-select">
				<div class="lang" @click="$root.$i18n.locale = 'en'" :class="$root.$i18n.locale == 'en' ? 'highlight':''">EN</div>
				<div>&#124;</div>
				<div class="lang" @click="$root.$i18n.locale = 'sv'" :class="$root.$i18n.locale == 'sv' ? 'highlight':''">SV</div>
				<div>&#124;</div>
				<div class="lang" @click="$root.$i18n.locale = 'pt'" :class="$root.$i18n.locale == 'pt' ? 'highlight':''">PT</div>
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

<script>
	export default {
		
	}
</script>

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
			margin: 1.5em 0 0.5em 0;
			box-shadow: 0px 5px 0px -1px $h2-shdw;
		}
		p{
			font-family: "Inria Sans Bold";
			margin: 0.5em 0 0.5em 0;
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
				cursor: default;
				.lang{
					cursor:pointer;
					transition: text-shadow ease 0.2s;
					&:hover{
						text-shadow: 
							0px 0px 2px white, 
							0px 0px 2px white, 
							0px 0px 2px white, 
							0px 0px 2px white;
					}
				}
				.highlight{
					text-shadow: 
						0px 0px 2px white, 
						0px 0px 2px white, 
						0px 0px 2px white, 
						0px 0px 2px white;
				}
			}
			.external-links{
				display: flex;
    			justify-content: space-between;
				outline: none !important;
				img{
					width: 1.8em;
					transition: filter ease-out 0.1s;
					&:hover{
						filter: drop-shadow(0px 0px 3px $h2-shdw);
						outline: none !important;
					}
					&:active{
						outline: none !important;
						background: transparent;
						filter: drop-shadow(0px 0px 3px black);
						transform: scale(0.97);
					}
				}
			}
		}
	}

	@media (min-width: 375px) {
		h2{
			font-size: $font-header-size + 0.4em !important;
		}
		.under-menu{
    		grid-template-columns: 1.5fr 1fr 3fr !important;
			.external-links img{
					width: 2em  !important;
				}
		}
	}
	@media (min-width: 375px) and (min-height: 750px){
		h2{
			font-size: $font-header-size + 0.45em !important;
		}
		.under-menu{
    		grid-template-columns: 1.5fr 0.5fr 3.2fr !important;
			.external-links{ 
				img{
					width: 2.2em  !important;
				}
			}
		}
	}
	@media (min-width: 576px) { 
		
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		.top-nav{
			h2{
				font-size: $font-header-size + 1.8em !important;
				margin: 0.8em 0 0.5em 0;
			}
			p{
				font-size: $font-p-size + 0.5em;
			}
			.lang-select{
				font-size: $font-lang-size + 0.5em !important;
			}
			.under-menu{
				grid-template-columns: 1.5fr 2fr 3fr !important;
				.external-links img{
					width: 3.5em  !important;
				}
			}
			
		}
	}
	@media (min-width: 1024px) and (min-height: 992px) and (max-height: 1024px) { 
		.top-nav{
			h2{
				font-size: $font-header-size + 2em !important;
			}
			p{
				font-size: $font-p-size + 1.2em !important;
			}
			.lang-select{
				font-size: $font-lang-size + 0.7em !important;
			}
			.under-menu{
				grid-template-columns: 2fr 4fr 4fr !important;
				.external-links img{
					width: 3.3em  !important;
				}
			}
			
		}
	}
	// /* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1300px){ 
		.top-nav{
			h2{
				font-size: $font-header-size + 2.5em !important;
				padding: 0;
				margin: 1.2em 0 0.5em 0;
			}
			p{
				font-size: $font-p-size + 1.5em !important;
			}
			.lang-select{
				font-size: $font-lang-size + 0.5em !important;
			}
			.under-menu{
				grid-template-columns: 1fr 6fr 3fr !important;
				.external-links img{
					width: 3.5em  !important;
				}
			}
			
		}
	}
	// 2k resolutions 2048 x 1080
	@media (min-width: 2048px) { 
		.top-nav{
			h2{
				font-size: $font-header-size + 4em !important;
				padding: 0;
				margin: 1.5em 0 0.5em 0;
			}
			p{
				font-size: $font-p-size + 2em !important;
			}
			.lang-select{
				font-size: $font-lang-size + 1em !important;
			}
			.under-menu{
				grid-template-columns: 1fr 6fr 3fr !important;
				.external-links img{
					width: 4em  !important;
				}
			}
			
		}
	}
	// 4k resolutions 3840 x 2160
	@media (min-width: 3840px) { 
		.top-nav{
			h2{
				font-size: $font-header-size + 6em !important;
				padding: 0;
				margin: 1.5em 0 0.5em 0;
			}
			p{
				font-size: $font-p-size + 3em !important;
			}
			.lang-select{
				font-size: $font-lang-size + 2em !important;
			}
			.under-menu{
				grid-template-columns: 1fr 6fr 3fr !important;
				.external-links img{
					width: 6em  !important;
				}
			}
		}
	}
	
</style>