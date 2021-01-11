<template>
  <div  >
     <v-row  >
         <v-snackbar
      v-model="createSnackBar"
      timeout="2000"
      color="green accent-3"
    >
    <span class="white--text"> Post successfully deleted</span>
         </v-snackbar>
            <v-snackbar
      v-model="errorSnackBar"
      timeout="2000"
      color="red accent-3"
    >
    <span class="white--text"> Something went wrong</span>
         </v-snackbar>
    <v-col md="4" offset-md="4" class="create_form">
Delete a post
 <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="createFormData.postId"
      :rules="postIdRules"
      label="Post Id (example: 1,2,3)"
      required
      outlined
      dense
    >
    <template v-slot:append class="text-red">
    <span class="red--text">*</span>
    </template>
    </v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="deleteFunction"
       :loading="createLoading"
    >
      delete
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
    </v-col>
     </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    errorSnackBar: false,
    createSnackBar: false,
    createLoading: false,
    createFormData: {},
    postIdRules: [
      (v) => !!v || 'Post id is required',
    ],
  }),
  computed: {
    ...mapState({
      crudStats: (state) => (state.crudStats.crudStats),
    }),
  },
  methods: {
    ...mapActions(['storeDeleteIncrement']),
    deleteFunction() {
      const validFormData = this.$refs.form.validate();
      if (validFormData) {
        this.createLoading = true;
        this.$axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.createFormData.postId}`).then(() => {
          this.storeDeleteIncrement(1);
          this.createSnackBar = true;
          this.createLoading = false;
        }).catch(() => {
          this.createLoading = false;
          this.errorSnackBar = true;
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style>
.create_form {
  background: white;
}
</style>
