"use client"

import React, { useState } from "react";
import styles from "./page.module.scss";
import { isJSONConvertible, isYAMLConvertible, jsonToYaml, yamlToJson } from "@/lib/yaml";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [yaml, setYaml] = useState<string>("");
    const [json, setJson] = useState<string>("");

    const [isYamlConvertible, setIsYamlConvertible] = useState<boolean>(false);
    const [isJsonConvertible, setIsJsonConvertible] = useState<boolean>(false);

    return (
        <main className={ styles.main }>
            <Tabs defaultValue="yaml" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger disabled={ !isJsonConvertible } value="yaml" onClick={ () => {
                        setYaml(jsonToYaml(json));
                    } }>Yaml</TabsTrigger>
                    <TabsTrigger disabled={ !isYamlConvertible } value="json" onClick={ () => {
                        setJson(yamlToJson(yaml));
                    } }>JSON</TabsTrigger>
                </TabsList>
                <TabsContent value="yaml">
                    <Card>
                        <CardHeader>
                            <CardTitle>YAML Editor</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Textarea value={ yaml } onChange={ (e) => {
                                    setIsYamlConvertible(isYAMLConvertible(e.target.value));
                                    setYaml(e.target.value);
                                } }
                                          rows={ 20 }/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={ !isYamlConvertible } className={ `flex-auto ${ !isYamlConvertible ? "bg-red-500" : "" }` } onClick={ () => {
                                setYaml(jsonToYaml(yamlToJson(yaml)));
                            } }>
                                { !isYamlConvertible ? "Syntax Error" : "Format YAML" }
                            </Button>
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
                                <Textarea value={ json } onChange={ (e) => {
                                    setIsJsonConvertible(isJSONConvertible(e.target.value));
                                    setJson(e.target.value);
                                } }
                                          rows={ 20 }/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={ !isJsonConvertible } className={ `flex-auto ${ !isJsonConvertible ? "bg-red-500" : "" }` } onClick={ () => {
                                setJson(JSON.stringify(JSON.parse(json), null, 2));
                            } }>
                                { !isJsonConvertible ? "Syntax Error" : "Format JSON" }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}
