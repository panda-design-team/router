import fs from 'fs';
import path from 'path';
import url from 'url';
import {globSync} from 'glob';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

const main = () => {
    const root = path.join(dirname, '..');
    const svgFiles = globSync(`${root}/src/**/*.{svg,jpg,png}`, {nodir: true});
    svgFiles.forEach(file => {
        const suffix = file.slice(`${root}/src/`.length);
        fs.cpSync(file, `${root}/es/${suffix}`);
    });
};

main();
