# split-pane-v3

## [demo](https://daydayup001001.github.io/split-pane-v3/)

## 简介

-   split-pane-v3 是一个基于 VUE3+TS 的分割面板组件，此组件功能类似于`vscode`的面板分割，常见于在线代码编辑器！根据大佬的[项目](https://github.com/PanJiaChen/vue-split-pane)而来，这个可以理解为该项目的 Vue3 版本。

## 快速上手

> 先 npm 下载插件

`npm install split-pane-v3 --save`

或

`npm i split-pane-v3 -S`

> 然后你可以像使用普通组件一样使用 split-pane-v3

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

## 参数

| 序号 | 名字           | 类型   | 默认值 | 说明                                     |
| ---- | -------------- | ------ | ------ | ---------------------------------------- |
| 1    | minPercent     | Number | 10     | 当前面板的最小值（百分比）               |
| 2    | defaultPercent | Number | 50     | 当前面板的默认展示值（百分比）           |
| 3    | split          | String | -      | 当前面板的展示形式，为上下分割或左右分割 |
| 4    | class-name     | String | -      | 当前面板的分割手势的类名                 |

> ---

## slot

| 序号 | 名字  | 说明                            |
| ---- | ----- | ------------------------------- |
| 1    | paneL | 分割面板内部第一个 slot(左或上) |
| 2    | paneR | 分割面板内部第一个 slot(右或下) |
