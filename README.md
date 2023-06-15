# Deno & Vite & Rust & Vue 3
A template for building a [Vue 3](https://vuejs.org/) application including a [Rust WebAssembly](https://www.rust-lang.org/what/wasm) crate.

## Deno Tasks
A few deno tasks are included.
- `wasm` Rebuild and package the Rust crate to Wasm using [`wasm-pack`](https://rustwasm.github.io/docs/wasm-pack/).
- `dev` A hot reloading development server. Uses Vite for packaging and serving and `cargo-watch` (invoking `wasm-pack`) to "hot-reload" the Rust crate.
- `vue-dev` The same as `dev` without the hot-reloading Rust crate. Use the `wasm` task to rebuild the crate and have it served by Vite.
- `build` Package for production. Output to `target/dist/`.
- `preview` Serve the built package using Vite. For development / validation, **not** for production.
- `serve` Serve the built package using Deno [file_server](https://deno.com/manual@v1.34.2/examples/file_server#using-the-stdhttp-file-server). I would not recommend using for production.