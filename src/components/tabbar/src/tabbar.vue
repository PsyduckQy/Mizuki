<template>
	<div class="lang-tabbar">
		<slot></slot>
	</div>
</template>

<script>
import './tabbar.less'
/**
 * lang-tab-item
 * @desc 搭配 tabbar 使用
 * @param {*} id - 选中后的返回值, 任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <lang-tab-item>
 *     <img slot="icon" src="http://100x100"/>
 *     首页
 * </lang-tab-item>
 */
export default {

	props: {
		fixed: Boolean,
		value: {}
	}
}
</script>
