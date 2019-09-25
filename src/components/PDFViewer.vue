<template>
	<div class="component card-base-layout" v-bind:class="card_base_layout.grid_layout_class">
		<div>
			<button class="hide-component-btn" v-bind:class="hide_comp_btn_shadow" @click="hideComponent">
				<i v-bind:class="left_hand_use == true ? 'right':'left'"></i>
			</button>
		</div>
		<div class="projects-container" v-bind:style="card_base_layout.grid_positioning + '; grid-row-start: 1;'">
			<h1>CV</h1>
			<div id="pdfvuer">
				<div id="buttons" class="ui grey three item inverted bottom fixed menu transition hidden">
					<a class="item zoom-out" @click="scale -= scale > 0.2 ? 0.1 : 0">
						-
					</a>
					<a class="ui active item zoom-ammount">
						{{ formattedZoom }} %
					</a>
					<a class="item zoom-in" @click="scale += scale < 2 ? 0.1 : 0">
						+
					</a>
				</div>
				<pdf 
					:src="pdfdata" 
					v-for="i in numPages" :key="i" :id="i" :page="i"
					:scale.sync="scale" 
					style="width:100%;margin:20px auto;">
					<template slot="loading">
						loading content here...
					</template>
				</pdf>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../main';
	import pdfvuer from 'pdfvuer'

	export default {
		data(){
			return{
				page: 1,
				numPages: 0,
				pdfdata: undefined,
				errors: [],
				scale: 0,
			}
		},
		props: ['hide_comp_btn_shadow','card_base_layout', 'left_hand_use'],
		components:{
			pdf: pdfvuer
		},
		methods: {
			hideComponent(){
				eventBus.$emit('show-component', false);
			},
			getPdf () {
				var self = this;
				self.pdfdata = pdfvuer.createLoadingTask('./doc/CV_'+this.$root.$i18n.locale+'.pdf');
				self.pdfdata.then(pdf => {
					self.numPages = pdf.numPages;
				});
			}
		},
		computed: {
			formattedZoom () {
				return Number.parseInt(this.scale * 100);
			},
		},
		mounted () {
			if(screen.width >= 1024)
				this.scale = 1
			else if(screen.width > 768 & screen.width < 1024)
				this.scale = 0.7
			else
				this.scale = 'page-width'
				
			this.getPdf();
		},
	}
</script>

<style lang="css" scoped>
	#buttons {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}
	/* Page content */
	.content {
		padding: 16px;
	}
	a.zoom-in, a.zoom-out{
		font-size: 2em;
		font-weight: bold;
		margin: 0 1em;
	}
	a.zoom-in:hover, a.zoom-out:hover{
		color:cadetblue;
		cursor: pointer;
	}
	.zoom-ammount{
		vertical-align: middle;
	}
</style>