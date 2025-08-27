import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { IFile } from '../../interfaces';


interface IClickedFile {
    fileName: string;
    fileContent: string | undefined;
    activeTapId: string | null;
}

interface IInitialState {
    openedFile: IFile[];
    clickedFile: IClickedFile;
    actionToClose: string | null;
}

const initialState: IInitialState = {
    openedFile: [],
    clickedFile: {
        activeTapId: null,
        fileName: '',
        fileContent: '',
    },
    actionToClose: null,
}

const FileTreeSlice = createSlice({
    name: 'filetree',
    initialState,
    reducers: {
        setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
            state.openedFile = action.payload;
        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload;
        },
        setActionToClose: (state, action: PayloadAction<string | null>) => {
            state.actionToClose = action.payload;
        }
    },
})

export const { setOpenedFile, setClickedFile, setActionToClose} = FileTreeSlice.actions;

export const selectFileTree = (state: RootState) => state;

export default FileTreeSlice.reducer;