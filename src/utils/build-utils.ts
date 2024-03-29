import * as path from 'path'
import fs from "fs";

export const handlePath = (
    filePath: string,
    baseUrl: string = path.resolve(process.cwd(), "./build")
) => path.join(baseUrl, filePath);

export const hasPath = (filePath: string) => {
    return fs.existsSync(filePath);
};
