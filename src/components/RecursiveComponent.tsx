import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";

interface IProps {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
    return (
        <div className="mb-1">
            <div className="flex items-center mb-1">
                <RightArrowIcon />
                <span className="mr-2">
                    <FileIcon />
                </span>
                <span>{fileTree.name}</span>
            </div>
            {fileTree.children && fileTree.children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file}/> )}
        </div>
    )
}

export default RecursiveComponent;