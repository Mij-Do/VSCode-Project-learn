import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileBarTap from "./OpenedFileBarTap";
import DropMenu from "./DropMenu";
import { useState } from "react";

const OpenedFileBar = () => {
    const {openedFile} = useSelector((state: RootState) => state.filetree);
    const [menuDrop, setMenuDrop] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [showDrop, setShowDrop] = useState<boolean>(false);
    return (
        <div>
            <div className="flex border-b border-[#ffffff54]"
            onContextMenu={e => {
                e.preventDefault();
                setMenuDrop({x: e.clientX, y: e.clientY});
                setShowDrop(true);
            }}
            >
                {openedFile.map(file => <OpenedFileBarTap key={file.id} file={file}/>)}
            </div>
            {showDrop && <DropMenu position={menuDrop} setShowDrop={setShowDrop}/>}
        </div>
    )
}

export default OpenedFileBar;