"use client"

import React, { useState } from "react";
import styles from "./page.module.scss";
import { jsonToYaml, yamlToJson } from "@/lib/yaml";

export default function Home() {
    const [yaml, setYaml] = useState<string>("");
    const [json, setJson] = useState<string>("");

    return (
        <main className={ styles.main }>
            <div>
                <h1>YAML to JSON</h1>
                <textarea value={ yaml } onChange={ (e) => setYaml(e.target.value) }/>
                <button onClick={ () => setJson(yamlToJson(yaml)) }>make</button>
            </div>
            <div>
                <h1>JSON to YAML</h1>
                <textarea value={ json } onChange={ (e) => setJson(e.target.value) }/>
                <button onClick={ () => setYaml(jsonToYaml(json)) }>make</button>
            </div>
        </main>
    );
}
