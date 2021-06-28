<template>
  <div></div>

  <!-- <div class="container">
    <div class="img" :style="`background-image: url('${url}');`"></div>
    <div class="content"></div> -->
  <!-- <h1>{{ title }} at {{ date }}</h1> -->
  <!-- <div class="corps"> -->
  <!-- <p class="description">{{ description }}</p> -->
  <!-- </div> -->
  <!-- </div> -->

  <router-view></router-view>
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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.img {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  // background-position: center;
  // background: no-repeat;
}

.content {
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translateY(-50%);
  background-color: aliceblue;
  width: 25%;
  height: 70%;
}
</style>
