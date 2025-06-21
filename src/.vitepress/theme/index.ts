// .vitepress/theme/index.ts or .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

// 主 CSS 文件
import './style/index.css'

// 时间线
import "vitepress-markdown-timeline/dist/theme/index.css";

// 聚焦灯
import { 
    NolebaseEnhancedReadabilitiesMenu, 
    NolebaseEnhancedReadabilitiesScreenMenu, 
  } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

// 跳转提醒
import {  
    NolebaseHighlightTargetedHeading,  
  } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

// 文本高亮
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

export default {
    extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => [ 
        h(NolebaseHighlightTargetedHeading), 
      ], 
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
};