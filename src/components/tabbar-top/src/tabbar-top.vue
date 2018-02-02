<template>
	<header
	class="lang-header"
	:class="{
		'is-fixed': fixed ,
		'is-hidden' : !tabShow
		}
	">
		<div class="lang-header-button is-left">
			<slot name="left"></slot>
		</div>
		<h1 class="lang-header-title" v-text="title"></h1>
		<div class="lang-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script>
import './tabbar-top.less'

/**
 * tabbar-top
 * @module components/tabbar-top
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <mt-header title="我是标题" fixed>
 *   <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
 *   <mt-button slot="right" icon="more"></mt-button>
 * </mt-header>
 */
export default {
	props: {
		fixed: Boolean,
		title: String,
		tabShow: Boolean
	},
	created () {

	}
}
</script>
