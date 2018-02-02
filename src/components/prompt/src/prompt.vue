<template>

	<div class="lang-prompt"
		:class="{
			'is-prompt': !isPrompt.isBool
		}">
		<p class="lang-prompt__content">{{isPrompt.isText}}</p>
	</div>
</template>

<script>
import './prompt.less'

export default {

	props: {
		isPrompt: Object
	}
	// watch: {
	// 	isToast (val, oldVal) {
	// 		if (val) {
	// 			const self = this
	// 			setTimeout(function () {
	// 				self.$parent.toggle._isToast = !self.$parent.toggle._isToast
	// 			}, this.duration)
	// 		}
	// 	}
	// }
}

</script>
