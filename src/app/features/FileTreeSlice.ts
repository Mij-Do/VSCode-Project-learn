import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { IFile } from '../../interfaces';


interface IClickedFile {
    fileName: string;
    fileContent: string;
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
        }
    },
})

export const { setOpenedFile } = FileTreeSlice.actions;

export const selectFileTree = (state: RootState) => state;

export default FileTreeSlice.reducer;