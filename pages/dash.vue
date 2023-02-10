<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="8">
        <b-form @submit.prevent="addItem">
          <b-form-group label="Nome do Item:" label-for="item-name">
            <b-form-input id="item-name" v-model="newItem.name" required></b-form-input>
          </b-form-group>
          <b-form-group label="Valor do Item:" label-for="item-value">
            <b-form-input
              id="item-value"
              type="number"
              v-model="newItem.value"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Em Promoção?" label-for="item-sale">
            <b-form-checkbox id="item-sale" v-model="newItem.onSale"></b-form-checkbox>
          </b-form-group>
          <b-form-group label="Em Estoque?" label-for="item-in-stock">
            <b-form-checkbox
              id="item-in-stock"
              v-model="newItem.inStock"
            ></b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary">Adicionar Item</b-button>
        </b-form>
      </b-col>
      <b-col cols="12" md="4">
        <h4 class="my-4">Itens Disponíveis</h4>
        <b-list-group v-if="items.length">
          <b-list-group-item v-for="(item, index) in items" :key="index">
            {{ item.name }}
            <b-button size="sm" class="float-right" @click="editItem(index)"
              >Editar</b-button
            >
            <b-button size="sm" class="float-right mr-2" @click="removeItem(index)"
              >Remover</b-button
            >
          </b-list-group-item>
        </b-list-group>
        <p v-else>Não há itens disponíveis.</p>
      </b-col>
    </b-row>
    <b-modal
      id="edit-item-modal"
      title="Editar Item"
      v-if="selectedItemIndex > -1"
      @hidden="clearSelectedItem"
      size="lg"
    >
      <b-form @submit.prevent="updateItem">
        <b-form-group label="Nome do Item:" label-for="edit-item-name">
          <b-form-input
            id="edit-item-name"
            v-model="selectedItem.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Valor do Item:" label-for="edit-item-value">
          <b-form-input
            id="edit-item-value"
            type="number"
            v-model="selectedItem.value"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Em Promoção?" label-for="edit-item-sale">
          <b-form-checkbox
            id="edit-item-sale"
            v-model="selectedItem.onSale"
          ></b-form-checkbox>
        </b-form-group>
        <b-form-group label="Em Estoque?" label-for="edit-item-in-stock">
          <b-form-checkbox
            id="edit-item-in-stock"
            v-model="selectedItem.inStock"
          ></b-form-checkbox>
        </b-form-group>
        <b-button type="submit" variant="primary">Atualizar Item</b-button>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      newItem: {
        name: "",
        value: 0,
        onSale: false,
        inStock: true,
      },
      selectedItemIndex: -1,
      selectedItem: {},
    };
  },
  methods: {
    addItem() {
      this.items.push(this.newItem);
      this.newItem = {
        name: "",
        value: 0,
        onSale: false,
        inStock: true,
      };
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    editItem(index) {
      this.selectedItemIndex = index;
      this.selectedItem = Object.assign({}, this.items[index]);
      this.$nextTick(() => {
        this.$bvModal.show("edit-item-modal");
      });
    },
    updateItem() {
      this.items.splice(this.selectedItemIndex, 1, this.selectedItem);
      this.clearSelectedItem();
    },
    clearSelectedItem() {
      this.selectedItemIndex = -1;
      this.selectedItem = {};
    },
  },
};
</script>
