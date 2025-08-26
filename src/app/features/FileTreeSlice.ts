import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { IFile } from '../../interfaces';


interface IClickedFile {
    fileName: string;
    fileContent: string | undefined;
}

interface IInitialState {
    openedFile: IFile[];
    clickedFile: IClickedFile;
}

const initialState: IInitialState = {
    openedFile: [],
    clickedFile: {
        fileName: '',
        fileContent: '',
    }
}

const FileTreeSlice = createSlice({
    name: 'filetree',
    initialState,
    reducers: {
        setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
            state.openedFile = action.payload;
        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile.fileName = action.payload.fileName;
            state.clickedFile.fileContent = action.payload.fileContent;
        }
    },
})

export const { setOpenedFile, setClickedFile } = FileTreeSlice.actions;

export const selectFileTree = (state: RootState) => state;

export default FileTreeSlice.reducer;