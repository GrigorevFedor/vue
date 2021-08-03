<template>
  
  <div>
  <v-data-table
       :headers="headers"
        :items="list"
        item-key="name"
        class=""
    >     
     </v-data-table> 
     </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {
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
        },]
  } 
  }
};
</script>
