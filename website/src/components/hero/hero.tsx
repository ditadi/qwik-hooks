import { component$ } from "@builder.io/qwik";
import Install from "../install/install";
import QwikHooksLogo from "../layout/logo";

export default component$(() => {
    return (
        <div class="flex justify-center items-center flex-col text-center gap-8">
            <QwikHooksLogo width={"clamp(20rem,50vw,30rem)"} />
            <div class="flex flex-col max-w-lg">
                <h1 class="text-white transform-none font-sans text-[clamp(1.2rem,2.5vw,1.5rem)]">
                    A collection of modern, server-safe React hooks – from the ui.dev team
                </h1>
            </div>
            <div class="w-full max-w-4xl">
                <Install bgVariant="foreground" path="npm i -D @ditadi/qwik-hooks" />
            </div>
        </div>
    );
});
