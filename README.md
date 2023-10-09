# split-pane-v3

[中文文档README.zh_CN.md](./README.zh_CN.md)

## [demo](https://daydayup001001.github.io/split-pane-v3/)

## About

-   Split-pane-v3 is a split panel component based on VUE3+TS, this component functions similar to 'vscode' panel splitting, commonly found in online code editors! [According to turn](https://github.com/PanJiaChen/vue-split-pane),this can be understood as the Vue3 version of the project.

## Get Start

> download

`npm install split-pane-v3 --save`

or

`npm i split-pane-v3 -S`

```html
<template>
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
</template>

<script setup lang="ts">
	import { defineAsyncComponent } from "vue";
	const SplitPane = defineAsyncComponent(() => import("split-pane-v3"));
</script>
```

> ---

## Options

| IDX | Name           | Type   | default | explain                                                                      |
| --- | -------------- | ------ | ------- | ---------------------------------------------------------------------------- |
| 1   | minPercent     | Number | 10      | Minimum value of the current panel (%)                                       |
| 2   | defaultPercent | Number | 50      | Default display value of the current panel (%)                               |
| 3   | split          | String | -       | The display mode of the current panel can be upper or lower or left or right |
| 4   | class-name     | String | -       | The class name of the split gesture for the current panel                    |

> ---

## slot

| IDX | Name  | explain                                         |
| --- | ----- | ----------------------------------------------- |
| 1   | paneL | First slot inside split panel (left or top)     |
| 2   | paneR | First slot inside split panel (right or bottom) |
