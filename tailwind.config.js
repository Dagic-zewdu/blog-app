module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors:{
      light:'#f3f4f6',
      blue:'#3b82f6',
      white:"#fff"
    }
  },
plugins: [require('flowbite/plugin')]
}
