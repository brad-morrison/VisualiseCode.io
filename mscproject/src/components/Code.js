import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "../styles.css";
import './Code.css'

export default function Code({ code, language }) {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
      <div className="code-block">
        <pre>
            <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  }
