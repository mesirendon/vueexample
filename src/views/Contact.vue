<template>
  <div>
    <div class="alert alert-success" role="alert" v-if="sent">
      <h4 class="alert-heading">Well done!</h4>
      <p>We got your request.</p>
      <hr>
      <p class="mb-0">We'll contact you as soon as possible.</p>
    </div>
    <form @submit.prevent="send" v-else>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" autocomplete="off" v-model="contact.name"
               required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" autocomplete="off"
               v-model="contact.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" class="form-control" id="phone" autocomplete="off" v-model="contact.phone"
               required>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      sent: false,
      error: false,
      contact: {
        name: null,
        email: null,
        phone: null,
      },
    };
  },
  watch: {
    sent(val) {
      setTimeout(() => {
        if (val) this.sent = false;
      }, 3000);
    },
  },
  methods: {
    send() {
      this.$fb.functions().httpsCallable('sendForm')({
        subject: 'New contact entry',
        text: `Please contact ${this.contact.name} at ${this.contact.email}. Their phone is ${this.contact.phone}`,
        html: `Please contact <strong>${this.contact.name}</strong> at <strong>${this.contact.email}</strong>.<br/>Their phone is <strong>${this.contact.phone}</strong>`,
      })
        .then(() => {
          this.sent = true;
        })
        .catch(() => {
          this.error = true;
        });
      this.name = null;
      this.email = null;
      this.phone = null;
    },
  },
};
</script>
