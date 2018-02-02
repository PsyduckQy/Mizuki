<template>
    <div class="toast"
		:class="{
			'is-toast': !isToast
		}">
		<div class="lang-mask_transparent"></div>
		<div class="lang-toast">
			<i class="lang-loading lang-icon_toast"></i>
			<p class="lang-toast__content">数据加载中</p>
		</div>
	</div>
</template>

<script>
import './toast.less'

export default {
  props: {
    isToast: Boolean
  }
}

</script>
