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
    activeTapId: string | null;
}

const initialState: IInitialState = {
    activeTapId: null,
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
        },
        setActiveTapId: (state, action: PayloadAction<string>) => {
            state.activeTapId = action.payload;
        }
    },
})

export const { setOpenedFile, setClickedFile, setActiveTapId } = FileTreeSlice.actions;

export const selectFileTree = (state: RootState) => state;

export default FileTreeSlice.reducer;