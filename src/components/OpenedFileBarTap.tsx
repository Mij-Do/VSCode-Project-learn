import { useDispatch, useSelector } from 'react-redux';
import type { IFile } from '../interfaces';
import RenderFileIcon from './RenderFileIcon';
import CloseIcon from './SVG/CloseIcon';
import { setClickedFile, setOpenedFile } from '../app/features/FileTreeSlice';
import type { RootState } from '../app/store';
import DropMenu from './DropMenu';
import { useState } from 'react';

interface IProps {
    file: IFile;
}

const OpenedFileBarTap = ({file}: IProps) => {
    const [menuDrop, setMenuDrop] = useState<{x: number, y: number}>({x: 0, y: 0});
    const [showDrop, setShowDrop] = useState<boolean>(false);

    const {openedFile, clickedFile} = useSelector((state: RootState) => state.filetree);
    const {name, content, id} = file;
    const dispatch = useDispatch();
    // handlers
    const onClick = () => {
        dispatch(setClickedFile({fileName: name, fileContent: content, activeTapId: id}));
    }
    const onRemove = (id: string) => {
        const filtered = openedFile.filter(file => file.id !== id);
        const lastTap = filtered[filtered.length -1];
        if (!lastTap) {
            dispatch(setOpenedFile([]));
            dispatch(setClickedFile({activeTapId: null, fileContent: "", fileName: ""}));
            return;
        }
        dispatch(setOpenedFile(filtered));
        dispatch(setClickedFile({activeTapId: lastTap.id, fileContent: lastTap.content, fileName: lastTap.name}));
    }

    return (
        <div className={`${clickedFile.activeTapId === id ? 'border-[#cf6ccf]' : 'border-t-transparent'} cursor-pointer flex space-x-1 items-center border-t-2 p-2`}
            onClick={onClick}
            onContextMenu={e => {
                e.preventDefault();
                setMenuDrop({x: e.clientX, y: e.clientY});
                setShowDrop(true);
            }}
            >
            <RenderFileIcon filename={file.name}/>
            <span>{file.name}</span>
            <span onClick={e => 
                {
                    e.stopPropagation()
                    onRemove(file.id);
                }}>
                <CloseIcon />
            </span>
            {showDrop && <DropMenu position={menuDrop}/>}
        </div>
    )
}

export default OpenedFileBarTap;