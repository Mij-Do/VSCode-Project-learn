import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarTap from "./OpenedFileBarTap";

const OpenedFileBar = () => {
    const {openedFile, clickedFile} = useSelector((state: RootState) => state.filetree);
    return (
        <div>
            <div className="flex border-b border-[#ffffff54]">
                {openedFile.map(file => <OpenedFileBarTap key={file.id} file={file}/>)}
            </div>
            {clickedFile.fileContent}
        </div>
    )
}

export default OpenedFileBar;