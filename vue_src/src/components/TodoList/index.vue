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
  computed: {
    hasValue () {
      return this.value.length > 0
    },
    buttonClass () {
      if (this.hasValue) {
        return 'button is-primary'
      }

      return 'button is-primary is-disable'
    }
  },
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
    },
    handleDelete ({ index }) {
      if (this.items.length === 1) {
        this.items = []
        return
      }

      const items = [ ...this.items ]
      items.splice(index, 1)

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
        @change="handleChangeItem"
        @delete="handleDelete" />
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
        :disabled="!hasValue"
        type="button"
        :class="buttonClass"
        @click="handleClick"> Add </button>
    </form>
  </div>
</template>
