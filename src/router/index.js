import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "HelloWorld",
    //   component: () => import("@/view/HelloWorld")
    // },
    {
      path: "/",
      name: "search",
      component: () => import("@/view/search")
    },
    // {
    //   path: "/search",
    //   name: "search",
    //   component: () => import("@/view/search")
    // },
    {
      path: "/searchContent/:searchVal",
      name: "searchContent",
      component: () => import("@/view/searchContent")
    },
    {
      path: "/contentRead",
      name: "contentRead",
      component: () => import("@/view/contentRead")
    },
    {
      path: "/mindMapping",
      name: "mindMapping",
      component: () => import("@/view/mindMapping")
    },
    {
      path: "/relationNetwork",
      name: "relationNetwork",
      component: () => import("@/view/relationNetwork")
    }
  ]
});

router.afterEach(to => {
  console.log("333");
  window.scrollTo(0, 0);
});

export default router;
