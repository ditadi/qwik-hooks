import { type Signal, useSignal, useTask$ } from "@builder.io/qwik";

const usePrevious = <T>(current: Signal<T>) => {
    const internalCurrent = useSignal<T | null>(current.value);
    const previous = useSignal<T | null>(null);

    useTask$(({ track }) => {
        track(() => current.value);
        if (internalCurrent.value !== current.value) {
            previous.value = internalCurrent.value;
            internalCurrent.value = current.value;
        }
    });

    return previous;
};

export { usePrevious };
