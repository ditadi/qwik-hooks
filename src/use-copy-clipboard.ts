import { $, type QRL, type Signal, useSignal } from "@builder.io/qwik";

const useCopyClipboard = (
    timeout = 300,
): {
    copy: Signal<string | boolean | null>;
    setCopy: QRL<(value: string | boolean | null) => void>;
    isCopying: Signal<boolean>;
} => {
    const copy = useSignal<null | string | boolean>(null);
    const isCopying = useSignal<boolean>(false);

    const setCopy = $((value: string | boolean | null) => {
        isCopying.value = true;
        setTimeout(async () => {
            try {
                if (navigator?.clipboard?.writeText) {
                    await navigator.clipboard.writeText(value?.toString() ?? "");
                    copy.value = value;
                } else {
                    throw new Error("Clipboard API not available");
                }
            } catch (error) {
                copy.value = null;
            }
            isCopying.value = false;
        }, timeout);
    });

    return {
        copy,
        setCopy,
        isCopying,
    };
};

export { useCopyClipboard };
