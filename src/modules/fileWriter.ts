import * as fs from "node:fs";

export function saveContent(filename: string, data: object): void {
    fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) throw err;
        console.log('data was saved to file: ' + filename);
    })
}
