import { $, type QRL, type Signal, useOnWindow, useSignal, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";

type UseLocalStorageResponse<T> = {
    storedValue: Signal<T | null>;
    setStoredValue: QRL<(newValue: T | null) => void>;
};

const useLocalStorage = <T>(key: string, initialValue?: T): UseLocalStorageResponse<T> => {
    const storedValue = useSignal<T | null>(null);

    const setStoredValue = $((newValue: T | null) => {
        const newValueToBeStored = JSON.stringify(newValue);
        localStorage.setItem(key, newValueToBeStored);
        storedValue.value = newValue;
    });

    const listenerLocalStorage = $((listenerKey: string | null) => {
        if (listenerKey !== key) return;

        const currentItem = localStorage.getItem(key);
        storedValue.value = currentItem ? JSON.parse(currentItem) : initialValue || null;
    });

    /**
     * useTask$ triggers when the hooks is called after client-side routing.
     * useOnWindow("load") triggers when the page is loaded server-side.
     * useOnWindow("storage") triggers when local storage is changed from other tabs or components.
     */

    useTask$(() => {
        if (isServer) return;
        listenerLocalStorage(key);
    });

    useOnWindow(
        "load",
        $(() => listenerLocalStorage(key)),
    );
    useOnWindow(
        "storage",
        $((e) => listenerLocalStorage(e.key)),
    );

    return { storedValue, setStoredValue };
};

export { useLocalStorage };
