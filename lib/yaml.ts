import yaml from 'js-yaml';
import fs from 'fs';

export const yamlToJson = () => {
    try {
        const doc = yaml.load(fs.readFileSync('public/test.yaml', 'utf8'));
        console.log(JSON.stringify(doc, null, 2));
    } catch (e) {
        console.log(e);
    }
}

export const jsonToYaml = () => {
    try {
        const doc = yaml.load(fs.readFileSync('public/test.json', 'utf8'));
        console.log(yaml.dump(doc));
    } catch (e) {
        console.log(e);
    }
}