<script>
import Item from './item'

export default {
  name: 'TodoList',
  components: { Item },
  data: () => ({
    items: [
      'Comprar pão',
      'Comprar arroz',
      'Entregar trabalho de sexta'
    ],
    value: ''
  }),
  methods: {
    handleClick () {
      const items = [ ...this.items ]
      items.push(this.value)
      this.items = [ ...items ]

      this.value = ''
    },
    handleChangeItem (props) {
      const { index, value } = props
      const items = [ ...this.items ]
      items[index] = value
      this.items = [ ...items ]
    }
  }
}
</script>

<template>
  <div class="content">
    <ul>
      <Item
        v-for="(item, key) in items"
        :key="key"
        :index="key"
        :item="item"
        @change="handleChangeItem" />
    </ul>
    <form action="#">
      <div class="field">
        <div class="control">
          <input
            autofocus
            class="input is-primary"
            type="text"
            v-model="value"
            placeholder="Uma tarefa qualquer">
        </div>
      </div>

      <button
        type="button"
        class="button is-primary"
        @click="handleClick"> Add </button>
    </form>
  </div>
</template>
