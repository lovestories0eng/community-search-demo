<template>
  <div class="common-layout">
    <el-container style="width: 90%; margin: auto">
      <el-header class="flex-center">
        <HeadSearch class="head-search"></HeadSearch>
      </el-header>
      <el-container class="container">
        <el-aside width="50%">
          <el-row>
            <el-button type="info">Author</el-button>
            <el-button type="info">Paper</el-button>
          </el-row>
          <el-divider></el-divider>
          <el-row style="margin-top: 10px; margin-bottom: 10px">
            <el-button type="info">Relavance</el-button>
            <el-button type="info">H-indexs</el-button>
            <el-button type="info">Papers</el-button>
            <el-button type="info">Activity</el-button>
            <el-button type="info">Citation</el-button>
            <el-button type="info">Rising star</el-button>
          </el-row>
          <el-scrollbar ref="scrollbar" :style="scrollbarStyle">
            <Profile
              v-for="item in 20"
              :key="item"
              class="scrollbar-demo-item"
              >{{ item }}</Profile
            >
          </el-scrollbar>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeadSearch from "./components/HeadSearch.vue";
import Profile from "./components/Profile.vue";
import { ref, onMounted, reactive } from "vue";

let distanceToTop = ref(0);
const scrollbar = ref(null);

// 防抖
let resizeTag = ref(true);

let clientHeight = ref("");
let scrollbarStyle = reactive({
  height: "0px",
});

let papers = reactive([]);

function scrollbarHeightChange(dis: number): void {
  clientHeight.value = `${document.documentElement.clientHeight - dis}` + "px";
  scrollbarStyle.height = clientHeight.value;
}

onMounted(async () => {
  const data = await fetch("/author.json").then((res) => res.json());
  papers = data.hits.hits;
  console.log(papers);
  distanceToTop.value = (
    scrollbar.value! as any
  ).$el.getBoundingClientRect().top;
  scrollbarHeightChange(distanceToTop.value);

  window.onresize = () => {
    if (resizeTag.value) {
      scrollbarHeightChange(distanceToTop.value);
      console.log(scrollbarStyle.height);
      resizeTag.value = false;
    }
    setTimeout(() => {
      resizeTag.value = true;
    }, 1000);
  };
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .head-search {
    width: 60%;
  }
}

.container {
  margin-top: 25px;
}
.main-container {
}
.el-divider--horizontal {
  margin: 10px 0;

}
</style>
