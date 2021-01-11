<template>
  <v-app>
<div>
<div >
  <v-row >
    <v-col md="4" offset-md="4">
    <v-tabs >
    <v-tab to="/create">Create</v-tab>
    <v-tab to="/retrieve">Retrieve</v-tab>
    <v-tab to="/update">Update</v-tab>
    <v-tab to="/delete">Delete</v-tab>
    <v-tab to="/stats">Stats</v-tab>
  </v-tabs>
    </v-col>
  </v-row>

</div >
<div>
  <router-view></router-view>
</div>
  </div>
    </v-app>
</template>

<script>

</script>
<style>
.v-application--wrap {
  background: #f4f8ff;
}
</style>
