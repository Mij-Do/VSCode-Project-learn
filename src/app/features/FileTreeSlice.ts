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
        
    },
})

export const { } = FileTreeSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value

export default FileTreeSlice.reducer;