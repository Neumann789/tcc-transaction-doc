export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'TccTransaction',
        children: [
          {
            title: 'TccTransaction是什么',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: 'TccTransaction2.0',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: '快速开始',
            opened: true,
            children: [
              {
                title: 'dashbord',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
