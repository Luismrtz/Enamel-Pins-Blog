<template>

<!--//? temporary -->
  <div class="post-view" >
    <div class="container quillWrapper">
      <h2>Enamel test blog</h2>
      <h4>Posted on: January, 14, 2012</h4>
      <img src="../assets/blogCards/nightFroog.jpg" alt="" />
      <div class="post-content ql-editor" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus similique eum!</div>
    </div>
  </div>
  <!-- <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
    </div>
  </div> -->
</template>

<script>
export default {
      name: "ViewBlog",

}
</script>

<style lang="scss">


.post-view {

  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }


  min-height: 100%;
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }
  .ql-editor {
    padding: 0;
  }
  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }
  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>