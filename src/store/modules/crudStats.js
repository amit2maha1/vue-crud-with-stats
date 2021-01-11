const state = {
  crudStats: {
    createCount: 0, retrieveCount: 0, updateCount: 0, deleteCount: 0,
  },
};
/* eslint-disable */
const mutations = {
  incrementCreate: (state, createIncrement) => {
    state.crudStats.createCount += parseInt(createIncrement);
  },
  incrementUpdate: (state, updateIncrement) => {
    state.crudStats.updateCount += parseInt(updateIncrement);
  },
  incrementDelete: (state, deleteIncrement) => {
    state.crudStats.deleteCount += parseInt(deleteIncrement);
  },
  incrementRetrieve: (state, retrieveIncrement) => {
    state.crudStats.retrieveCount += parseInt(retrieveIncrement);
  },
};
/* eslint-enable */
const actions = {
  storeCreateIncrement: ({ commit }, createIncrement) => {
    commit('incrementCreate', createIncrement);
  },
  storeUpdateIncrement: ({ commit }, updateIncrement) => {
    commit('incrementUpdate', updateIncrement);
  },
  storeDeleteIncrement: ({ commit }, deleteIncrement) => {
    commit('incrementDelete', deleteIncrement);
  },
  storeRetrieveIncrement: ({ commit }, retrieveIncrement) => {
    commit('incrementRetrieve', retrieveIncrement);
  },
};
export default {
  state,
  mutations,
  actions,
};
