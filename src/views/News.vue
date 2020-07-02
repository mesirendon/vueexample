<template>
  <div>
    <h1>News</h1>
    <ul v-if="!queryProps">
      <li v-for="(noti, idx) in news" :key="idx">
        <router-link :to="{name: 'news', query: {id: noti.id}}">{{noti.title}}</router-link>
      </li>
    </ul>
    <div v-else>
      <news-detail :news="selectedNews"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NewsDetail from '@/components/news/NewsDetail.vue';

export default {
  name: 'News',
  data() {
    return {
      news: [
        {
          title: 'Noti 1',
          text: 'Noticia uno',
          id: 1,
        },
        {
          title: 'Noti 2',
          text: 'Noticia dos',
          id: 2,
        }, {
          title: 'Noti 3',
          text: 'Noticia tres',
          id: 3,
        }, {
          title: 'Noti 4',
          text: 'Noticia cuatro',
          id: 4,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      query: (state) => state.route.query,
    }),
    queryProps() {
      return Object.keys(this.query).length;
    },
    selectedNews() {
      return this.news.filter((n) => n.id === Number(this.query.id)).shift();
    },
  },
  components: {
    NewsDetail,
  },
};
</script>

<style scoped>

</style>
