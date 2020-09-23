function Alert(state, type) {
  state(type);
  setTimeout(() => {
    state(null);
  }, 2000);
}

export { Alert };
