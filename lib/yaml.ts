import yaml from 'js-yaml';

export const yamlToJson = (doc: string): string => {
    try {
        if (doc === "") return "";

        const jsonObj = yaml.load(doc);
        return JSON.stringify(jsonObj, null, 2);
    } catch (e) {
        throw e;
    }
}

export const jsonToYaml = (doc: string): string => {
    try {
        if (doc === "") return "";

        const jsonObj = JSON.parse(doc);
        return yaml.dump(jsonObj);
    } catch (e) {
        throw e;
    }
}

export const isJSONConvertible = (doc: string): boolean => {
    try {
        JSON.parse(doc);
        return true;
    } catch (e) {
        return false;
    }
}

export const isYAMLConvertible = (doc: string): boolean => {
    try {
        yaml.load(doc);
        return true;
    } catch (e) {
        return false;
    }
}