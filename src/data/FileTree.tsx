import type { IFile } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export const FileTree: IFile = {
    id: uuidv4(),
    name: "project tree",
    isFolder: true,
    children: [
        {
            id: uuidv4(),
            name: "node_modules",
            isFolder: true,
            children: [
                {
                    id: uuidv4(),
                    name: ".vite",
                    isFolder: true,
                    children: [
                        {
                            id: uuidv4(),
                            name: "react.js",
                            isFolder: false,
                        },
                        {
                            id: uuidv4(),
                            name: "alert.js",
                            isFolder: false,
                        },
                    ]
                }
            ]
        },
        {
            id: uuidv4(),
            name: "public",
            isFolder: true,
            children: [
                {
                    id: uuidv4(),
                    name: "svg",
                    isFolder: true,
                }
            ]
        },
        {
            id: uuidv4(),
            name: "src",
            isFolder: true,
            children: [
                {
                    id: uuidv4(),
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            id: uuidv4(),
                            name: "index.html",
                            isFolder: false,
                            content: "Hello, World => From HTML File"
                        },
                        {
                            id: uuidv4(),
                            name: "index.css",
                            isFolder: false,
                            content: "Hello, World => From CSS File"
                        },
                        {
                            id: uuidv4(),
                            name: "index.js",
                            isFolder: false,
                            content: "Hello, World => From JS File"
                        },
                        {
                            id: uuidv4(),
                            name: "index.ts",
                            isFolder: false,
                            content: "Hello, World => From TS File"
                        },
                    ]
                }
            ]
        }
    ]
}

