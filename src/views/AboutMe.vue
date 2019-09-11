<template>
	<div class="component card-base-layout">
		<div>
			<button class="hide-component-button" @click="hideComponent"><i class="right"></i></button>
		</div>
		<div>
			<h1>About me</h1>
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

</style>