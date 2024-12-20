// vite.config.js
export default {
  root: '',
  build: {

    minify: false,

    rollupOptions: {
      output: {
        assetFileNames: 'assets/style.[ext]',
        entryFileNames: 'assets/script.js',
      }
    }
  }
}