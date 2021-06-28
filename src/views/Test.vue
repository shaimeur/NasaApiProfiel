<template>
  <div class="container-fluid">
    <div
      class="
        col-lg-6
        col-lg-offset-0
        col-md-6
        col-md-offset-0
        col-sm-10
        col-sm-offset-1
        col-xs-12
      "
    >
      <figure>
        <div class="media" :style="`background-image: url(${url});`"></div>
        <figcaption>
          <svg
            viewBox="0 0 200 200"
            version="1.1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
                <text
                  v-for="(word, i) in title.split(' ')"
                  :key="i"
                  class="title"
                  dx="50%"
                  :dy="`${2.5 + i}em`"
                >
                  {{ word.toUpperCase() }}
                </text>
                <!-- <text class="title" dx="50%" dy="3.5em">EVERY</text>
                <text class="title" dx="50%" dy="4.5em">MOMENT</text> -->
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
          </svg>
          <!-- <div class="body">
            <p>
              Enamel pin selvage health goth edison bulb, venmo glossier
              tattooed hella butcher cred iPhone.
            </p>
          </div> -->
        </figcaption>
        <a :href="url"></a>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloNasa",

  data() {
    return {
      date: "-",
      title: "-",
      url: "",
      description: "",
    };
  },

  mounted() {
    const apiUrl =
      "https://api.nasa.gov/planetary/apod?api_key=vANhpstA65mOYxlGFQaU8zYGyLlhSIsUdiVItnxT";
    axios
      .get(apiUrl)
      .then((res) => {
        // console.log("res", res);
        this.title = res.data.title;
        this.date = res.data.date;
        this.url = res.data.url;
        this.description = res.data.explanation;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
body {
  background-color: #252830;
  color: white;
  font-family: "Lato";
}
.container-fluid {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 100%;
}
.media {
  background-position: center;
  background-size: cover;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease;
  width: 100%;
}
figure {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
figure a {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
}
figure:hover .media {
  transform: scale(1.25);
}
figcaption {
  color: #252830;
  height: calc(100% - 30px);
  margin: 15px;
  left: 0;
  position: absolute;
  top: 0;
  width: 250px;
}
.body {
  background-color: white;
  bottom: 0;
  padding: 15px;
  position: absolute;
  width: 100%;
}
svg {
  height: inherit;
  /* width: 100%; */
}
svg text {
  text-anchor: middle;
}
svg #alpha {
  fill: white;
}
svg .title {
  font-size: 20px;
  font-family: "Montserrat";
  letter-spacing: 5px;
}
svg #base {
  fill: white;
  -webkit-mask: url(#mask);
  mask: url(#mask);
}
</style>
