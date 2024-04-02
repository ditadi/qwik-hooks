import { type PropFunction, type Signal, useSignal, useTask$ } from "@builder.io/qwik";

const useDebounce = <T>(input: Signal, delay: number, fn?: PropFunction<(value: T) => void>) => {
    const debouncedSignal = useSignal("");
    const isDebouncing = useSignal(false);

    useTask$(({ track, cleanup }) => {
        track(() => input.value);

        if (input.value.length === 0) {
            return;
        }

        isDebouncing.value = true;
        const debounced = setTimeout(async () => {
            fn && (await fn(input.value));

            debouncedSignal.value = input.value;
            isDebouncing.value = false;
        }, delay);

        cleanup(() => clearTimeout(debounced));
    });

    return { debouncedSignal, isDebouncing };
};

export { useDebounce };
