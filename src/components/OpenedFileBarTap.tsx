import { useDispatch, useSelector } from 'react-redux';
import type { IFile } from '../interfaces';
import RenderFileIcon from './RenderFileIcon';
import CloseIcon from './SVG/CloseIcon';
import { setClickedFile, setOpenedFile } from '../app/features/FileTreeSlice';
import type { RootState } from '../app/store';

interface IProps {
    file: IFile;
}

const OpenedFileBarTap = ({file}: IProps) => {
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
        <div className={`${clickedFile.activeTapId === id ? 'border-[#cf6ccf]' : 'border-t-transparent'} cursor-pointer flex space-x-1 items-center border-t-2 p-2`} onClick={onClick}>
            <RenderFileIcon filename={file.name}/>
            <span>{file.name}</span>
            <span onClick={e => 
                {
                    e.stopPropagation()
                    onRemove(file.id);
                }}>
                <CloseIcon />
            </span>
        </div>
    )
}

export default OpenedFileBarTap;