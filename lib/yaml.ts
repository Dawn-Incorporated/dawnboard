import yaml from 'js-yaml';
import fs from 'fs';

export const yamlToJson = (doc: string) => {
    try {
        return yaml.safeLoad(doc);
    } catch (e) {
        console.log(e);
    }
}

export const jsonToYaml = () => {
    try {
        const doc = yaml.load(fs.readFileSync('public/test.json', 'utf8'));
        return yaml.dump(doc);
    } catch (e) {
        console.log(e);
    }
}