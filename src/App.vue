<template>
  <div id="app">
    <!-- top layer with github/linked/stackoverflow etc -->
	<nav>
		<button>Portfolio</button>
		<button>About Me</button>
		<button>Pages</button>
	</nav>
    <!-- <router-view /> -->
  </div>
</template>

<style lang="scss">
html, body{
	height: 100%;
	padding: 0;
	margin: 0;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-image: url('./assets/nadine-shaabana-fs5Yi34T3ig-unsplash.jpg');
	background-position: center;
	background-size: cover;
	height: 100%
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
