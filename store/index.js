export const state = () => ({
  contato: false,
  portfolio: false
});
export const mutations = {
  contatoToggle(state) {
    state.contato = !state.contato;
  },
  portfolioToggle(state) {
    state.portfolio = !state.portfolio;
  }
};
