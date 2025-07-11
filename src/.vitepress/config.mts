import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";
import tailwindcss4 from "@tailwindcss/vite";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    title: "PCL Community",
    description: "PCL 非官方社区",
    head: [["link", { rel: "icon", href: "/img/logo.png" }]],
    lang: "zh-CN",
    markdown: {
        config: (md) => {
            md.use(timeline);
        },
    },
    vite: {
        plugins: [tailwindcss4()],
        optimizeDeps: {
            exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client", "vitepress", "@nolebase/ui"],
        },
        ssr: {
            noExternal: [
                // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
                "@nolebase/vitepress-plugin-highlight-targeted-heading",
                "@nolebase/vitepress-plugin-enhanced-readabilities",
                "@nolebase/ui",
            ],
        },
    },

    themeConfig: {
        logo: "/img/logo.png",

        outline: {
            label: "当前页导航",
        },
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",

        nav: [
            { text: "主页", link: "/index.md" },
            { text: "项目", link: "/projects/index.md" },
            {
                text: "更新日志",
                items: [
                    { text: "PCL2 更新日志", link: "https://www.bilibili.com/read/readlist/rl449275" },
                    { text: "PCL-CE 更新日志", link: "projects/pcl-ce/changelog.md" },
                ],
            },
            { text: "杂物间", link: "/misc/index.md" },
            { text: "关于", link: "/about.md" },
            { text: "账单", link: "/bill.md" },
            { text: "隐私协议", link: "/privacy.md" },
        ],

        sidebar: {
            '/privacy/': [
                { text: "第三方信息共享清单", link: "/privacy/third-party/" },
                { text: "个人信息处理规则", link: "/privacy/personal-info/" },
                { text: "个人信息处理规则摘要", link: "/privacy/personal-info-brief/" },
                { text: "个人信息对外提供清单", link: "/privacy/provide-list/" },
                { text: "个人信息收集清单", link: "/privacy/collect-list/" },
            ]
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/PCL-Community" },
            { icon: "bilibili", link: "https://space.bilibili.com/3546847192811755" },
        ],

        footer: {
            message: '本站由 <a href="https://vitepress.dev" target="_blank">VitePress</a> 强力驱动',
            copyright: 'Copyright © <a href="https://github.com/PCL-Community" target="_blank">PCL Community</a>',
        },
    },
    
    async transformHead({ assets }) {
        const font = assets.find(file => /PCL-English\.ttf/.test(file));
        console.log(font);
        if (font) {
            return [
                [
                    'link',
                    {
                        rel: 'preload',
                        href: font,
                        as: 'font',
                        type: 'font/ttf',
                        crossorigin: ''
                    }
                ]
            ]
        }
    }
});
