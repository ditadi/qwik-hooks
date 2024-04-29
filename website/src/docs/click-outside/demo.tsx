import { $, component$, useSignal } from "@builder.io/qwik";
import { useClickOutside } from "@ditadi/qwik-hooks";
import { Button } from "~/components/ui/button/button";

export default component$(() => {
    const isDialogOpen = useSignal(false);
    const ref = useSignal<HTMLDivElement>();

    useClickOutside(
        ref,
        $(() => {
            isDialogOpen.value = false;
        }),
    );

    return (
        <div class="flex flex-col bg-background w-full items-center p-10 gap-5">
            <Button
                onClick$={async () => {
                    isDialogOpen.value = true;
                }}
            >
                Open Dialog
            </Button>
            <dialog ref={ref} class="bg-white p-5 rounded-lg" open={isDialogOpen.value}>
                <span class="text-lg">Click outside this dialog</span>
            </dialog>
        </div>
    );
});
