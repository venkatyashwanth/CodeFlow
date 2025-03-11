import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from './Homepage.module.scss';
import Layout from '../../components/layout/Layout';
import CodeBlock from '../../components/codeblock/CodeBlock';

const Homepage = () => {
    return (
        <Layout>
            <div className={`${styles.pg_wrap}`}>
                <div className={`${styles.sidebar}`}>
                    <ul>
                        <li>
                            <a href="#cont1">
                                Form Inputs
                            </a>
                        </li>
                        <li>
                            <a href="#cont2">
                                content2
                            </a>
                        </li>
                        <li>
                            <a href="#cont3">
                                content3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.mainpg}`}>
                    <div id="cont1" className={`${styles.fixScroll}`}>
                        <Link to={"/forms"}>
                            <h2>Form Inputs</h2>
                        </Link>
                    </div>

                    <div id="cont2" className={`${styles.fixScroll}`}>
                        <div style={{width: "1200px"}}>

                            <CodeBlock code="Dummy Text" mode={"javascript"} />
                        </div>
                    </div>
                    <div id="cont3" className={`${styles.fixScroll}`}>
                        <div className={`${styles.emptyPage}`}>
                            <p>content page3</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage