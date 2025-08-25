import type { IFile } from "../interfaces";

export const FileTree: IFile = {
    name: "project tree",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
            children: [
                {
                    name: ".vite",
                    isFolder: true,
                    children: [
                        {
                            name: "react.js",
                            isFolder: false,
                        }
                    ]
                }
            ]
        },
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "index.html",
                    isFolder: false,
                }
            ]
        }
    ]
}