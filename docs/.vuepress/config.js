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
        ['@vuepress/plugin-pwa', {
          serviceWorker: true,
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        }],
        ['vuepress-plugin-redirect', {
          redirectors: [
            {
              base: '/',
              alternative: '/md/プロジェクト紹介/上海咪啰信息科技有限公司/1.洋⼭四期⼤数据運営効率分析システム.html',
              redirects: [
                { from: '/project', to: '/md/プロジェクト紹介/上海咪啰信息科技有限公司/1.洋⼭四期⼤数据運営効率分析システム.html' },
              ]
            }
          ]
        }]

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
                                link: '/md/算法与データ構造/算法/1.算法概述.md'
                            },
                            {
                                text: '数据结构',
                                link: '/md/アルゴリズムとデータ構造/データ構造/1.データ構造概述.md'
                            },
                        ]
                    },

                    {
                        text: '分布式消息中间件',
                        items: [
                            {
                                text: 'ActiveMQ',
                                link: '/md/分散メッセージミドルウェア/ActiveMQ/1.JMS概述.md'
                            },
                        ]
                    },

                    {
                        text: '负载均衡中间件',
                        items: [
                            {
                                text: 'Nginx',
                                link: '/md/ロードバランスミドルウェア/Nginx/1.Nginxロードバランス.md'
                            },
                        ]
                    },

                    {
                        text: '分布式文件存储',
                        items: [
                            {
                                text: 'MinIO',
                                link: '/md/分散ファイルストレージ/MinIO/1.介紹.md'
                            },
                        ]
                    },


                    {
                        text: '关系型数据库',
                        items: [
                            {
                                text: 'MySQL',
                                link: '/md/リレーショナルデータベース/Mysql/1.MySQL简介.md',
                            },
                        ]
                    },

                    {
                        text: '多线程并发编程',
                        items: [
                            {
                                text: 'Java基础',
                                link: '/md/マルチスレッド並行プログラミング/Java基礎/1.Javaプログラム実行原理分析.md'
                            },
                        ]
                    },

                    {
                        text: '高并发网络编程',
                        items: [
                            {
                                text: 'Java网络编程',
                                link: '/md/ハイコンカレンシーネットワークプログラミング/Javaネットワークプログラミング/1.TCP_UDPプロトコル.md'
                            },
                        ]
                    },

                    {
                        text: '框架',
                        items: [
                            {
                                text: 'Spring',
                                link: '/md/フレームワーク/Springフレームワーク/Spring介紹.md'
                            },
                        ]
                    },

                    {
                        text: '代码版本控制',
                        items: [
                            {
                                text: 'Git',
                                link: '/md/コードバージョンコントロール/Git/1.Gitバージョンコントロール入門.md'
                            },
                            {
                                text: 'JitPack',
                                link: '/md/コードバージョンコントロール/JitPack/JitPack.md'
                            },
                        ]
                    },

                    {
                        text: '前端',
                        items: [
                            {
                                text: '准备工作',
                                link: '/md/フロントエンド/準備作業/使用nvm管理異なるバージョンの nodeとnpm.md'
                            },
                            {
                                text: '前后端分离与工程化',
                                link: '/md/フロントエンド/フロントエンドとバックエンドの分離とエンジニアリング/フロントエンドとバックエンドの分離とエンジニアリング.md'
                            },
                            {
                                text: '前端性能优化',
                                link: '/md/フロントエンド/フロントエンドパフォーマンス最適化/フロントエンドパフォーマンス最適化.md'
                            },
                            {
                                text: '基础前端技术',
                                link: '/md/フロントエンド/基本フロントエンド技術/基本フロントエンド技術.md'
                            },
                            {
                                text: 'フレームワークとツール',
                                link: '/md/フロントエンド/フレームワークとツール/フレームワークとツール.md'
                            },
                            {
                                text: 'ブラウザの互換性とセキュリティ',
                                link: '/md/フロントエンド/ブラウザの互換性とセキュリティ/ブラウザの互換性とセキュリティ.md'
                            },
                        ]
                    },

                    {
                        text: '后端',
                        items: [
                            {
                                text: 'Java開発経験',
                                link: '/md/バックエンド/Java開発経験/Java開発経験.md'
                            },
                            {
                                text: 'フレームワークとツールチェーン',
                                link: '/md/バックエンド/フレームワークとツールチェーン/フレームワークとツールチェーン.md'
                            },
                            {
                                text: 'リレーショナルデータベース',
                                link: '/md/バックエンド/リレーショナルデータベース/リレーショナルデータベース.md'
                            },
                            {
                                text: 'NoSQLデータベース',
                                link: '/md/バックエンド/NoSQLデータベース/NoSQLデータベース.md'
                            },
                            {
                                text: 'RESTfulのAPI',
                                link: '/md/バックエンド/RESTfulのAPI/RESTfulのAPI.md'
                            },
                            {
                                text: '分散システムとマイクロサービスアーキテクチャ',
                                link: '/md/バックエンド/分散システムとマイクロサービスアーキテクチャ/分散システムとマイクロサービスアーキテクチャ.md'
                            },
                            {
                                text: 'メッセージキューシステム',
                                link: '/md/バックエンド/メッセージキューシステム/メッセージキューシステム.md'
                            },
                        ]
                    },

                    {
                        text: '面试',
                        items: [
                            {
                                text: '华为',
                                link: '/md/面接/华为/機考/注意事項.md'
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
                                link: '/md/外国語/日本語/新標日初级/1.第一課.md'
                            },
                            {
                                text: '日語学習文法全マスター',
                                link: '/md/外国語/日本語/日語学習文法全マスター/1.名詞述語句.md'
                            },
                            {
                                text: 'TRYN2文法必須',
                                link: '/md/外国語/日本語/TRYN2文法必須/1.名詞+につき.md'
                            },
                        ]
                    },

                    {
                        text: 'プロジェクト紹介',
                        items: [
                            {
                                text: '上海咪啰情報科技有限公司',
                                link: '/md/プロジェクト紹介/上海咪啰情報科技有限公司/1.洋⼭四期⼤データ運営効率分析システム.md'
                            },
                            {
                                text: '網易（杭州）ネットワーク有限公司',
                                link: '/md/プロジェクト紹介/網易（杭州）ネットワーク有限公司/1.網易数帆（クラウド公共プラットフォーム）CMS∕ミニアプリ開発.md'
                            },
                        ]
                    },

                ],
                sidebar: {
                    "/md/アルゴリズムとデータ構造/": getAlgorithmDataStructure(),
                    "/md/分散メッセージミドルウェア/": getMessageQueue(),
                    "/md/ロードバランスミドルウェア/": getLoadBalance(),
                    "/md/分散ファイルストレージ/": getFileStorage(),
                    "/md/リレーショナルデータベース/": getRelationalDatabase(),
                    "/md/面接/": getInterview(),
                    "/md/マルチスレッド並行プログラミング/": getMultithreadedConcurrentProgramme(),
                    "/md/ハイコンカレンシーネットワークプログラミング/": getHighConcurrencyNetworkProgremme(),
                    "/md/コードバージョンコントロール/": getCodeVersionControl(),
                    "/md/フレームワーク/": getFrame(),
                    "/md/フロントエンド/": getFrontEnd(),
                    "/md/バックエンド/": getBackEnd(),
                    "/md/Linux/": getLinux(),
                    "/md/AI/": getAI(),
                    "/md/外国語/": getForeignLanguages(),
                    "/md/プロジェクト紹介/": getJobProject(),
                }
            }
        }
    }
};

function getAlgorithmDataStructure() {
    return [
        {
            title: "アルゴリズム",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "アルゴリズム/1.アルゴリズム概要.md",
                "アルゴリズム/2.線形探索法.md",
                "アルゴリズム/3.ループ不変量.md",
                "アルゴリズム/4.複雑度分析.md",
                "アルゴリズム/5.アルゴリズムパフォーマンステスト.md",
                "アルゴリズム/6.選択ソート法.md",
                "アルゴリズム/7.挿入ソート法.md",
            ]
        },
        {
            title: "データ構造",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "データ構造/1.データ構造概要.md",
                "データ構造/2.配列.md",
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
                "ActiveMQ/1.JMS概要.md",
                "ActiveMQ/2.ActiveMQインストール.md",
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
                "Nginx/1.Nginxロードバランス.md",
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
                "MinIO/1.紹介.md",
                "MinIO/2.インストール.md",
            ]
        }
    ]
}

function getRelationalDatabase(){
    return [
        {
            title: "リレーショナルデータベース",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Mysql/1.MySQL紹介.md",
                "Mysql/2.MySQLストレージエンジン.md",
                "Mysql/3.MySQLインデックス.md",
                "Mysql/4.MySQLロック.md",
                "Mysql/5.MySQLトランザクション.md",
                "Mysql/6.MySQLログ.md",
                "Mysql/7.MySQL Explain実行計画詳細.md",
                "Mysql/8.MySQLパフォーマンストラブルシューティング.md",
                "Mysql/9.データベース設計規範.md",
                "Mysql/10.一般的なSQL文.md",
                "Mysql/11.その他.md",
            ]
        }
    ]
}

function getInterview() {
    return [
        {
            title: "华为機考",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "华为/機考/注意事項.md",
                "华为/機考/勾股元配列.md",
                "华为/機考/2つの配列からk対の要素を取り出し合計を計算し最小値を求める.md",
                "华为/機考/N次の正方形行列内のすべての数の合計.md",
                "华为/機考/TLVエンコーディングデコーディングシンボル.md",
                "华为/機考/ステップジャンプ方法統計.md",
                "华为/機考/GPUがタスクを完了する最小時間.md",
                "华为/機考/身長の差のソート.md",
            ]
        }
    ]
}

function getMultithreadedConcurrentProgramme() {
    return [
        {
            title: "Java基礎",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Java基礎/1.Javaプログラム実行原理分析.md",
                "Java基礎/2.スレッド状態.md",
                "Java基礎/3.スレッド停止.md"
            ]
        }
    ]
}

function getHighConcurrencyNetworkProgremme() {
    return [
        {
            title: "Javaネットワークプログラミング",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Javaネットワークプログラミング/1.TCP_UDPプロトコル.md",
                "Javaネットワークプログラミング/2.HTTPプロトコル.md",
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
                "Git/1.Gitバージョンコントロール入門.md",
                "Git/2.Git一般的な操作.md",
                "Git/3.Giteaインストール.md"
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
                "Springフレームワーク/Spring紹介.md",
                "Springフレームワーク/Springクイックスタート.md",
                "Springフレームワーク/Springコンテナをロードする3つの方法.md",
                "Springフレームワーク/Beanのアセンブル（xml方式）.md",
                "Springフレームワーク/Beanのライフサイクル.md",
                "Springフレームワーク/Springトランザクション.md",
                "Springフレームワーク/一般的な開発スキル.md",
            ]
        }
    ]
}

function getFrontEnd(){
    return [
        {
            title: "準備作業",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "準備作業/使用nvm管理異なるバージョンの nodeとnpm.md",
                "準備作業/マークダウンを使用してプレゼンテーションを作成.md",
                "準備作業/サーバー側でクロスドメイン呼び出し問題を解決.md",
                "準備作業/クロスドメインでcookieを渡す.md",
            ]
        },
        {
            title: "フロントエンドとバックエンドの分離とエンジニアリング",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "フロントエンドとバックエンドの分離とエンジニアリング/フロントエンドとバックエンドの分離とエンジニアリング.md",
            ]
        },
        {
            title: "フロントエンドパフォーマンス最適化",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "フロントエンドパフォーマンス最適化/フロントエンドパフォーマンス最適化.md",
            ]
        },
        {
            title: "基本フロントエンド技術",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "基本フロントエンド技術/基本フロントエンド技術.md",
            ]
        },
        {
            title: "フレームワークとツール",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "フレームワークとツール/フレームワークとツール.md",
            ]
        },
        {
            title: "ブラウザの互換性とセキュリティ",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "ブラウザの互換性とセキュリティ/ブラウザの互換性とセキュリティ.md",
            ]
        },
    ]
}

function getBackEnd(){
    return [
        {
            title: "Java開発経験",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Java開発経験/Java開発経験.md",
            ]
        },
        {
            title: "NoSQLデータベース",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "NoSQLデータベース/NoSQLデータベース.md",
            ]
        },
        {
            title: "リレーショナルデータベース",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "リレーショナルデータベース/リレーショナルデータベース.md",
            ]
        },
        {
            title: "フレームワークとツールチェーン",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "フレームワークとツールチェーン/フレームワークとツールチェーン.md",
            ]
        },
        {
            title: "RESTfulのAPI",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "RESTfulのAPI/RESTfulのAPI.md",
            ]
        },
        {
            title: "RESTfulのAPI",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "RESTfulのAPI/RESTfulのAPI.md",
            ]
        },
        {
            title: "分散システムとマイクロサービスアーキテクチャ",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "分散システムとマイクロサービスアーキテクチャ/分散システムとマイクロサービスアーキテクチャ.md",
            ]
        },
        {
            title: "メッセージキューシステム",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "メッセージキューシステム/メッセージキューシステム.md",
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
                "Centos/常用ソフトウェアインストール/Maven.md",
                "Centos/常用ソフトウェアインストール/Zookeeper.md",
                "Centos/常用ソフトウェアインストール/Apollo.md",
                "Centos/常用ソフトウェアインストール/Nacos.md",
                "Centos/常用ソフトウェアインストール/XXL-JOB.md",
                "Centos/常用ソフトウェアインストール/宝塔パネル.md",
            ]
        },
        {
            title: "Ubuntu",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Ubuntu/常用操作/常用操作.md",
                "Ubuntu/常用ソフトウェアインストール/docker.md",
                "Ubuntu/常用ソフトウェアインストール/nvm & node.md",
                "Ubuntu/常用ソフトウェアインストール/openvpn.md",
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
            title: "日語新標日初级",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "日語/新標日初级/1.第一課.md",
                "日語/新標日初级/2.第二課.md",
                "日語/新標日初级/3.第三課.md",
                "日語/新標日初级/4.第四課.md",
                "日語/新標日初级/5.第五課.md",
                "日語/新標日初级/6.第六課.md",
                "日語/新標日初级/7.第七課.md",
                "日語/新標日初级/8.第八課.md",
                "日語/新標日初级/9.第九課.md",
                "日語/新標日初级/10.第十課.md",
                "日語/新標日初级/11.第十一課.md",
                "日語/新標日初级/12.第十二課.md",
                "日語/新標日初级/13.第十三課.md",
                "日語/新標日初级/14.第十四課.md",
                "日語/新標日初级/15.第十五課.md",
                "日語/新標日初级/16.第十六課.md",
                "日語/新標日初级/17.第十七課.md",
                "日語/新標日初级/18.第十八課.md",
                "日語/新標日初级/19.第十九課.md",
                "日語/新標日初级/20.第二十課.md",
                "日語/新標日初级/21.第二十一課.md",
                "日語/新標日初级/22.第二十二課.md",
                "日語/新標日初级/23.第二十三課.md",
                "日語/新標日初级/24.第二十四課.md",
                "日語/新標日初级/25.第二十五課.md",
                "日語/新標日初级/26.第二十六課.md",
                "日語/新標日初级/27.第二十七課.md",
                "日語/新標日初级/28.第二十八課.md",
                "日語/新標日初级/29.第二十九課.md",
                "日語/新標日初级/30.第三十課.md",
                "日語/新標日初级/31.第三十一課.md",
                "日語/新標日初级/32.第三十二課.md",
                "日語/新標日初级/33.第三十三課.md",
                "日語/新標日初级/34.第三十四課.md",
                "日語/新標日初级/35.第三十五課.md",
                "日語/新標日初级/36.第三十六課.md",
                "日語/新標日初级/37.第三十七課.md",
                "日語/新標日初级/38.第三十八課.md",
                "日語/新標日初级/39.第三十九課.md",
                "日語/新標日初级/40.第四十課.md",
                "日語/新標日初级/単語まとめ.md",
            ]
        },
        {
            title: "日語学習文法全マスター",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "日語/日語学習文法全マスター/1.名詞述語句.md",
            ]
        },
        {
            title: "TRYN2文法必須",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "日語/TRYN2文法必須/1.名詞+につき.md",
            ]
        }
    ]
}

function getJobProject(){
    return [
        {
            title: "上海咪啰情報科技有限公司",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "上海咪啰情報科技有限公司/1.洋⼭四期⼤データ運営効率分析システム.md",
                "上海咪啰情報科技有限公司/2.三叉戟（Trident）スマートコンテナプラットフォーム.md",
                "上海咪啰情報科技有限公司/3.自動回帰テスト支援ツール開発.md",
            ]
        },
        {
            title: "網易（杭州）ネットワーク有限公司",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "網易（杭州）ネットワーク有限公司/1.網易数帆（クラウド公共プラットフォーム）CMS∕ミニアプリ開発.md",
                "網易（杭州）ネットワーク有限公司/2.網易クラウド 計費・出帳システム開発.md",
            ]
        }
    ]
}

