<template>
  <div class="card">
    <img :src="thumbnail" />
    <div class="card-info">
      <h2 class="recipe">
        <a :href="link" target="_blank">{{ title }}</a>
      </h2>
      <br />
      <p class="ingredients">{{ ingredients }}</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  props: ["thumbnail", "link", "title", "ingredients"],
};
</script>

<style scoped>

.card {
  margin: 0 auto;
  border: 3px solid #666666;
  width: 360px;
  padding: 17px;
  text-align: center;
  margin: 0 20px 20px;
  float: left;
}

.card img {
  margin-bottom: 20px;
}

.card-info {
  background-color: #eeeeee;
  padding: 10px;
  height: 206px;
}

.recipe {
  font-size: 1.4em;
}

.recipe a {
  text-decoration: none;
  color: #1b8b2a;
}

.ingredients {
  color: #111111;
}
</style>
