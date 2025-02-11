import React, { useRef } from 'react'
import Layout from '../../components/layout/Layout'
import styles from "./Reactpage.module.scss"
import HookElements from '../../content/hooks/IuseHooks/HookElements'

const Navigation = ({ scrollToSection }) => {
    return (
        <ul className={`${styles.mainList}`}>
            <li>
                <a onClick={() => scrollToSection("cnt1")} style={{ cursor: "pointer" }}>
                    Routers
                </a>
            </li>
            <li>
                <a onClick={() => scrollToSection("cnt2")} style={{ cursor: "pointer" }}>
                    React Hooks
                </a>
                <ul className={`${styles.subList}`}>
                    <li>
                        <a onClick={() => scrollToSection("usestatehook")} style={{ cursor: "pointer" }}>
                            Use State
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("useeffecthook")} style={{ cursor: "pointer" }}>
                            Use Effect
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("userefhook")} style={{ cursor: "pointer" }}>
                            Use Ref
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("usememohook")} style={{ cursor: "pointer" }}>
                            Use Memo
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("usecallbackhook")} style={{ cursor: "pointer" }}>
                            Use CallBack
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("usecontexthook")} style={{ cursor: "pointer" }}>
                            Use Context
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("usereducerhook")} style={{ cursor: "pointer" }}>
                            Use Reducer
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection("uselayouteffect")} style={{ cursor: "pointer" }}>
                            Use LayoutEffect
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}


const ReactSnips = () => {
    const cnt1Ref = useRef(null);
    const cnt2Ref = useRef(null);
    const useStateHookRef = useRef(null);
    const useEffectHookRef = useRef(null);
    const useRefRef = useRef(null);
    const useMemoRef = useRef(null);
    const useCallbackRef = useRef(null);
    const useContextRef = useRef(null);
    const useReducerRef = useRef(null);
    const useLayoutEffectRef = useRef(null);

    const scrollToSection = (id) => {
        const refs = {
            cnt1: cnt1Ref,
            cnt2: cnt2Ref,
            usestatehook: useStateHookRef,
            useeffecthook: useEffectHookRef, 
            userefhook: useRefRef,
            usememohook: useMemoRef,
            usecallbackhook: useCallbackRef,
            usecontexthook: useContextRef,
            usereducerhook: useReducerRef,
            uselayouteffect: useLayoutEffectRef
        };
        refs[id]?.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Layout>
            <div className={`${styles.pg_wrap}`}>
                <div className={`${styles.sidebar}`}>
                    <Navigation scrollToSection={scrollToSection} />
                </div>
                <div className={`${styles.mainpg}`}>
                    <div ref={cnt1Ref} id="cnt1" className={`${styles.fixScroll} ${styles.container}`}>
                        <h4 className={`${styles.Titleheading}`}>Router: </h4>
                        <p>
                            React Router is a library for handling routing and navigation in React JS Applications. It allows you to create dynamic routes providing a seamless user experience by mapping various URLs to components. It enables navigation in single-page application (SPA) without refreshing the entire page.
                        </p>
                        <ul>
                            <li>
                                Git Code:
                                <a target='_blank' href="https://github.com/venkatyashwanth/reactrouter.git">
                                    https://github.com/venkatyashwanth/reactrouter.git
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div ref={cnt2Ref} id="cnt2" className={`${styles.fixScroll} ${styles.container}`}>
                        <h4 className={`${styles.Titleheading}`}>React Hooks:</h4>
                        <HookElements refs={{ useStateHookRef, useEffectHookRef,useRefRef,useMemoRef,useCallbackRef,useContextRef,useReducerRef,useLayoutEffectRef }}/>
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

export default ReactSnips