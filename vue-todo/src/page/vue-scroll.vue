<template lang="html">
  <div class="box">
    <div
     class="hacker-news-item"
     v-for="(item, $index) in list"
     :key="$index"
     :data-num="$index + 1">
     <a target="_blank" :href="item.url" v-text="item.title"></a>
     <p>
       <span v-text="item.points"></span>
       points by
       <a
         target="_blank"
         :href="`https://news.ycombinator.com/user?id=${item.author}`"
         v-text="item.author"></a>
       |
       <a
         target="_blank"
         :href="`https://news.ycombinator.com/item?id=${item.objectID}`"
         v-text="`${item.num_comments} comments`"></a>
     </p>
   </div>

   <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";

const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
export default {
  components: {
    InfiniteLoading
  },
  data() {
    return {
      page: 1,
      list: []
    };
  },
  mounted() {
    // axios
    //   .get(api, {
    //     params: {
    //       page: this.page
    //     }
    //   })
    //   .then(({ data }) => {
    //     if (data.hits.length) {
    //       this.list.push(...data.hits);
    //     } else {
    //     }
    //   });
  },
  methods: {
    infiniteHandler($state) {
      axios
        .get(api, {
          params: {
            page: this.page
          }
        })
        .then(({ data }) => {
          if (this.list.length <= 60) {
            this.page += 1;
            this.list.push(...data.hits);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  }
};
</script>

<style lang="css">
.box{
  height: 500px;
  position: fixed;
  top:0;
  width: 500px;
  margin: 0 auto;
  overflow: scroll;
}
</style>
