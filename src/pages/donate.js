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
import DocPage from '@theme/DocPage';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Home" description={`${siteConfig.tagline}`}>
      <main>
      <section className={styles.features}>
        <div className="container">
          <center>
            <h2>Donate</h2>
            <img alt="buy me a coffee" src="https://static.yugasun.com/buy-me-a-coffee.jpg" width="400"/>
          </center>
        </div>
      </section>
      </main>
    </Layout>
  );
}

export default Home;
