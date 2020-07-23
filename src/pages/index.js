import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>رایگان</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        نرم افزار را رایگان دانلود کنید و استفاده نمایید. تمام ویژگی های نرم
        افزار و همچنین پشتیابی نرم افزار نیز به صورت رایگان انجام می شود.
      </>
    ),
  },
  {
    title: <>همه جا در دسترس</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        قابل اجرا بر روی دستگاه های موبایل٬ تبلت٬ ویندوز و مک می باشد. و همچین
        شما می توانید از نسخه تحت وب آن زیر استفاده کنید.
      </>
    ),
  },
  {
    title: <>آموزش</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        آموزش نرم افزار با پشتیبانی کامل سیسه در قالب پروژه متن باز با امکان
        مشارکت همگانی صورت می گیرد.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="نرم افزار صندوق فروشگاهی سیسه٬ آموزش و معرفی سیسه"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              شروع کن
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
