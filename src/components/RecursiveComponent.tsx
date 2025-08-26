import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTapId, setOpenedFile } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";
import { doesFileObjExists } from "../utils";

interface IProps {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: IProps) => {
    // states
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const {openedFile} = useSelector((state: RootState) => state.filetree);
    // handlers
    const toggle = () => setIsOpen(prev => !prev);
    const onFileClicked = () => {
        const exists = doesFileObjExists(openedFile, fileTree.id);
        if (exists) return;
        dispatch(setOpenedFile([...openedFile, fileTree]));
        dispatch(setActiveTapId(fileTree.id));
    }
    return (
        <div className="mb-2 ml-2 cursor-pointer">
            <div className="flex items-center mb-1">
                {fileTree.isFolder ? 
                    <div onClick={toggle} className="flex items-center">
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                        <RenderFileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
                        <span>{fileTree.name}</span>
                    </div>
                : 
                    <div className="flex items-center ml-2" onClick={onFileClicked}>
                        <RenderFileIcon filename={fileTree.name} />
                        <span>{fileTree.name}</span>
                    </div>
                }
            </div>
            {isOpen && fileTree.children && fileTree.children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file}/> )}
        </div>
    )
}

export default RecursiveComponent;