<template>
  <div class="coutainer">
    <h1>{{ title }} at {{ date }}</h1>
    <div class="corps">
      <img :src="url" :alt="title" />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
}
.corps {
}

.description {
}
img {
  background-size: cover;
  background-position: center;
  background: no-repeat;
}
</style>
