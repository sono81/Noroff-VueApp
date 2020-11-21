<template>
    <div class="card">
        <img />
        <div class="card-info">
            <span class="recipe"></span><br />
            <span class="ingredients"></span><br />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recipes',
}
</script>

<style scoped>
.card {
        border: 3px solid #666666;
        width: 360px;
        padding: 20px;
        text-align: center;
      }

      .card img {
          margin-bottom: 20px;
      }

      .card-info {
          background-color: #eeeeee;
          padding: 10px;
      }

      .recipe {
          font-size: 1.4em;
      }

      .recipe a {
        text-decoration: none;
        color: #1b8b2a;
      }
      
      .ingredients {
          color:#111111;
      }
</style>