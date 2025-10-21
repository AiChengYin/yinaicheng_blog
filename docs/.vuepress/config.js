module.exports = {
    port: "8080",
    dest: ".site",
    base: "/yinaicheng_blog/",
    title: "IT技术分享",
    description: "IT技术分享",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "印爱成的IT技术分享",
            description: "算法、并发编程、分布式、中间件、关系型数据库、云原生..."
        }
    },
    extendMarkdown(md) {
        md.set({ html: true });
        md.use(require("markdown-it-katex"));
    },
    head: [
        ["link", {rel: "icon", href: `/myWebStie.ico`}],
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "印爱成"}],
        ["meta", {name: "title", content: "IT技术分享"}],
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
        ["meta", {
            name: "keywords",
            content: "算法、并发编程、分布式、中间件、关系型数据库、云原生..."
        }],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: '/js/jquery.min.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: '/js/global.js',
            }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
    ],
    plugins: [
        ['@vuepress/medium-zoom', {
            selector: 'img:not(.nozoom)',
            options: {
                margin: 16
            }
        }],
        ['vuepress-plugin-code-copy', {
            align: 'bottom',
            color: '#3eaf7c',
            successText: '哈喽: 代码已经复制到剪贴板'
        }],
        ['img-lazy', {}],
        ["vuepress-plugin-tags", {
            type: 'default', // 标签预定义样式
            color: '#42b983',  // 标签字体颜色
            border: '1px solid #e2faef', // 标签边框颜色
            backgroundColor: '#f0faf5', // 标签背景颜色
            selector: '.page .content__default h1' // ^v1.0.1 你要将此标签渲染挂载到哪个元素后面？默认是第一个 H1 标签后面；
        }],

    ],
    themeConfig: {
        sidebarDepth: 0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                nav: [

                    {
                        text: '算法与数据结构',
                        items: [
                            {
                                text: '算法',
                                link: '/md/算法与数据结构/算法/1.算法概述.md'
                            },
                            {
                                text: '数据结构',
                                link: '/md/算法与数据结构/数据结构/1.数据结构概述.md'
                            },
                        ]
                    },

                    {
                        text: '分布式消息中间件',
                        items: [
                            {
                                text: 'ActiveMQ',
                                link: '/md/分布式消息中间件/ActiveMQ/1.JMS概述.md'
                            },
                        ]
                    },

                    {
                        text: '负载均衡中间件',
                        items: [
                            {
                                text: 'Nginx',
                                link: '/md/负载均衡中间件/Nginx/1.Nginx负载均衡.md'
                            },
                        ]
                    },

                    {
                        text: '分布式文件存储',
                        items: [
                            {
                                text: 'MinIO',
                                link: '/md/分布式文件存储/MinIO/1.介绍.md'
                            },
                        ]
                    },


                    {
                        text: '关系型数据库',
                        items: [
                            {
                                text: 'MySQL',
                                link: '/md/关系型数据库/Mysql/1.MySQL简介.md',
                            },
                        ]
                    },

                    {
                        text: '多线程并发编程',
                        items: [
                            {
                                text: 'Java基础',
                                link: '/md/多线程并发编程/Java基础/1.Java程序运行原理分析.md'
                            },
                        ]
                    },

                    {
                        text: '高并发网络编程',
                        items: [
                            {
                                text: 'Java网络编程',
                                link: '/md/高并发网络编程/Java网络编程/1.TCP_UDP协议.md'
                            },
                        ]
                    },

                    {
                        text: '框架',
                        items: [
                            {
                                text: 'Spring',
                                link: '/md/框架/Spring框架/Spring介绍.md'
                            },
                        ]
                    },

                    {
                        text: '代码版本控制',
                        items: [
                            {
                                text: 'Git',
                                link: '/md/代码版本控制/Git/1.Git版本控制入门.md'
                            },
                            {
                                text: 'JitPack',
                                link: '/md/代码版本控制/JitPack/JitPack.md'
                            },
                        ]
                    },

                    {
                        text: '前端',
                        items: [
                            {
                                text: '准备工作',
                                link: '/md/前端/准备工作/使用nvm管理不同版本的 node与npm.md'
                            },
                            {
                                text: '前后端分离与工程化',
                                link: '/md/前端/前后端分离与工程化/前后端分离与工程化.md'
                            },
                            {
                                text: '前端性能优化',
                                link: '/md/前端/前端性能优化/前端性能优化.md'
                            },
                            {
                                text: '基础前端技术',
                                link: '/md/前端/基础前端技术/基础前端技术.md'
                            },
                            {
                                text: '框架和工具',
                                link: '/md/前端/框架和工具/框架和工具.md'
                            },
                            {
                                text: '浏览器兼容性与安全性',
                                link: '/md/前端/浏览器兼容性与安全性/浏览器兼容性与安全性.md'
                            },
                        ]
                    },

                    {
                        text: '后端',
                        items: [
                            {
                                text: 'Java开发经验',
                                link: '/md/后端/Java开发经验/Java开发经验.md'
                            },
                            {
                                text: '框架和工具链',
                                link: '/md/后端/框架和工具链/框架和工具链.md'
                            },
                            {
                                text: '关系型数据库',
                                link: '/md/后端/关系型数据库/关系型数据库.md'
                            },
                            {
                                text: 'NoSQL数据库',
                                link: '/md/后端/NoSQL数据库/NoSQL数据库.md'
                            },
                            {
                                text: 'RESTful的API',
                                link: '/md/后端/RESTful的API/RESTful的API.md'
                            },
                            {
                                text: '分布式系统及微服务架构',
                                link: '/md/后端/分布式系统及微服务架构/分布式系统及微服务架构.md'
                            },
                            {
                                text: '消息队列系统',
                                link: '/md/后端/消息队列系统/消息队列系统.md'
                            },
                        ]
                    },

                    {
                        text: '面试',
                        items: [
                            {
                                text: '华为',
                                link: '/md/面试/华为/机考/注意事项.md'
                            },
                        ]
                    },

                    {
                        text: 'Linux',
                        items: [
                            {
                                text: 'Centos',
                                link: '/md/Linux/Centos/常用操作/常用操作.md'
                            },
                            {
                                text: 'Ubuntu',
                                link: '/md/Linux/Ubuntu/常用操作/常用操作.md'
                            },
                        ]
                    },

                    {
                        text: 'AI',
                        items: [
                            {
                                text: 'ChatGPT',
                                link: '/md/AI/ChatGPT/ChatGPT使用.md'
                            },
                        ]
                    },

                    {
                        text: '外语',
                        items: [
                            {
                                text: '新标日初级',
                                link: '/md/外语/日语/新标日初级/1.第一课.md'
                            },
                            {
                                text: '日语学习语法全掌握',
                                link: '/md/外语/日语/日语学习语法全掌握/1.名词谓语句.md'
                            },
                            {
                                text: 'TRYN2语法必备',
                                link: '/md/外语/日语/TRYN2语法必备/1.名词+につき.md'
                            },
                        ]
                    },

                    {
                        text: 'プロジェクト紹介',
                        items: [
                            {
                                text: '上海咪啰信息科技有限公司',
                                link: '/md/プロジェクト紹介/上海咪啰信息科技有限公司/1.洋⼭四期⼤数据運営効率分析システム.md'
                            },
                            {
                                text: '⽹易（杭州）⽹络有限公司',
                                link: '/md/プロジェクト紹介/⽹易（杭州）⽹络有限公司/1.⽹易数帆（クラウド公共プラットフォーム）CMS∕ミニアプリ開発.md'
                            },
                        ]
                    },

                ],
                sidebar: {
                    "/md/算法与数据结构/": getAlgorithmDataStructure(),
                    "/md/分布式消息中间件/": getMessageQueue(),
                    "/md/负载均衡中间件/": getLoadBalance(),
                    "/md/分布式文件存储/": getFileStorage(),
                    "/md/关系型数据库/": getRelationalDatabase(),
                    "/md/面试/": getInterview(),
                    "/md/多线程并发编程/": getMultithreadedConcurrentProgramme(),
                    "/md/高并发网络编程/": getHighConcurrencyNetworkProgremme(),
                    "/md/代码版本控制/": getCodeVersionControl(),
                    "/md/框架/": getFrame(),
                    "/md/前端/": getFrontEnd(),
                    "/md/后端/": getBackEnd(),
                    "/md/Linux/": getLinux(),
                    "/md/AI/": getAI(),
                    "/md/外语/": getForeignLanguages(),
                    "/md/プロジェクト紹介/": getJobProject(),
                }
            }
        }
    }
};

function getAlgorithmDataStructure() {
    return [
        {
            title: "算法",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "算法/1.算法概述.md",
                "算法/2.线性查找法.md",
                "算法/3.循环不变量.md",
                "算法/4.复杂度分析.md",
                "算法/5.测试算法性能.md",
                "算法/6.选择排序法.md",
                "算法/7.插入排序法.md",
            ]
        },
        {
            title: "数据结构",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "数据结构/1.数据结构概述.md",
                "数据结构/2.数组.md",
            ]
        }
    ]
}

function getMessageQueue(){
    return [
        {
            title: "ActiveMQ",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "ActiveMQ/1.JMS概述.md",
                "ActiveMQ/2.ActiveMQ安装.md",
                "ActiveMQ/3.ActiveMQ使用.md",
            ]
        }
    ]
}

function getLoadBalance(){
    return [
        {
            title: "Nginx",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Nginx/1.Nginx负载均衡.md",
            ]
        }
    ]
}

function getFileStorage(){
    return [
        {
            title: "MinIO",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "MinIO/1.介绍.md",
                "MinIO/2.安装.md",
            ]
        }
    ]
}

function getRelationalDatabase(){
    return [
        {
            title: "关系型数据库",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Mysql/1.MySQL简介.md",
                "Mysql/2.MySQL存储引擎.md",
                "Mysql/3.MySQL索引.md",
                "Mysql/4.MySQL锁.md",
                "Mysql/5.MySQL事务.md",
                "Mysql/6.MySQL日志.md",
                "Mysql/7.MySQL Explain执行计划详解.md",
                "Mysql/8.MySQL性能排查.md",
                "Mysql/9.数据库设计规范.md",
                "Mysql/10.常用的SQL语句.md",
                "Mysql/11.其他.md",
            ]
        }
    ]
}

function getInterview() {
    return [
        {
            title: "华为机考",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "华为/机考/注意事项.md",
                "华为/机考/勾股元数组.md",
                "华为/机考/从两数组中取出k对元素并求和并计算和的最小值.md",
                "华为/机考/N阶方阵里所有数的和.md",
                "华为/机考/TLV编码解码信元.md",
                "华为/机考/台阶跳跃方式统计.md",
                "华为/机考/GPU最少执行完成任务时间.md",
                "华为/机考/排序身高差.md",
            ]
        }
    ]
}

function getMultithreadedConcurrentProgramme() {
    return [
        {
            title: "Java基础",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Java基础/1.Java程序运行原理分析.md",
                "Java基础/2.线程状态.md",
                "Java基础/3.线程中止.md"
            ]
        }
    ]
}

function getHighConcurrencyNetworkProgremme() {
    return [
        {
            title: "Java网络编程",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Java网络编程/1.TCP_UDP协议.md",
                "Java网络编程/2.HTTP协议.md",
            ]
        }
    ]
}

function getCodeVersionControl() {
    return [
        {
            title: "Git",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Git/1.Git版本控制入门.md",
                "Git/2.Git常用操作.md",
                "Git/3.Gitea安装.md"
            ]
        },
        {
            title: "JitPack",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "JitPack/JitPack.md",
            ]
        }
    ]
}

function getFrame(){
    return [
        {
            title: "Spring",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Spring框架/Spring介绍.md",
                "Spring框架/Spring快速入门.md",
                "Spring框架/加载Spring容器的三种方式.md",
                "Spring框架/装配Bean（xml方式）.md",
                "Spring框架/bean的生命周期.md",
                "Spring框架/Spring事务.md",
                "Spring框架/常用开发技能.md",
            ]
        }
    ]
}

function getFrontEnd(){
    return [
        {
            title: "准备工作",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "准备工作/使用nvm管理不同版本的 node与npm.md",
                "准备工作/使用markdown编写ppt.md",
                "准备工作/服务端解决跨域调用问题.md",
                "准备工作/跨域传递cookie.md",
            ]
        },
        {
            title: "前后端分离与工程化",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "前后端分离与工程化/前后端分离与工程化.md",
            ]
        },
        {
            title: "前端性能优化",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "前端性能优化/前端性能优化.md",
            ]
        },
        {
            title: "基础前端技术",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "基础前端技术/基础前端技术.md",
            ]
        },
        {
            title: "框架和工具",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "框架和工具/框架和工具.md",
            ]
        },
        {
            title: "浏览器兼容性与安全性",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "浏览器兼容性与安全性/浏览器兼容性与安全性.md",
            ]
        },
    ]
}

function getBackEnd(){
    return [
        {
            title: "Java开发经验",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Java开发经验/Java开发经验.md",
            ]
        },
        {
            title: "NoSQL数据库",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "NoSQL数据库/NoSQL数据库.md",
            ]
        },
        {
            title: "关系型数据库",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "关系型数据库/关系型数据库.md",
            ]
        },
        {
            title: "框架和工具链",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "框架和工具链/框架和工具链.md",
            ]
        },
        {
            title: "RESTful的API",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "RESTful的API/RESTful的API.md",
            ]
        },
        {
            title: "RESTful的API",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "RESTful的API/RESTful的API.md",
            ]
        },
        {
            title: "分布式系统及微服务架构",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "分布式系统及微服务架构/分布式系统及微服务架构.md",
            ]
        },
        {
            title: "消息队列系统",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "消息队列系统/消息队列系统.md",
            ]
        },
    ]
}

function getLinux(){
    return [
        {
            title: "Centos",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Centos/常用操作/常用操作.md",
                "Centos/常用软件安装/Maven.md",
                "Centos/常用软件安装/Zookeeper.md",
                "Centos/常用软件安装/Apollo.md",
                "Centos/常用软件安装/Nacos.md",
                "Centos/常用软件安装/XXL-JOB.md",
                "Centos/常用软件安装/宝塔面板.md",
            ]
        },
        {
            title: "Ubuntu",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Ubuntu/常用操作/常用操作.md",
                "Ubuntu/常用软件安装/docker.md",
                "Ubuntu/常用软件安装/nvm & node.md",
                "Ubuntu/常用软件安装/openvpn.md",
            ]
        }
    ]
}

function getAI(){
    return [
        {
            title: "ChatGPT",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "ChatGPT/ChatGPT使用.md",
            ]
        }
    ]
}

function getForeignLanguages(){
    return [
        {
            title: "日语新标日初级",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "日语/新标日初级/1.第一课.md",
                "日语/新标日初级/2.第二课.md",
                "日语/新标日初级/3.第三课.md",
                "日语/新标日初级/4.第四课.md",
                "日语/新标日初级/5.第五课.md",
                "日语/新标日初级/6.第六课.md",
                "日语/新标日初级/7.第七课.md",
                "日语/新标日初级/8.第八课.md",
                "日语/新标日初级/9.第九课.md",
                "日语/新标日初级/10.第十课.md",
                "日语/新标日初级/11.第十一课.md",
                "日语/新标日初级/12.第十二课.md",
                "日语/新标日初级/13.第十三课.md",
                "日语/新标日初级/14.第十四课.md",
                "日语/新标日初级/15.第十五课.md",
                "日语/新标日初级/16.第十六课.md",
                "日语/新标日初级/17.第十七课.md",
                "日语/新标日初级/18.第十八课.md",
                "日语/新标日初级/19.第十九课.md",
                "日语/新标日初级/20.第二十课.md",
                "日语/新标日初级/21.第二十一课.md",
                "日语/新标日初级/22.第二十二课.md",
                "日语/新标日初级/23.第二十三课.md",
                "日语/新标日初级/24.第二十四课.md",
                "日语/新标日初级/25.第二十五课.md",
                "日语/新标日初级/26.第二十六课.md",
                "日语/新标日初级/27.第二十七课.md",
                "日语/新标日初级/28.第二十八课.md",
                "日语/新标日初级/29.第二十九课.md",
                "日语/新标日初级/30.第三十课.md",
                "日语/新标日初级/31.第三十一课.md",
                "日语/新标日初级/32.第三十二课.md",
                "日语/新标日初级/33.第三十三课.md",
                "日语/新标日初级/34.第三十四课.md",
                "日语/新标日初级/35.第三十五课.md",
                "日语/新标日初级/36.第三十六课.md",
                "日语/新标日初级/37.第三十七课.md",
                "日语/新标日初级/38.第三十八课.md",
                "日语/新标日初级/39.第三十九课.md",
                "日语/新标日初级/40.第四十课.md",
                "日语/新标日初级/单词汇总.md",
            ]
        },
        {
            title: "日语学习语法全掌握",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "日语/日语学习语法全掌握/1.名词谓语句.md",
            ]
        },
        {
            title: "TRYN2语法必备",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "日语/TRYN2语法必备/1.名词+につき.md",
            ]
        }
    ]
}

function getJobProject(){
    return [
        {
            title: "上海咪啰信息科技有限公司",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "上海咪啰信息科技有限公司/1.洋⼭四期⼤数据運営効率分析システム.md",
                "上海咪啰信息科技有限公司/2.三叉戟（Trident）智能集運プラットフォーム.md",
                "上海咪啰信息科技有限公司/3.⾃動回帰テスト⽀援ツール開発.md",
            ]
        },
        {
            title: "⽹易（杭州）⽹络有限公司",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "⽹易（杭州）⽹络有限公司/1.⽹易数帆（クラウド公共プラットフォーム）CMS∕ミニアプリ開発.md",
                "⽹易（杭州）⽹络有限公司/2.⽹易クラウド 計費‧出帳システム開発.md",
            ]
        }
    ]
}

