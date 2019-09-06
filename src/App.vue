<template>
  <div id="app">
	<top-social-links></top-social-links>
	<nav>
		<button @click="show_component = 'app-portfolio'; class_visible = true">Portfolio</button>
		<button @click="show_component = 'app-about-me'; class_visible = true">About Me</button>
		<button @click="show_component = 'app-contacts'; class_visible = true">Contacts</button>
	</nav>
	<keep-alive>
    	<component 
			class = "component" 
			v-bind:class = "{'show-component': class_visible}" 
			v-bind:is = "show_component" 
			class_visible = "class_visible"
			></component>
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
				show_component: 'app-portfolio',
				class_visible: false
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
/* eslint-disable */
	html, body{
		height: 100vh;
		padding: 0;
		margin: 0;
	}
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: white;
		background-image: url('./assets/abstract-design-diagonal-2387532(1).jpg');
		background-position: center;
		background-size: cover;
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	nav{
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-row-gap: 5em;
		margin-top: 20vh;
		padding: 0 10px;
		width: 80%;
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
	.component{
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		background-color: rgba(110, 110, 110, 0.7);
		transition: all ease-in-out 0.7s;
		transform: translate(150%);
	}

	.show-component{
		transform: translate(0)
	}
</style>
