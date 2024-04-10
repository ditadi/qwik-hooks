import { $, useOnWindow, useSignal, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";

type Orientation = {
    angle: number;
    type: "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary";
};

const useOrientation = () => {
    const orientationSignal = useSignal<Orientation>({
        angle: 0,
        type: "landscape-primary",
    });

    const handleOrientationChange = $(() => {
        const { orientation } = window.screen;

        orientationSignal.value = {
            angle: orientation.angle,
            type: orientation.type,
        };
    });

    /**
     * useTask$ triggers when the hooks is called after client-side routing.
     * useOnWindow("load") triggers when the page is loaded server-side.
     * useOnWindow("change") triggers when the page has orientation change.
     */

    useTask$(() => {
        if (isServer) return;
        handleOrientationChange();
    });

    useOnWindow("load", handleOrientationChange);
    useOnWindow("change", handleOrientationChange);

    return orientationSignal;
};

export { useOrientation };
