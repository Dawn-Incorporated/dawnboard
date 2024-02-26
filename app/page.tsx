"use client"

import React, { useState } from "react";
import styles from "./page.module.scss";
import { jsonToYaml, yamlToJson } from "@/lib/yaml";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [yaml, setYaml] = useState<string>("");
    const [json, setJson] = useState<string>("");

    return (
        <main className={ styles.main }>
            <Tabs defaultValue="yaml" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="yaml" onClick={ () => setYaml(jsonToYaml(json)) }>Yaml</TabsTrigger>
                    <TabsTrigger value="json" onClick={ () => setJson(yamlToJson(yaml)) }>JSON</TabsTrigger>
                </TabsList>
                <TabsContent value="yaml">
                    <Card>
                        <CardHeader>
                            <CardTitle>YAML Editor</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Textarea value={ yaml } onChange={ (e) => setYaml(e.target.value) }
                                          rows={ 20 }/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="flex-auto" onClick={ () => {
                                setYaml(jsonToYaml(yamlToJson(yaml)));
                            } }>Format Yaml</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="json">
                    <Card>
                        <CardHeader>
                            <CardTitle>JSON Editor</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Textarea value={ json } onChange={ (e) => setJson(e.target.value) }
                                          rows={ 20 }/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="flex-auto" onClick={ () => {
                                setJson(JSON.stringify(JSON.parse(json), null, 2));
                            } }>Format JSON</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}
