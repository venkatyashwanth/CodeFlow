import React, { useRef } from 'react'
import styles from "./HookElements.styles.module.scss"
import CodeBlock from '../../../components/codeblock/CodeBlock';
import data from '../CodeSnipets';


const textData1 = data?.[0]?.code?.toString() || "";
const textData2 = data?.[1]?.code?.toString() || "";
const textData3 = data?.[2]?.code?.toString() || "";
const textData4 = data?.[3]?.code?.toString() || "";
const textData5 = data?.[4]?.code?.toString() || "";
const textData6 = data?.[5]?.code?.toString() || "";

const HookElements = ({ useStateHookRef, useEffectHookRef }) => {
    return (
        <>
            {/* Use State */}
            <div ref={useStateHookRef} id="usestatehook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseState:-</h4>
                <p>Use State (Type-1): </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData1} mode={"javascript"} />
                </div>
                <p>Use State (Type-2): Multiple State Variable</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData2} mode={"javascript"} />
                </div>
                <p>Use State (Type-3): Counter</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData3} mode={"javascript"} />
                </div>
            </div>

            {/* Use Effect */}
            <div ref={useEffectHookRef} id="useeffecthook" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>UseEffect:-</h4>
                <p>Use Effect:</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData4} mode={"javascript"} />
                </div>
                <p>Use Effect (Dependency Array): </p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData5} mode={"javascript"} />
                </div>
            </div>

            {/* Use Ref */}
            <div id="useRefHook">
                <h4 className={`${styles.subheading}`}>UseRef:-</h4>
                <p>Use Ref:</p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData6} mode={"javascript"} />
                </div>
            </div>
        </>
    )
}

export default HookElements