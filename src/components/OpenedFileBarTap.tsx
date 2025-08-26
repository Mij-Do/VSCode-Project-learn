import { useDispatch, useSelector } from 'react-redux';
import type { IFile } from '../interfaces';
import RenderFileIcon from './RenderFileIcon';
import CloseIcon from './SVG/CloseIcon';
import { setClickedFile } from '../app/features/FileTreeSlice';
import type { RootState } from '../app/store';

interface IProps {
    file: IFile;
}

const OpenedFileBarTap = ({file}: IProps) => {
    const {activeTapId} = useSelector((state: RootState) => state.filetree.clickedFile);
    const {name, content, id} = file;
    const dispatch = useDispatch();
    // handlers
    const onClick = () => {
        dispatch(setClickedFile({fileName: name, fileContent: content, activeTapId: id}));
    }

    return (
        <div className={`${activeTapId === id ? 'border-[#cf6ccf]' : 'border-t-transparent'} cursor-pointer flex space-x-1 items-center border-t-2 p-2`} onClick={onClick}>
            <RenderFileIcon filename={file.name}/>
            <span>{file.name}</span>
            <CloseIcon />
        </div>
    )
}

export default OpenedFileBarTap;