import { component$ } from "@builder.io/qwik";
import { useOrientation } from "@ditadi/qwik-hooks";

export default component$(() => {
    const { value: orientation } = useOrientation();

    return (
        <div class="flex flex-col bg-background w-full items-center p-10 gap-5">
            <h1 class="text-white">useOrientation</h1>

            <div
                class={`w-[200px] rotate-${orientation.angle} aspect-video bg-transparent border-primary border flex justify-center p-4 flex-col`}
            />
            <div class="flex gap-5 bg-foreground px-4 py-2 border border-primary rounded-sm">
                <span class="text-white">Type: {orientation.type}</span>
                <span class="text-white">Angle: {orientation.angle}</span>
            </div>
        </div>
    );
});
