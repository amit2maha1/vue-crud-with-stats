<template>
  <div>
    <v-row>
      <v-snackbar
      v-model="retrieveErrorSnack"
      timeout="2000"
      color="red accent-3"
    >
    <span class="white--text"> Something went wrong</span>
         </v-snackbar>
      <v-col md="4" offset-md="4">
        <v-card class="mx-auto my-12" max-width="374">
          <v-card-text>Click to retrieve all posts</v-card-text>
          <v-card-actions>
            <v-btn
              text
              @click="retrieveAll"
              color="primary"
              outlined
              block
              :loading="retrieveAllLoading"
            >
              Retrieve All Posts
            </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-text>Click to retrieve by ID</v-card-text>
          <v-card-text>
            <v-text-field
              v-model="postId"
              label="Post Id (example 1,2,3)"
              required
              outlined
              dense
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              @click="retrieveById"
              color="primary"
              outlined
              block
              :loading="retrieveByIdLoading"
            >
              Retrieve Post By ID
            </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-text>
            <div v-for="data in allData" :key="data.id" class="mt-5">
              <v-card>
                <v-card-text>
                 Post Id: {{ data.id }}
                </v-card-text>
                <v-card-text>
                  {{ data.title }}
                </v-card-text>
                <v-card-text>
                  {{ data.body }}
                </v-card-text>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      retrieveAllLoading: false,
      allData: [],
      postId: 1,
      retrieveByIdLoading: false,
      singlePostData: [],
      retrieveErrorSnack: false,
    };
  },
  computed: {
    ...mapState({
      crudStats: (state) => (state.crudStats.crudStats),
    }),
  },
  methods: {
    ...mapActions(['storeRetrieveIncrement']),
    retrieveAll() {
      this.retrieveAllLoading = true;
      this.$axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          this.allData = res.data.slice(
            Math.floor(Math.random() * Math.floor(20)),
            Math.floor(Math.random() * Math.floor(99)),
          );
          this.storeRetrieveIncrement(this.allData.length);
          this.retrieveAllLoading = false;
        });
    },
    retrieveById() {
      this.retrieveByIdLoading = true;
      this.$axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
        .then((res) => {
          this.allData = [res.data];
          this.storeRetrieveIncrement(this.allData.length);
          this.retrieveByIdLoading = false;
        }).catch(() => {
          this.retrieveErrorSnack = true;
          this.retrieveByIdLoading = false;
        });
    },
  },
};
</script>
