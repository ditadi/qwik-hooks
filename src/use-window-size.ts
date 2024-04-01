import { $, useOnWindow, useSignal, useTask$ } from "@builder.io/qwik";

type WindowSize = {
    width: number;
    height: number;
};

const useWindowSize = () => {
    const size = useSignal<WindowSize>();

    const handleResize = $(() => {
        size.value = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    });

    /**
     * useTask$ triggers when the hooks is called after client-side routing.
     * useOnWindow("load") triggers when the page is loaded server-side.
     * useOnWindow("resize") triggers when the page is resized.
     */

    useTask$(() => {
        if (typeof window === "undefined") return;
        handleResize();
    });

    useOnWindow("load", handleResize);
    useOnWindow("resize", handleResize);

    return size;
};

export { useWindowSize };
