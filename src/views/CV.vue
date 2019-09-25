<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1>CV</h1>
			<app-pdfviewer> </app-pdfviewer>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';
	import PDFViewer from '../components/PDFViewer.vue'

	export default {
		props: ['hide_comp_btn_shadow','card_base_layout', 'left_hand_use'],
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			}
		},
		components:{
			'app-pdfviewer': PDFViewer,
		}
	}
</script>