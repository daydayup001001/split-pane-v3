<template>
	<div class="main">
		<div class="demo-A">
			<split-pane :min-percent="0" :default-percent="20" split="vertical" class-name="ggggg">
				<template v-slot:paneL> vertical-A </template>
				<template v-slot:paneR>
					<split-pane split="horizontal" :default-percent="75">
						<template v-slot:paneL> horizontal-B </template>
						<template v-slot:paneR>
							<split-pane split="vertical" :default-percent="75">
								<template v-slot:paneL> vertical-C </template>
								<template v-slot:paneR> vertical-D </template>
							</split-pane>
						</template>
					</split-pane>
				</template>
			</split-pane>
		</div>
		<div class="demo-B">
			<split-pane :min-percent="0" :default-percent="20" split="vertical" class-name="split-A">
				<template v-slot:paneL> vertical-A </template>
				<template v-slot:paneR>
					<split-pane split="vertical" :default-percent="40">
						<template v-slot:paneL> vertical-B </template>
						<template v-slot:paneR>
							<split-pane split="vertical" :default-percent="40">
								<template v-slot:paneL :default-percent="20"> vertical-C </template>
								<template v-slot:paneR> vertical-D </template>
							</split-pane>
						</template>
					</split-pane>
				</template>
			</split-pane>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const SplitPane = defineAsyncComponent(() => import("@/components/SplitPane/index.vue"));
</script>

<style lang="scss" scoped>
.main {
	height: 100%;
	padding: 20px;

	.demo-A {
		height: 400px;
		margin-bottom: 50px;
		border: 1px solid black;
	}

	.demo-B {
		width: 80%;
		height: 600px;
		border: 1px solid black;
	}
}
</style>
