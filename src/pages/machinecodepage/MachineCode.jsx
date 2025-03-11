import React from 'react'
import Layout from '../../components/layout/Layout'
import styles from "./MachineCodeStyles.module.css"
import CodeBlock from '../../components/codeblock/CodeBlock'
import data from '../../content/mc_code/CodeSnippets'

const MachineCode = () => {
    const textData = Array.from({ length: data.length }, (_, i) => data?.[i]?.code?.toString() || "");
    return (
        <Layout>
            <div className={`${styles.pg_wrap}`}>
                <div className={`${styles.sidebar}`}>
                    <ul>
                        <li>
                            <a href="#cont1">
                                Pagination
                            </a>
                        </li>
                        <li>
                            <a href="#cont2">
                                Autocomplete Search
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
                    <div id="cont1" style={{ scrollMarginTop: "50px" }}>
                        <h4 className={`${styles.subheading}`}>
                            Pagination:-
                        </h4>
                        <div className={`${styles.codeBlock}`}>
                            <CodeBlock code={textData[0]} mode={"javascript"} />
                        </div>
                    </div>
                    <br />
                    <div id="cont1" style={{ scrollMarginTop: "50px" }}>
                        <h4 className={`${styles.subheading}`}>
                            AutoComplete:-
                        </h4>
                        <div className={`${styles.codeBlock}`}>
                            <CodeBlock code={textData[1]} mode={"javascript"} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MachineCode