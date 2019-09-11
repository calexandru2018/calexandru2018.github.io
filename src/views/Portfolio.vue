<template>
		<div>
		</br>
		</br>
		</br>
		</br>
		</br>
		<h1>portfolio</h1>
		<button @click="hideComponent">Back</button>
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

style.<style lang="scss" scoped>
	h1{
		background-color: orange
	}
</style>
