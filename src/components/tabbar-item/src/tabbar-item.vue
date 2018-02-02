<template>
	<div>
		<div class="lang-tab-item-icon">
			<slot name="normal"></slot>
		</div>
		<div class="lang-tab-item-label"><slot></slot></div>
	</div>
</template>

<script>
import './tabbar-item.less'

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
	props: ['id']
}
</script>
