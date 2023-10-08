<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
	className: {
		type: String,
	},
	split: {
		type: String,
		validator: (value) => ["vertical", "horizontal"].indexOf(value) >= 0,
	},
});

const classes = computed(() => [props.split, props.className].join(" "));
const percent = ref(20);
</script>

<style scoped>
.splitter-pane.vertical.splitter-paneL {
	position: absolute;
	left: 0px;
	height: 100%;
	padding-right: 3px;
}

.splitter-pane.vertical.splitter-paneR {
	position: absolute;
	right: 0px;
	height: 100%;
	padding-left: 3px;
}

.splitter-pane.horizontal.splitter-paneL {
	position: absolute;
	top: 0px;
	width: 100%;
}

.splitter-pane.horizontal.splitter-paneR {
	position: absolute;
	bottom: 0px;
	width: 100%;
	padding-top: 3px;
}
</style>
