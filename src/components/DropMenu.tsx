import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFile } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
    position: {
        x: number;
        y: number;
    }
    setShowDrop: (val: boolean) => void;
}

const DropMenu = ({position, setShowDrop}: IProps) => {
    const {openedFile, actionToClose} = useSelector((state: RootState) => state.filetree);
    const dispatch = useDispatch();
    const menuRef = useRef<HTMLDivElement>(null);
    const {x, y} = position;
    useEffect(() => {
        const onClickHandel = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowDrop(false);
            }
        }
        window.addEventListener("click", onClickHandel);

        // cleanup 
        return () => {
            window.removeEventListener("click", onClickHandel);
        }
    }, [setShowDrop]);
    const onClose = () => {
        const filtered = openedFile.filter(file => file.id !== actionToClose);
        dispatch(setOpenedFile(filtered));
        setShowDrop(false);
    }
    const onRemoveAll = () => {
        dispatch(setOpenedFile([]));
        setShowDrop(false);
    }
    return (
        <div ref={menuRef}>
            <ul className="bg-white text-black w-fit px-5 py-2 rounded-md cursor-pointer" style={{position: "absolute", left: x, top: y,}}>
                <li className="hover:bg-gray-400 rounded-md w-full p-1" onClick={onClose}>Close</li>
                <li className="hover:bg-gray-400 rounded-md w-full p-1" onClick={onRemoveAll}>Close All</li>
            </ul>
        </div>
    )
}

export default DropMenu;