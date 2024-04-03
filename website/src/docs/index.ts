import type { JSXOutput } from "@builder.io/qwik";

import useCopyClipboardDoc from "./copy-clipboard/doc";
import useDebounce from "./debounce/doc";
import useLocalStorage from "./local-storage/doc";
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
    demo: JSXOutput;
    code: string;
}

export default [useDebounce, useLocalStorage, useCopyClipboardDoc, useWindowSize] as HookDoc[];
