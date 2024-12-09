<script setup>

</script>
<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form Submitted with Data:', this.formData);
      // You can reset the form if needed:
      this.formData.email = '';
      this.formData.password = '';
    },
  },
};
</script>

<template>
<h1>Login</h1>
  <div id="login-container">
  <form id="login-form" @submit.prevent="handleSubmit">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="formData.email" required>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" v-model="formData.password" required>
    <button type="submit">Login</button>
  </form>
  </div>

</template>

<style >
#login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

#login-form {
  border: 1px solid #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

