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
                        },
                        {
                            name: "alert.js",
                            isFolder: false,
                        },
                    ]
                }
            ]
        },
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "svg",
                    isFolder: true,
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            name: "index.html",
                            isFolder: false,
                        },
                        {
                            name: "index.css",
                            isFolder: false,
                        },
                        {
                            name: "index.js",
                            isFolder: false,
                        },
                        {
                            name: "index.ts",
                            isFolder: false,
                        },
                    ]
                }
            ]
        }
    ]
}

