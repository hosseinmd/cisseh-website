module.exports = {
  title: "صندوق فروشگاهی سیسه",
  tagline: "نرم افزار مدیریت فروش",
  url: "http://www.cisseh.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "سیسه",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "مستندات",
          position: "left",
        },
        { to: "blog", label: "بلاگ", position: "left" },
        {
          href: "https://github.com/hosseinmd/cisseh-website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "مستندات",
          items: [
            {
              label: "شروع",
              to: "docs/",
            },
            {
              label: "ورود به نرم افزار",
              to: "docs/signin/",
            },
          ],
        },
        {
          title: "جوامع",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/cisseh",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/cisseh",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/cisseh",
            },
          ],
        },
        {
          title: "بیشتر",
          items: [
            {
              label: "بلاگ",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/hosseinmd/cisseh-website",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cisseh.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "Installation",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/hosseinmd/cisseh-website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/hosseinmd/cisseh-website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
