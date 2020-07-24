<template>
  <div id="app" class="container-fluid">
    <top/>
    <div class="container">
      <div v-if="login">
        <h4>Hola Juan</h4>
      </div>
      <router-view/>
    </div>
    <modal/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Top from '@/components/menu/Top.vue';
import Modal from '@/components/home/Modal.vue';

export default {
  name: 'App',
  computed: {
    ...mapState({
      login: (state) => state.Session.login,
    }),
  },
  components: {
    Top,
    Modal,
  },
  mounted() {
    // eslint-disable-next-line no-undef
    $('#staticBackdrop').modal('show');
  },
};
</script>
