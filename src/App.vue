<template>
  <div id="app">
	Show {{show}}

	<top-social-links></top-social-links>
	<nav>
		<button @click="show = 'app-portfolio'">Portfolio</button>
		<button @click="show = 'app-about-me'">About Me</button>
		<button @click="show = 'app-contacts'">Contacts</button>
	</nav>
	<keep-alive>
    	<component v-bind:is="show"></component>
	</keep-alive>
  </div>
</template>

<script>	
	import TopSocialLinks from "@/components/TopSocialLinks.vue";
	import Portfolio from "@/views/Portfolio.vue";
	import AboutMe from "@/views/AboutMe.vue";
	import Contacts from "@/views/Contacts.vue";

	export default {
		data(){
			return{
				show: 'app-portfolio'
			}
		},
		components:{
			'top-social-links': TopSocialLinks,
			'app-portfolio': Portfolio,
			'app-about-me': AboutMe,
			'app-contacts': Contacts,
		}
	}
</script>

<style lang="scss">
	html, body{
		height: 100%;
		padding: 0;
		margin: 0;
	}
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
		background-image: url('./assets/nadine-shaabana-fs5Yi34T3ig-unsplash.jpg');
		background-position: center;
		background-size: cover;
		height: 100%;
		padding: 25px;
	}
</style>
<style lang="scss" scoped>
	nav{
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		padding: 5px;
		grid-row-gap: 5em;
		margin-top: 25%;
	}
	nav button{
		width: 50%;
		margin: 0 auto 0 0;
		height: 40px;
		background-color: transparent;
		border: 2px solid white;
		border-radius: 2px;
		padding: 25px;
		line-height: 0;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		transition: all ease-in 0.2s;
	}
	nav button:hover{
		color: black;
		background-color: white
	}
</style>
