const user = {
  actions: {
    refreshToken() {
      this.$axios.post("/refreshToken").then(response => {
        const ttl = Math.round(Date.now() / 1000 + response.data.ttl);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("ttl", ttl);
      });
    }
  }
};

export default user;
