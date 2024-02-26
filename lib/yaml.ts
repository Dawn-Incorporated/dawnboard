import yaml from 'js-yaml';

export const yamlToJson = (doc: string): string => {
    try {
        const jsonObj = yaml.load(doc);
        return JSON.stringify(jsonObj, null, 2);
    } catch (e) {
        console.error(e);
        return "error!";
    }
}

export const jsonToYaml = (doc: string): string => {
    try {
        const jsonObj = JSON.parse(doc);
        return yaml.dump(jsonObj);
    } catch (e) {
        console.error(e);
        return "error!";
    }
}