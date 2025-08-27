import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarTap from "./OpenedFileBarTap";

const OpenedFileBar = () => {
    const {openedFile} = useSelector((state: RootState) => state.filetree);
    return (
        <div>
            <div className="flex border-b border-[#ffffff54]">
                {openedFile.map(file => <OpenedFileBarTap key={file.id} file={file}/>)}
            </div>
        </div>
    )
}

export default OpenedFileBar;