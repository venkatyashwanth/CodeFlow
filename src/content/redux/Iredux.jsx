import React from 'react';
import styles from "./Iredux.styles.module.scss";
import CodeBlock from '../../components/codeblock/CodeBlock';
import data from "./CodeSnipets";

const Iredux = ({ refs }) => {
    const { IdispatchRef, IactionCreatorRef, ItodoappRef, IreduxThunkRef,IreduxToolkitRef } = refs;
    const textData = Array.from({ length: data.length }, (_, i) => data?.[i]?.code?.toString() || "");
    return (
        <>
            {/* Dispatch Code */}
            <div ref={IdispatchRef} id="redux_dispatch" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>Usage of Dispatch Methods:-</h4>
                <p></p>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[0]} mode={"javascript"} />
                </div>
            </div>
            {/* Action Creators */}
            <div ref={IactionCreatorRef} id="redux_actionCreator" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>Using Action Creators:-</h4>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[1]} mode={"javascript"} />
                </div>
            </div>
            {/* Application */}
            <div ref={ItodoappRef} id="todo_app" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>Todo Using Redux:-</h4>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[2]} mode={"javascript"} />
                </div>
            </div>
            {/* Redux Thunk */}
            <div ref={IreduxThunkRef} id="redux_thunk" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>Redux Thunk:-</h4>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[3]} mode={"javascript"} />
                </div>
            </div>
            {/* React Tool Kit */}
            <div ref={IreduxToolkitRef} id="redux_toolkit" style={{ scrollMarginTop: "50px" }}>
                <h4 className={`${styles.subheading}`}>Redux Toolkit:-</h4>
                <div className={`${styles.my10}`}>
                    <CodeBlock code={textData[4]} mode={"javascript"} />
                </div>
            </div>
        </>
    )
}

export default Iredux