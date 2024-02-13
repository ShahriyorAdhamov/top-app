import React, { FunctionComponent } from "react";
import { LayoutProps } from "./layout.props";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import styles from "./layout.module.css";

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
}


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function widthLayoutComponent (props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
