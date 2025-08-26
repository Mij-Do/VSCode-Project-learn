import type { IFile } from "../interfaces";

export const doesFileObjExists = (arr: IFile[], id: string) => {
    return arr.some(obj => obj.id === id);
}