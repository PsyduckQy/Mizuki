<template>
	<div class="btn">
		<button :disabled="disabled"
			class="lang-btn" 
			@click="handleClick"
			:class="[
				type ? 'lang-btn__' + type : '',
				size ? 'lang-btn__' + size : '',
				{
					'is-disabled': disabled,
					'is-loading': loading
				}
			]">
			<i class="lang-icon-loading" v-if="loading"></i>
			<i :class="'lang-icon-' + icon" v-if="icon && !loading"></i>
			<slot>默认</slot>
		</button>
	</div>
</template>

<script>
import './button.less'

export default {
	name: 'lang-btn',

	props: {
		type: {
			type: String,
			default: 'default'
		},
		size: String,
		icon: {
			type: String,
			default: ''
		},
		loading: Boolean,
		disabled: Boolean
	},
	methods: {
		handleClick (evt) {
			this.$emit('click', evt)
		}
	}
}
</script>

