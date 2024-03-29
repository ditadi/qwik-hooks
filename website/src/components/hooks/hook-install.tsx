import { component$ } from "@builder.io/qwik";
import Install from "../install/install";

export default component$(() => {
    return (
        <div id="hook-install" class="flex flex-col gap-4">
            <span class="font-bold text-secondary text-xl">INSTALL:</span>
            <Install bgVariant="background" path="npm i @ditadi/qwik-hooks" />
        </div>
    );
});
