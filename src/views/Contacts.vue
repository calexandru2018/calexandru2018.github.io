<template>
	<div class="component">
		</br>
		</br>
		</br>
		</br>
		</br>
		<h1>Contacts</h1>
		<button class="hide-component-button" @click="hideComponent">Back</button>
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
	h1{
		background-color: orange
	}
</style>