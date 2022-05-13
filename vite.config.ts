import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
	root: "./src/",
	build: {
		rollupOptions: {
			input: {
				anh: resolve(__dirname, "./src/anh/index.html"),
				"cong-nghe": resolve(__dirname, "./src/cong-nghe/index.html"),
				dia: resolve(__dirname, "./src/dia/index.html"),
				gdcd: resolve(__dirname, "./src/gdcd/index.html"),
				gdqp: resolve(__dirname, "./src/gdqp/index.html"),
				"giai-tich": resolve(__dirname, "./src/giai-tich/index.html"),
				hinh: resolve(__dirname, "./src/hinh/index.html"),
				hoa: resolve(__dirname, "./src/hoa/index.html"),
				ly: resolve(__dirname, "./src/ly/index.html"),
				main: resolve(__dirname, "./src/index.html"),
				ptnk: resolve(__dirname, "./src/ptnk/index.html"),
				sinh: resolve(__dirname, "./src/sinh/index.html"),
				su: resolve(__dirname, "./src/su/index.html"),
				"the-duc": resolve(__dirname, "./src/the-duc/index.html"),
				tin: resolve(__dirname, "./src/tin/index.html"),
				van: resolve(__dirname, "./src/van/index.html"),
			},
		},
	},
})
