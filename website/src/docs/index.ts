import useCopyClipboard from "./copy-clipboard/doc";
import useDebounce from "./debounce/doc";
import useLocalStorage from "./local-storage/doc";
import useMediaQuery from "./media-query/doc";
import useOrientation from "./orientation/doc";
import usePrevious from "./previous/doc";
import useWindowSize from "./window-size/doc";

export interface HookParams {
    name: string;
    type: string;
    description: string;
}

export interface HookReturn {
    name: string;
    type: string;
    description: string;
}

export interface HookDoc {
    key: string;
    title: string;
    highlight: string;
    description: string;
    params: HookParams[] | null;
    return: HookReturn[];
    demo: any;
    code: string;
}

export default [
    useDebounce,
    useLocalStorage,
    useCopyClipboard,
    useWindowSize,
    usePrevious,
    useMediaQuery,
    useOrientation,
] as HookDoc[];
