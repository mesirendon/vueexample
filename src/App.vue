<template>
  <div id="app" class="container-fluid">
    <top/>
    <div class="container">
      <div v-if="login">
        <h4>Hola Juan</h4>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Top from '@/components/menu/Top.vue';

export default {
  name: 'App',
  computed: {
    ...mapState({
      login: (state) => state.Session.login,
    }),
  },
  components: {
    Top,
  },
};
</script>
