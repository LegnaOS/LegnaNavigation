# Legna快捷导航

此项目主站https://legna.cn

`本项目为了更简单更快捷的帮助计算机初阶使用者，实现从访问到下载最大不超过三步（访问→搜索→下载），并且源链接均来自各大官网，并通过@KrunkZhou的免数据库爬虫方案实现内容自动更新，链接更新部分因技术原因，暂无开源计划`

## 项目打包

需要具备安装了`Node.js`环境的PC设备实现打包运行

打包运行要`自行引用`所需的`node_modules`

请在项目文件夹下使用`npm run build`自行打包运行

打包后的文件在项目路径下的`dist`文件夹中，将`全部内容`上传至服务器即可

## 项目内容说明

Public路径
   `data.json`为导航的核心配置文件，全部内容均通过json进行配置，`data.json`为站点总配置文件，包含了左侧分页设定、网站标题、页脚、展现tab等内容

## JSON结构
其中重要的内容需要包括以下字段

顶层的`tittle`字段：网站页面标题

顶层的`activeNav`字段：已经处于激活的顶部导航

顶层的`asideTitle`字段：侧边栏导航的统一命名

顶层的`footer`字段：版权、页脚内容

包含节内的`tittle`字段：`跳转链接`对应的文本标签

包含节内的`url`字段：对应的`跳转链接`支持全部链接类型的跳转

包含节内的`remark`字段：当存在`remark`的时候，点击内容会以`Alert`的方式弹出`remark`中的内容

`nav`节：顶部导航分类链接`可自由追加`

`aside`节：侧边栏导航`链接`,`可自由追加`

`tabs`节：卡片导航的主体内容,`可自由追加`,`其中的link全部会被渲染`

`tabs`节中的`name`字段：卡片导航的`选项卡内容`，`名称互斥，不要重复`

`tabs`节中的`locked`字段：支持`随机密码加密访问`的选项卡开关，值为`布尔型`

`tabs`节中的`links`字段：与卡片导航主题内容一致



按照导航约定开发的内容，`完整JSON结构`如下
```
{
    "title": "Legna",
    "activeNav": "应用导航",
    "asideTitle": "主站导航",
    "footer": "Copyright © 2021 By Legna ",
    "nav": [{
            "title": "Legna主站",
            "url": "https://www.brighost.com/",
            "remark": "这是顶部NavAlert提示"
        }
    ],
    "aside": [{
            "title": "Legna主站",
            "url": "https://www.brighost.com/",
            "remark": "这是边栏的Alert提示"
        }
    ],
    "tabs": [{
            "name": "选项卡1",
            "locked": false,
            "links": [{
                    "title": "百度",
                    "url": "http://baidu.com",
                    "remark": "这是点击百度的Alert提示"
                }
            ]
        }
    ]
}
```


