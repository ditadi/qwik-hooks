import { $, useOnWindow, useSignal, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";

const MediaQueryCache = new Map<string, MediaQueryList>();

const useMediaQuery = (query: string) => {
    const isMatched = useSignal();

    const updateMatch = $((media: MediaQueryList) => {
        isMatched.value = media.matches;
    });

    const listenMediaQuery = $(() => {
        const mediaQueryCached = MediaQueryCache.get(query);
        if (mediaQueryCached) {
            updateMatch(mediaQueryCached);
            return;
        }

        const mediaQueryUncached = window.matchMedia(query);
        MediaQueryCache.set(query, mediaQueryUncached);

        updateMatch(mediaQueryUncached);
    });

    useTask$(async () => {
        if (isServer) return;
        listenMediaQuery();
    });

    useOnWindow("load", listenMediaQuery);
    useOnWindow("resize", listenMediaQuery);

    return isMatched;
};

export { useMediaQuery };
