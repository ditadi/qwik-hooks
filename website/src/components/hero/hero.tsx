import { component$ } from "@builder.io/qwik";
import Install from "../install/install";
import QwikHooksLogo from "../layout/logo";

export default component$(() => {
    return (
        <div class="flex justify-center items-center flex-col text-center gap-4">
            <QwikHooksLogo width={700} />
            <div class="flex flex-col gap-8">
                <h1 class="text-white max-w-4xl text-xl transform-none font-sans">
                    A collection of modern, server-safe qwik hooks.
                </h1>
                <div class="w-[40rem]">
                    <Install bgVariant="foreground" path="npm i @ditadi/qwik-hooks" />
                </div>
            </div>
        </div>
    );
});
