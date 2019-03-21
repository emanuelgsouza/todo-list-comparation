<template>
  <div id="app">
    <div class="columns is-multiline">
      <div class="column is-12 has-text-centered">
        <img alt="Vue logo" src="./assets/logo.png" class="is-centered">
      </div>

      <div class="column is-12 has-text-centered">
        <h1 class="title"> Todo list de exemplo em Vuejs </h1>
      </div>

      <div class="column is-12">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList/index.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
