<template>
	<div style="height: 100%">
		<split-pane :min-percent="0" :default-percent="20" split="vertical">
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
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const SplitPane = defineAsyncComponent(() => import("@/components/SplitPane/index.vue"));
</script>

<style lang="scss"></style>
