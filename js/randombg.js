//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/img/1.jfif)",
  "url(/img/2.jfif)",
  "url(/img/3.jfif)",
  "url(/img/4.jfif)",
  "url(/img/5.jfif)",
  "url(/img/6.jfif)",
  "url(/img/7.jfif)",
  "url(/img/8.jfif)",
  "url(/img/9.jfif)",
  "url(/img/10.jfif)",
  "url(/img/11.jfif)",
  "url(/img/12.jfif)",
  "url(/img/13.jfif)",
  "url(/img/14.jfif)",
  "url(/img/15.jfif)",
  "url(/img/16.jfif)",
  "url(/img/17.jfif)",
  "url(/img/18.jfif)",
  "url(/img/19.jfif)",
  "url(/img/20.jfif)",
  "url(/img/21.jfif)",
  "url(/img/22.jfif)",
  "url(/img/23.jfif)",
  "url(/img/24.jfif)",
  "url(/img/25.jfif)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
  "url(/img/bg1.JPG)",
  "url(/img/bg2.jpg)",
  "url(/img/bg3.jpg)",
  "url(/img/bg4.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];