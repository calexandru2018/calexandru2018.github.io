<template>
	<nav>
		<button @click="changeComponent('app-portfolio')">Portfolio</button>
		<button @click="changeComponent('app-about-me')">About Me</button>
		<button @click="changeComponent('app-contacts')">Contacts</button>
	</nav>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		methods:{
			changeComponent(component){
				eventBus.$emit('component-to-show', component, true);
			}
		}

	}
</script>

<style lang="scss" scoped>
	nav{
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-row-gap: 5em;
		margin-top: 2em;
		margin-left: 1.5em;
		padding: 0 10px;
		width: 80%;
	}
	nav button{
		width: 50%;
		margin: 0 auto 0 0;
		height: 1.5em;
		background-color: transparent;
		border: 2px solid white;
		border-radius: 2px;
		padding: 25px;
		line-height: 0;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		transition: all ease-in 0.15s;
		cursor: pointer;
	}
	nav button:hover{
		color: black;
		background-color: white;
		transform: scale(1.01)
	}
</style>