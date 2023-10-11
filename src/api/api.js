export const api = Object.freeze({
  users: {
    fetch: () => {
      return fetch(`${'URL'}/user`, {
        method: 'GET',
      });
    },
  },
});

// export const sendContactForm = async (data) =>
//   fetch("/api/contact", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//   }).then((res) => {
//     if (!res.ok) throw new Error("Failed to send message");
//     return res.json();
//   });
