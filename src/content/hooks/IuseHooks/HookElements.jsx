import React, { useRef } from 'react'
import styles from "./HookElements.styles.module.scss"
import CodeBlock from '../../../components/codeblock/CodeBlock';
import data from '../CodeSnipets';

const HookElements = ({ refs }) => {
    const { useStateHookRef, useEffectHookRef, useRefRef, useMemoRef, useCallbackRef } = refs;
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
        </>
    )
}

export default HookElements