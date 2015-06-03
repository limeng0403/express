###express 4.x

因为express构建后，缺少很多基础的东西，于是个人做了一个添加基础功能的express项目，只要下载后npm install便可以使用，修改内容如下：

1、可以使用html/ejs文件为模板文件，如果不想使用html，res.render时直接传入没有扩展名的模板文件名即可。
2、增加了express-session中间件，没有深度配置，如果要配置，可以到npmjs.org官网查找express-session文档。
3、增加了multer中间件，可以使用enctype="multipart/form-data"上传文件，详细说明请到npmjs.org官网查找multer文档。

演示文件：
1、index.html，增加了登录用户名的欢迎显示。
2、login.html，登录后模板，可以跳转至首页查看session是否已经工作。
3、upload.html，上传文件后，文件基本信息展示页面。