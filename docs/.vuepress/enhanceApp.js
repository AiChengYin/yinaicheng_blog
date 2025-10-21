export default ({ router }) => {
  router.afterEach((to) => {
    if (to.fullPath.includes('/project')) {
      const target = 'https://aichengyin.github.io/yinaicheng_blog/md/プロジェクト紹介/上海咪啰信息科技有限公司/1.洋⼭四期⼤数据運営効率分析システム.html';
      window.location.href = encodeURI(target);
    }
  });
};
