import { defineConfig } from "vite";
import { resolve, join } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathResolve = (dir: string) => {
	return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
	"@": pathResolve("./src/"),
	// "#": join(__dirname, "types"),
};

const viteConfig = defineConfig(() => {
	return {
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		resolve: { alias },
		base: "/split-pane-v3/",
		build: {
			outDir: "docs",
		},
	};
});
// https://vitejs.dev/config/
export default viteConfig;
