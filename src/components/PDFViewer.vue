<template>
	<div id="pdfvuer">
		<div id="buttons" class="ui grey three item inverted bottom fixed menu transition hidden">
			<a class="item zoom-out" @click="scale -= scale > 0.2 ? 0.1 : 0">
				<!-- <i class="left chevron icon" /> -->
				-
			</a>
			<a class="ui active item zoom-ammount">
				{{ formattedZoom }} %
			</a>
			<a class="item zoom-in" @click="scale += scale < 2 ? 0.1 : 0">
				+
				<!-- <i class="right chevron icon" /> -->
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
</template>

<script>
	import pdfvuer from 'pdfvuer'

	export default {
	components: {
		pdf: pdfvuer
	},
	data () {
		return {
			page: 1,
			numPages: 0,
			pdfdata: undefined,
			errors: [],
			scale: 'page-width',
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
		methods: {
			getPdf () {
				var self = this;
				self.pdfdata = pdfvuer.createLoadingTask('./doc/CV_'+this.$root.$i18n.locale+'.pdf');
				self.pdfdata.then(pdf => {
					self.numPages = pdf.numPages;
				});
			}
		}
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