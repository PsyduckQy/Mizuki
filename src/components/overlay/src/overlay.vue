<template>
	<div class="overlay" 
		:class="[
			transparent ? 'transparent' : '' 
		]" 
		transition="overlay" 
		v-if="show" 
		@click="click && click()">
		<div class="inner" v-bind:style="{ opacity: opacity }"></div>
	</div>
</template>

<script>
import './overlay.less'

export default {
	props: {
		show: {
			type: Boolean,
			default: false,
			required: true
		},
		transparent: {
			type: Boolean,
			default: false
		},
		click: {
			type: Function,
			default: undefined
		},
		opacity: {
			type: Number,
			default: 1
		}
	}
}
</script>
