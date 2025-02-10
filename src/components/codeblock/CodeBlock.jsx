import React, { useState } from 'react';
import './codeBlockStyles.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai";

const CodeBlock = ({ code, mode }) => {
    const cleanCode = code.trim();
    const handleCopy = () => {
        navigator.clipboard.writeText(cleanCode).then(() => {
            alert("Code copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy code:", err);
        });
    }
    return (
        <>
            <div className='relative'>
                <AceEditor
                    mode={mode}
                    theme="monokai"
                    name="ace-editor"
                    value={cleanCode}
                    width="100%"
                    fontSize={"20px"}
                    setOptions={{
                        maxLines: 400
                    }}
                />
                <button className='cpyBtn' onClick={handleCopy}>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                        </svg>
                    </i>
                </button>
            </div>
        </>
    )
}

export default CodeBlock