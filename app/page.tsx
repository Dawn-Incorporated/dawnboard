"use client"

import styles from "./page.module.scss";

import { yamlToJson } from "@/lib/yaml";
import { useEffect, useState } from "react";

yamlToJson("");

export default function Home() {
    const [yaml, setYaml] = useState("");
    const [json, setJson] = useState<string | undefined>("");

    useEffect(() => {
        return setJson(yamlToJson(yaml));
    }, [yaml]);

    return (
        <main className={styles.main}>
            <input type="text" onChange={(e) => setYaml(e.target.innerText)}/>

            {json}
        </main>
    );
}
