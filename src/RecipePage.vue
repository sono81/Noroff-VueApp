<template>
<div class="container">
    <div v-for="(recipe, id) in recipes" :key="id">
        <Recipes    v-bind:thumbnail="recipe.thumbnail"
                    v-bind:title="recipe.title"
                    v-bind:link="recipe.href"
                    v-bind:ingredients="recipe.ingredients"
        ></Recipes>
    </div>
</div>
</template>

<script>
import Recipes from './components/Recipes.vue'
export default {
    name: 'RecipePage',
    components: {
        Recipes
    },
    data() {
        return {
            recipes: []
        }
    },
    beforeMount: function() {
        const app = this;
        const corsUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'http://www.recipepuppy.com/api/';

        fetch(corsUrl + url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result.results)
            app.recipes = result.results;
        })
    }
}
</script>
