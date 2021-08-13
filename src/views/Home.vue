<template>
  <div class="home">
     <!--//? $emitting  from BlogPost -> HOME. [ex. similar to prop drilling func methods to get a response(as an argument), but starting from half way mark ]  refer to /ninja-tut-proj-2 &&  /simple-youtube-clone-hooks-->
             <!-- |  vs  |   -->
     <!--//? making these reusable by passing DOWN props FROM HOME -> BlogPost [ex. passing to banners] -->
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from '../components/BlogPost.vue'

export default {
  name: 'Home',
  components: { BlogPost},
    data() {
      return {
        welcomeScreen: {
          title: "GREETINGS",
          blogPost: 
          "This is a work-in-progress article about my soon-to-have enamel pin blogs.  ",
          welcomeScreen: true,
          photo: "avocado"
        },
        sampleBlogPost: [
          {
            title: "this is a TITLE",
            blogHTML: "This is a blog post title",
            blogCoverPhoto: "avocado",
          },
          {
            title: "this is a TITLE 2",
            blogHTML: "This is a blog post title 2",
            blogCoverPhoto: "salmon",
          },
        ],

      };
    }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>