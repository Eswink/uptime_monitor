window.Config = {

  // 显示标题
  SiteName: 'Eswlnk Monitor',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm795761852-2516b69ae7327a52ea6b0621',//SGP
    'm795761854-650d59be5bc833e71f49d07d',//NLD
    'm795761839-99ed45d23192444bca40e293',//HK1
    'm795761846-50c3d169ef35597ebb02247f',//HK2
    'm795761843-449ccfc35e7f7903f954fcc4',//HK3
    'm795761858-951dccf83020a348dda35fdf'//CN
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://status.eswlnk.com/'
    },
    {
      text: '论坛',
      url: 'https://bbs.eswlnk.com/'
    },
    {
      text: '博客',
      url: 'https://blog.eswlnk.com/'
    },
  ],
};
