<template>
  <div class="grid isometric-grid">
    <div class="grid-block" v-for="block in 9" :key="block">
      <div class="tile">
        <a class="tile-link" href="#">
          <v-img class="tile-img" src="https://king.host/blog/wp-content/uploads/2018/07/2018-07-10-img-blog-placeholder.png" alt="Image" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
html {
	font-size: 16px;
	font-family: sans-serif;
}
body {
	margin: 0;
	min-height: 100vh;
	font-size: 1rem;
	line-height: 1.25;
}
.grid {
	width: 100%;
	max-width: 60rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.grid-block {
	width: 33.333333333%;
	min-height: 11.25rem;
	padding: 1rem;
}
.isometric-grid {
	-webkit-transform: rotateX(45deg) rotateZ(-45deg);
	transform: rotateX(45deg) rotateZ(-45deg);
	-webkit-perspective: 1500px;
	perspective: 1500px;
	.tile-link {
		&:hover {
			.tile-img {
				top: -1rem;
				left: 1rem;
				box-shadow: -1.25rem 1.25rem 0.8rem -1rem rgba(0, 0, 0, 0.25);
			}
		}
	}
	.tile-img {
		position: relative;
		top: 0;
		left: 0;
		box-shadow: -0.50rem 0.50rem 0.5rem 0rem rgba(0, 0, 0, 0.35);
		transition-property: opacity, top, left, box-shadow;
	}
}
.tile-link {
	display: block;
	&:hover {
		.tile-img {
			opacity: 1;
		}
		.tile-img-link {
			display: block;
			&:hover {
				.tile-img {
					opacity: 0.5;
				}
			}
		}
	}
}
.tile-img {
	display: block;
	width: 100%;
	height: auto;
	opacity: 1;
	transition-property: opacity;
	transition-duration: 0.125s;
	transition-timing-function: ease-in;
}
</style>