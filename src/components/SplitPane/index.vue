<template>
	<div :style="{ cursor, userSelect }" class="vue-splitter-container clearfix" @mousemove="onMouseMove">
		<Pane class="splitter-pane splitter-paneL" :split="props.split" :style="{ [type]: percent + '%' }">
			<slot name="paneL"></slot>
		</Pane>

		<Resizer
			:className="className"
			:style="{ [resizeType]: percent + '%' }"
			:split="props.split"
			@mousedown.native="onMouseDown"
			@mouseup="onMouseUp"
			@click.native="onClick"
		></Resizer>

		<Pane class="splitter-pane splitter-paneR" :split="props.split" :style="{ [type]: 100 - percent + '%' }">
			<slot name="paneR"></slot>
		</Pane>
		<div class="vue-splitter-container-mask" v-if="active"></div>
	</div>
</template>

<script setup>
import { computed, ref, defineAsyncComponent, watchEffect } from "vue";

const Pane = defineAsyncComponent(() => import("./pane.vue"));
const Resizer = defineAsyncComponent(() => import("./resizer.vue"));
const props = defineProps({
	minPercent: {
		type: Number,
		default: 10,
	},
	defaultPercent: {
		type: Number,
		default: 50,
	},
	split: {
		validator(value) {
			return ["vertical", "horizontal"].indexOf(value) >= 0;
		},
		required: true,
	},
	className: {
		type: String,
	},
});

const emit = defineEmits();

const active = ref(false);
const hasMoved = ref(false);
const height = ref(null);

const percent = ref(props.defaultPercent);

watchEffect(() => {
	percent.value = props.defaultPercent;
});

const type = computed(() => (props.split === "vertical" ? "width" : "height"));

const resizeType = computed(() => (props.split === "vertical" ? "left" : "top"));

const userSelect = computed(() => {
	return active.value ? "none" : "";
});

const cursor = computed(() => {
	return active.value ? (props.split === "vertical" ? "col-resize" : "row-resize") : "";
});

// 鼠标抬起
const onMouseUp = () => {
	active.value = true;
};

// 鼠标移动
const onMouseMove = (e) => {
	if (e.buttons === 0 || e.which === 0) {
		active.value = false;
	}

	if (active.value) {
		let offset = 0;
		let target = e.currentTarget;
		if (props.split === "vertical") {
			while (target) {
				offset += target.offsetLeft;
				target = target.offsetParent;
			}
		} else {
			while (target) {
				offset += target.offsetTop;
				target = target.offsetParent;
			}
		}

		const currentPage = props.split === "vertical" ? e.pageX : e.pageY;
		const targetOffset = props.split === "vertical" ? e.currentTarget.offsetWidth : e.currentTarget.offsetHeight;
		const newPercent = Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100;

		if (newPercent > props.minPercent && newPercent < 100 - props.minPercent) {
			percent.value = newPercent;
		}

		emit("resize", percent.value);
		hasMoved.value = true;
	}
};

// 鼠标放下
const onMouseDown = () => {
	active.value = true;
	hasMoved.value = false;
};

const onClick = () => {
	console.log("点击");
	if (!hasMoved.value) {
		percent.value = 50;
		emit("resize", percent.value);
	}
};
</script>

<style scoped>
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}

.vue-splitter-container {
	height: 100%;
	position: relative;
}

.vue-splitter-container-mask {
	z-index: 9999;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
