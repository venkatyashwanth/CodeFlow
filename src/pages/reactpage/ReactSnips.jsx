import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout'
import styles from "./Reactpage.module.scss"
import HookElements from '../../content/hooks/IuseHooks/HookElements'
import Iredux from '../../content/redux/Iredux';

const treeData = [
    {
        id: 1,
        name: "Routers",
        scrollTo: "cnt1"
    },
    {
        id: 2,
        name: "React Hooks",
        scrollTo: "cnt2",
        children: [
            {
                id: "2_1",
                name: "Use State",
                scrollTo: "usestatehook"
            },
            {
                id: "2_2",
                name: "Use Effect",
                scrollTo: "useeffecthook"
            },
            {
                id: "2_3",
                name: "Use Ref",
                scrollTo: "userefhook"
            },
            {
                id: "2_4",
                name: "Use Memo",
                scrollTo: "usememohook"
            },
            {
                id: "2_5",
                name: "Use CallBack",
                scrollTo: "usecallbackhook"
            },
            {
                id: "2_6",
                name: "Use Context",
                scrollTo: "usecontexthook"
            },
            {
                id: "2_7",
                name: "Use Reducer",
                scrollTo: "usereducerhook"
            },
            {
                id: "2_8",
                name: "Use LayoutEffect",
                scrollTo: "uselayouteffect"
            },
            {
                id: "2_9",
                name: "Custom Hook",
                scrollTo: "customhook"
            },
        ]
    },
    {
        id: 3,
        name: "Redux",
        scrollTo: "cnt3",
        children: [
            {
                id: "3_1",
                name: "Dispatch",
                scrollTo: "redux_dispatch"
            },
            {
                id: "3_2",
                name: "Action Creators",
                scrollTo: "redux_actionCreator"
            },
            {
                id: "3_3",
                name: "Redux Todo",
                scrollTo: "todo_app"
            },
            {
                id: "3_4",
                name: "Redux Thunk",
                scrollTo: "redux_thunk"
            }
        ]
    },
]

const TreeNode = ({ scrollToSection, node }) => {
    const [openNodes, setOpenNodes] = useState({})
    const toggleNode = (id) => {
        setOpenNodes((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }
        ))
    }
    return (
        <li className={`${styles.navitem}`}>
            <div className={`${styles.prntNavItm}`}>
                <a onClick={() => scrollToSection(node.scrollTo)}>
                    {node.name}
                </a>
                {node.children && (
                    <span className={`${styles.arrow}`} onClick={() => toggleNode(node.id)}>
                        {node.children && (openNodes[node.id] ?
                            <img className={`${styles.open}`} src="/assets/arrow.svg" alt="arrow" /> :
                            <img className={`${styles.close}`} src="/assets/arrow.svg" alt="arrow" />
                        )
                        }
                    </span>
                )}
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openNodes[node.id] ? "auto" : 0, opacity: openNodes[node.id] ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
            >
                {node.children && (
                    <ul className={`${styles.subList}`}>
                        {
                            node.children.map((child) => (
                                <li key={child.id} className={`${styles.subItem}`}>
                                    <a onClick={() => scrollToSection(child.scrollTo)}>
                                        {child.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </motion.div>
        </li>
    )
}

const Navigation = ({ scrollToSection }) => {
    return (
        <>
            <ul className={`${styles.navlist}`}>
                {treeData.map((node) => (
                    <TreeNode key={node.id} node={node} scrollToSection={scrollToSection} />
                ))}
            </ul>
        </>
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
    const customHookRef = useRef(null);
    const cnt3Ref = useRef(null);
    const IdispatchRef = useRef(null);
    const IactionCreatorRef = useRef(null);
    const ItodoappRef = useRef(null);
    const IreduxThunkRef = useRef(null);

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
            uselayouteffect: useLayoutEffectRef,
            customhook: customHookRef,
            cnt3: cnt3Ref,
            redux_dispatch: IdispatchRef,
            redux_actionCreator: IactionCreatorRef,
            todo_app: ItodoappRef,
            redux_thunk: IreduxThunkRef
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
                        <HookElements refs={{ useStateHookRef, useEffectHookRef, useRefRef, useMemoRef, useCallbackRef, useContextRef, useReducerRef, useLayoutEffectRef, customHookRef }} />
                    </div>
                    <div ref={cnt3Ref} id="cnt3" className={`${styles.fixScroll} ${styles.container}`}>
                        <h4 className={`${styles.Titleheading}`}>Redux</h4>
                        <Iredux refs={{ IdispatchRef, IactionCreatorRef, ItodoappRef, IreduxThunkRef }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ReactSnips