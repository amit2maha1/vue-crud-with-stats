import Vue from 'vue';
import Vuex from 'vuex';

import crudStats from './modules/crudStats';

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      crudStats,
    },

  });

  return Store;
}
