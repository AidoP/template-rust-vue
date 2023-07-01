# Vite & Rust & Vue 3
A template for building a [Vue 3](https://vuejs.org/) application including a [Rust WebAssembly](https://www.rust-lang.org/what/wasm) crate.

## npm Scripts
A few npm scripts are included.
- `wasm` Rebuild and package the Rust crate to Wasm using [`wasm-pack`](https://rustwasm.github.io/docs/wasm-pack/).
- `dev` A hot reloading development server. Uses Vite for packaging and serving.
- `build` Lint and type check then package for production. Output to `target/dist/`. Takes an optional argument for the base path.
- `check` Lint and type check.
- `preview` Serve the built package using Vite. For development / validation, **not** for production.

# GitHub Workflows
The `deploy-pages` GitHub workflow automates building and deploying the app to [GitHub Pages](https://docs.github.com/en/pages/quickstart).
If you want routing to work, add a symbolic link with `404.html -> index.html` (See [the docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)).
