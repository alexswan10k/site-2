import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { ManagedEditor } from "react-inline-node-editor-bigkit";
import { schema } from "../../managed-components/schema";
import styles from '../../styles/Home.module.css'
import { css } from '@emotion/css';

const PageContainer: FC<PropsWithChildren<{ title: string, description?: string }>> = ({ title, description, children }) => {
    return <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css`
        width: 960px;
        margin: 0 auto;
      `}>
        {children}
      </div>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
}

export default PageContainer;