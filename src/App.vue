<template>
  <div class="container">
    <div class="img" :style="`background-image: url('${url}');`"></div>
    <div class="content">
      <h1>{{ title }} at {{ date }}</h1>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloNasa",

  data() {
    return {
      date: "",
      title: "",
      url: "",
      description: "",
    };
  },

  mounted() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=vANhpstA65mOYxlGFQaU8zYGyLlhSIsUdiVItnxT"
      )
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

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap%27");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Righteous", cursive;
  font-size: 19px;
  line-height: 1.7;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg%27%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23424242' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-color: #22223b;
}
.container {
  display: flex;
  padding: 40px;
  margin: 0 auto;
  max-height: 100%;
}
/* .content {
  display: flex;
} */
h1 {
  margin-top: 0;
  margin-bottom: 0;
  color: #ff6b6b;
}
p {
  color: #e2e2df;
}

.img {
  height: 510px;
  width: 100%;
  margin-right: 50px;
}
</style>
