export const state = () => ({
  contato: false,
  header: false
});
export const mutations = {
  contatoToggle(state) {
    state.contato = !state.contato;
  },
  headerToggle(state) {
    state.header = !state.header;
  },
  setHeader(state, header) {
    state.header = header;
  }
};
