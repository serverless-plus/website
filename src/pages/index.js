/**
 * Copyright (c) Serverless Plus.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    id: 1,
    title: <>What is Serverless?</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Serverless is about developers focusing their efforts on what provides
        value to their users (and not wasting time on anything else).
      </>
    ),
  },
  {
    id: 2,
    title: <>Serverless Framework</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Easy YAML + CLI development and deployment to Tencent Cloud, AWS, Azure,
        Google Cloud, Knative & more.
      </>
    ),
  },
  {
    id: 3,
    title: <>Serverless Framework Pro</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Zero-configuration debugging, CI/CD, troubleshooting, alerts, safeguards
        & more.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
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
  const {siteConfig = {}} = context;
  return (
    <Layout title="Home" description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({id, title, imageUrl, description}) => (
                  <Feature
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
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
