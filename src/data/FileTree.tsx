import type { IFile } from "../interfaces";

export const FileTree: IFile = {
    name: "project tree",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
        },
        {
            name: "index.html",
            isFolder: true,
        }
    ]
}