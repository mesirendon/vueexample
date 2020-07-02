<template>
  <div>
    <h1>{{news.title}}</h1>
    <p>{{news.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>
