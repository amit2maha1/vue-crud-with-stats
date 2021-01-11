<template>
  <div>
     <v-row  >
        <v-col md="3">
          Posts created: {{this.crudStats.createCount}}
        </v-col>
        <v-col md="3">
           Number of updates: {{this.crudStats.updateCount}}
        </v-col>
        <v-col md="3">
          Number of deletions: {{this.crudStats.deleteCount}}
        </v-col>
        <v-col md="3">
          Number of posts retrieved: {{this.crudStats.retrieveCount}}
        </v-col>
     </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      crudStats: (state) => (state.crudStats.crudStats),
    }),
  },
};
</script>
