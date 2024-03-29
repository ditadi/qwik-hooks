import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Disclaimer from "~/components/layout/disclaimer";
import Header from "~/components/layout/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
    cacheControl({
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        maxAge: 5,
    });
};

export default component$(() => {
    return (
        <main class="p-12 min-h-screen bg-background border-foreground border-[1rem] rounded-sm flex flex-col">
            <Header />
            <Disclaimer />
            <Slot />
        </main>
    );
});
