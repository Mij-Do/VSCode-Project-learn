import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import FolderIcon from "./SVG/Folder";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";

interface IProps {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
    // states
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // handlers
    const toggle = () => setIsOpen(prev => !prev);
    return (
        <div className="mb-2 ml-2 cursor-pointer">
            <div className="flex items-center mb-1">
                {fileTree.isFolder ? 
                    <div onClick={toggle} className="flex items-center">
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                        <FolderIcon />
                        <span>{fileTree.name}</span>
                    </div>
                : 
                    <div className="flex items-center ml-2">
                        <FileIcon />
                        <span>{fileTree.name}</span>
                    </div>
                }
            </div>
            {isOpen && fileTree.children && fileTree.children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file}/> )}
        </div>
    )
}

export default RecursiveComponent;