import { text } from 'stream/consumers'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "React Docs",
  titleTemplate: 'Ramesh Choudhary',
  lang: 'en-US',
  description: "React Documentation Website",
  head: [['link', { rel: 'icon', href: 'https://www.svgrepo.com/show/452092/react.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://www.svgrepo.com/show/452092/react.svg",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'React', link: '/react/guide/what-is-react' },
      { text: 'Teams', link: '/teams' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'What is React', link: '/react/guide/what-is-react' },
          { text: 'Why Use React', link: '/react/guide/why-use-react' },
          { text: 'Functional Components', link: '/react/guide/functional-component.md' },
          { text: 'Class based Components', link: '/react/guide/class-based-component.md' },
        ],
      },
      {
        text: 'Component Basics',
        collapsed: false,
        items: [
          { text: 'JSX', link: '/react/component-basic/jsx' },
          { text: 'Role of Babel in React', link: '/react/component-basic/role-of-babel-in-react' },
          { text: 'Props', link: '/react/component-basic/props' },
          { text: 'States', link: '/react/component-basic/states' },
          { text: 'Conditional Rendering', link: '/react/component-basic/conditional-rendering' },
          { text: 'Composition', link: '/react/component-basic/composition' },
        ],
      },
      {
        text: 'React Behind The Scene',
        collapsed: false,
        items: [
          { text: 'Component Life Cycle', link: '/react/react-behind-scene/component-life-cycle' },
          { text: 'Reality of Virtual DOM', link: '/react/react-behind-scene/reality-of-virtual-dom' },
          { text: 'Reconciliation & Diffing Algorithm', link: '/react/react-behind-scene/reconciliation-diffing-algo' },
          { text: 'React is Declarative', link: '/react/react-behind-scene/react-is-declarative' },
          { text: 'React - Client-Side Rendering', link: '/react/react-behind-scene/react-client-side-rendering' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rameshchoudhary9784/react-docs' }
    ],
    
    search: {
      provider: 'local'
    },
    footer: {
      message: 'React Docs designed by Ramesh Chouadhry',
      copyright: 'Copyright © 2024 - Present'
    }
  }
})
