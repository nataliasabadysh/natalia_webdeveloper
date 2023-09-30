export const api = Object.freeze({
  users: {
    fetch: () => {
      return fetch(`${'URL'}/user`, {
        method: 'GET',
      });
    },
  },
});
