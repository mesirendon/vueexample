<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{name: 'home'}">Mi empresa</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'about'}">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'news'}">News</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More...
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://mesirendon.com" target="_blank">Mesi Rendon</a>
          </div>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" v-if="login"
                @click="signOut">
          Logout
        </button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" v-else @click="signIn">
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import * as constants from '@/store/constants';

export default {
  name: 'Top',
  computed: {
    ...mapState({
      login: (state) => state.Session.login,
    }),
  },
  methods: {
    ...mapMutations({
      signOut: constants.SESSION_SIGN_OUT,
      signIn: constants.SESSION_SIGN_IN,
    }),
  },
};
</script>
