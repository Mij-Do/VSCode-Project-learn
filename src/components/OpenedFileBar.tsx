import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarTap from "./OpenedFileBarTap";

const OpenedFileBar = () => {
    const {openedFile, clickedFile} = useSelector((state: RootState) => state.filetree);
    return (
        <div>
            <div className="flex">
                {openedFile.map(file => <OpenedFileBarTap key={file.id} file={file}/>)}
            </div>
            {clickedFile.fileContent}
        </div>
    )
}

export default OpenedFileBar;