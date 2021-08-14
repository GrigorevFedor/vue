<template>
  <div>
    <v-data-table :headers="headers" :items="list" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My personal cost</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="editItem.date" label="Date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" :rules="[rules.required]"></v-text-field>
                        </template>
                        <v-date-picker v-model="editItem.date" :active-picker.sync="activePicker" @change="saveDate"></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select :items="categoryList" label="Category" @change="select" :rules="[rules.required]">
                        <template v-slot:item="{ item, attrs, on }">
                          <v-list-item v-bind="attrs" v-on="on">
                            <v-list-item-content>
                              <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.value" label="Value" :rules="[rules.number, rules.required]"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <!--<template v-slot:no-data>-->
      <!--  <v-btn color="primary" @click="initialize">-->
      <!--    Reset-->
      <!--  </v-btn>-->
      <!--</template>-->
    </v-data-table>
  
  </div>
</template>

<script>
import { mapMutations, } from "vuex";

export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activePicker: null,
      // date: null,
      menu: false,
      rules: {
        number: value => !isNaN(value),
        required: value => !!value,
        },
      dialog: false,
      dialogDelete: false,
      editedItem: {
        id: '',
        date: null,
        category: '',
        value: 0, 
      },
      defaultItem: {
        id: '',
        date: '',
        category: '',
        value: 0, 
        },
      };
  },
  methods: {
    ...mapMutations(["deleteDataFromPaymentsList", "editDataFromPaymentsList", "addDataToPaymentsList"]),
    editItem (item) {
        debugger
      this.editedIndex = this.list.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.list.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      // this.desserts.splice(this.editedIndex, 1)
      this.deleteDataFromPaymentsList(this.editedIndex)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    select (payload){
      this.editedItem.category = payload
    },
    validateData () {
      debugger
      if (!this.rules.number(this.editedItem.value)) {
        return false
      }
      if (!this.rules.required(this.editedItem.value)) {
        return false
      }
      if (!this.rules.required(this.editedItem.category)) {
        return false
      }
      if (!this.rules.required(this.editedItem.date)) {
        return false
      }
      return true
    },
    save () {
      if (this.validateData()) {
        if (this.editedIndex > -1) {
          // Object.assign(this.desserts[this.editedIndex], this.editedItem)
          this.editDataFromPaymentsList(this.editedItem)
        } else {
          // this.desserts.push(this.editedItem)
          this.addDataToPaymentsList(this.editedItem)
        }
        this.close()
      }  
    },
    saveDate (date) {
      this.editedItem.date = date
      this.menu = false
    },
  },  
  computed: {
    categoryList(){
      return this.$store.getters.getCategoryList
    },
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    headers () {
      return [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Date',
          align: 'start',
          sortable: false,
          value: 'date',
        },
        {
          text: 'Category',
          align: 'start',
          sortable: false,
          value: 'category',
        },
        {
          text: 'Value',
          align: 'start',
          sortable: false,
          value: 'value',
        },
        {
          text: 'Actions',
          align: 'start',
          sortable: false,
          value: 'actions',
        },
      ]
  } 
  }
};
</script>
