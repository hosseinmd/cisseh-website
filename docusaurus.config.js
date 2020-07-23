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
          title: "دانلود",
          items: [
            {
              label: "نسخه اندروید",
              href: "https://cafebazaar.ir/app/com.hm.pos303",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/cisseh",
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
      copyright: `<p style="font-family: sans-serif;">Copyright © ${new Date().getFullYear()} Cisseh.</p>`,
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
