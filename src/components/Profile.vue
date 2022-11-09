<template>
  <!-- <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    > -->
  <el-card style="margin-bottom: 20px">
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
          alt=""
        /> -->
        <SvgIcon class="icon-background-style" name="peopleBackground" />
      </el-col>
      <el-col :span="18" style="padding: 14px">
        <el-row :gutter="20">
          <el-col :span="20">
            <span>Wangmeng Zuo</span>
          </el-col>
          <el-col :span="4">
            <el-button text class="button">Follow</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="font-size: 14px">
          <el-col :span="8">
            <span>H-index:</span>
          </el-col>
          <el-col :span="8">
            <span>Paper:</span>
          </el-col>
          <el-col :span="8">
            <span>Citation:</span>
          </el-col>
        </el-row>
        <div style="font-size: 12px">
          <el-row :gutter="20" style="margin-top: 10px">
            <el-col :span="2">
              <SvgIcon class="icon-style" name="professor" />
            </el-col>
            <el-col :span="20">
              <span>Professor</span>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px">
            <el-col :span="2">
              <SvgIcon class="icon-style" name="school" />
            </el-col>
            <el-col :span="20">
              <span
                >School of Computer Science and Technology.Harbin Institute of
                Technology</span
              >
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 10px">
            <el-col :span="2">
              <SvgIcon class="icon-style" name="research" />
            </el-col>
            <el-col :span="20">
              <span
                >Search area:RecognitionFeature ExtractionImage
                RestorationImage</span
              >
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
  <!-- </el-col>
  </el-row> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "@/icon/SvgIcon.vue";

defineProps<{
  name: string;
  follow: number;
  H_index: number;
  paper: number;
  citation: number;
  occupation: string;
  company: string;
  search_area: string;
  avatar: string;
}>();

const currentDate = ref(new Date());
</script>
<style>
.time {
  font-size: 12px;
  color: #999;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.icon-style {
  cursor: pointer;
  font-size: 18px;
  vertical-align: middle;
}
.icon-background-style {
  cursor: pointer;
  font-size: 50px;
  vertical-align: middle;
  width: 100%;
  height:100%;
  display: block;
}
</style>
<style scoped></style>
