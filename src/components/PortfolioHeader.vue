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
					<img src="../assets/img/social/github_simple.svg" alt="">
				</a>
				<a class="stackoverflow" href="https://stackoverflow.com/users/2547630/calexandru" target="_blank">
					<img src="../assets/img/social/stack-overflow_simple.svg" alt="">
				</a>
				<a class="linkedin" href="https://www.linkedin.com/in/calexandru2018/" target="_blank">
					<img src="../assets/img/social/linkedin_simple.svg" alt="">
				</a>
				<a class="twitter" href="https://twitter.com/calexandru2018" target="_blank">
					<img src="../assets/img/social/twitter_simple.svg" alt="">
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
$default-text-color: rgb(241,242,242);
$h2-shdw: rgb(241,242,242);
$font-header-size: 1.79em;
$font-p-size: 1.6em;
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
    		// grid-template-columns: 1.5fr 0.4fr 2.5fr;
			grid-template-columns: 2fr 1fr;
			margin: 2em 0 3em 0;
			grid-row-gap: 1em;
			.lang-select{
				grid-row-start: 2;
				grid-row-end: 3;
				font-size: $font-lang-size;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				cursor: default;
				.lang{
					font-family: 'Inria Sans Bold';
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
				grid-row-start: 1;
				grid-row-end: 2;
				display: flex;
    			justify-content: space-between;
				outline: none !important;
				img{
					width: 1.5em;
					transition: filter ease 0.2s;
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
			.external-links img{
				width: 2em  !important;
			}
		}
	}
	@media (min-width: 375px) and (min-height: 750px){
		.top-nav{
			h2{
				font-size: $font-header-size + 0.45em !important;
			}
			p{
				font-size: $font-p-size + 0.35em !important;
			}
			.under-menu{
				grid-row-gap: 2em !important;
				margin: 3em 0 4em 0 !important;
				.lang-select{
					font-size: $font-lang-size + 0.2em !important;
				}
				.external-links{ 
					img{
						width: 2.2em  !important;
					}
				}
			}
		}
	}
	@media (min-width: 414px) { 
		.top-nav{
			h2{
				font-size: $font-header-size + 0.6em !important;
			}
			p{
				font-size: $font-p-size + 0.45em !important;
			}
			.under-menu{
				grid-row-gap: 1.5em !important;
				.lang-select{
					font-size: $font-lang-size + 0.3em !important;
				}
			}
		}
	}
	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		.top-nav{
			h2{
				font-size: $font-header-size + 1.8em !important;
				margin: 0.8em 0 0.5em 0;
			}
			p{
				font-size: $font-p-size + 1.5em !important;
			}
			.under-menu{
				margin: 3em 0 5em 0 !important;
				grid-template-columns: 1.5fr 1.5fr !important;
				grid-row-gap: 3em !important;
				.lang-select{
					font-size: $font-lang-size + .8em !important;
				}
				.external-links img{
					width: 3em  !important;
				}
			}
			
		}
	}
	@media (min-width: 992px) and (min-height: 720px){ 
		.top-nav{
			h2{
				font-size: $font-header-size + 2em !important;
			}
			p{
				font-size: $font-p-size + 1.2em !important;
			}
			.under-menu{
				grid-template-columns: 3fr 3fr 4fr !important;
				margin: 1em 0 2em 0 !important;
				.lang-select{
					grid-row-start: 1;
					grid-row-end: 2;
					font-size: $font-lang-size + 0.7em !important;
				}
				.external-links {
					grid-row-start: 1;
					grid-row-end: 2;
					grid-column-start: 3;
					grid-column-end: 4;
					img{
						width: 3em  !important;
					}
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
			.under-menu{
				grid-template-columns: 3fr 3fr 4fr !important;
				margin: 2em 0 4em 0 !important;
				.lang-select{
					font-size: $font-lang-size + 0.9em !important;
				}
				.external-links img{
					width: 3.5em  !important;
				}
			}
		}
	}
	@media (min-width: 1500px){
		.top-nav{
			.under-menu{
				grid-template-columns: 2fr 5fr 3fr !important;
				.lang-select{
					font-size: $font-lang-size + 0.9em !important;
				}
				.external-links img{
					width: 3em  !important;
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
				font-size: $font-p-size + 3.5em !important;
			}
			.under-menu{
				.lang-select{
					font-size: $font-lang-size + 2em !important;
				}
				grid-template-columns: 1fr 6fr 3fr !important;
				.external-links img{
					width: 6em  !important;
				}
			}
		}
	}
	
</style>