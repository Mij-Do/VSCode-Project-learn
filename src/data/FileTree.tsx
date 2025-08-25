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
                            name: "react.tsx",
                            isFolder: false,
                        },
                        {
                            name: "alert.jsx",
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