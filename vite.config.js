import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";
import { sign } from "crypto";

export default defineConfig({
    // Đường dẫn gốc khi deploy (gh-pages cần đúng path)
    base: process.env.NODE_ENV === "production" ? "/f8-zoom-module-001" : "/",

    // Thư mục chính chứa HTML, SCSS, JS
    root: "src",

    // Thư mục chứa các file tĩnh như ảnh, fonts, v.v.
    publicDir: "../public",

    build: {
        // Nơi xuất ra sản phẩm sau khi build
        outDir: "../dist",
        emptyOutDir: true,

        // Khai báo các trang cần build (nhiều trang)
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                collection: path.resolve(__dirname, "src/collection.html"),
                signin: path.resolve(__dirname, "src/sign-in.html"),
                signup: path.resolve(__dirname, "src/sign-up.html"),
                payment: path.resolve(__dirname, "src/payment.html"),
                account: path.resolve(__dirname, "src/account.html"),
                // Thêm trang khác nếu có
            },
        },
    },

    plugins: [ViteEjsPlugin()],
});
