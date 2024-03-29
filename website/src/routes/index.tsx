import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";
import HooksList from "~/components/hooks/hooks-list";

export default component$(() => {
    return (
        <div class="flex flex-col gap-4">
            <Hero />
            <HooksList />
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to qwikHooks",
    meta: [
        {
            name: "description",
            content: "A collection of modern, server-safe Qwik hooks",
        },
    ],
};
