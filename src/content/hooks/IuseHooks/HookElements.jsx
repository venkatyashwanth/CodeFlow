import React, { useRef } from 'react'
import styles from "./HookElements.styles.module.scss"
import CodeBlock from '../../../components/codeblock/CodeBlock';
import data from '../CodeSnipets';

const HookElements = ({ refs }) => {
    const { useStateHookRef, useEffectHookRef, useRefRef, useMemoRef, useCallbackRef, useContextRef,useReducerRef,useLayoutEffectRef,customHookRef } = refs;
    const textData = Array.from({ length: data.length }, (_, i) => data?.[i]?.code?.toString() || "");
    return (
        <>
            {/* Use State */}
            <div ref={useStateHookRef} id="usestatehook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseState:-</h4>
                <p>Use State (Type-1): </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[0]} mode={"javascript"} />
                </div>
                <p>Use State (Type-2): Multiple State Variable</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[1]} mode={"javascript"} />
                </div>
                <p>Use State (Type-3): Counter</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[2]} mode={"javascript"} />
                </div>
            </div>

            {/* Use Effect */}
            <div ref={useEffectHookRef} id="useeffecthook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseEffect:-</h4>
                <p>Use Effect:</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[3]} mode={"javascript"} />
                </div>
                <p>Use Effect (Dependency Array): </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[4]} mode={"javascript"} />
                </div>
            </div>

            {/* Use Ref */}
            <div ref={useRefRef} id="userefhook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseRef:-</h4>
                <p>Use Ref:</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[5]} mode={"javascript"} />
                </div>
                <p>Use Ref: Accessing Dom Elements</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[6]} mode={"javascript"} />
                </div>
            </div>

            {/* Use Memo */}
            <div ref={useMemoRef} id="usememohook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseMemo:-</h4>
                <p>Use Memo: When button is clicked, it will not effect other function.</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[7]} mode={"javascript"} />
                </div>
            </div>

            {/* Use Callback */}
            <div ref={useCallbackRef} id="usecallbackhook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseCallback:-</h4>
                <p>Use Callback: </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[8]} mode={"javascript"} />
                </div>
            </div>

            {/* Use Context */}
            <div ref={useContextRef} id="usecontexthook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseContext:-</h4>
                <p>UseContext: </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[9]} mode={"javascript"} />
                </div>
            </div>

            {/* Use reducer */}
            <div ref={useReducerRef} id="usereducerhook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseReducer:-</h4>
                <p>UseReducer: Increment and Decrement Counter</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[10]} mode={"javascript"} />
                </div>
            </div>

            {/* UseLayoutEffect */}
            <div ref={useLayoutEffectRef} id="uselayouteffect" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseLayoutEffect:-</h4>
                <p>UseLayoutEffect: </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[11]} mode={"javascript"} />
                </div>
            </div>

            {/* CustomHook */}
            <div ref={customHookRef}  id="customhook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>CustomHook:-</h4>
                <p>CustomHook: </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[12]} mode={"javascript"} />
                </div>
            </div>
        </>
    )
}

export default HookElements