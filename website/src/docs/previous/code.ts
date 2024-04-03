export default `
import { component$, useSignal } from "@builder.io/qwik";
import { usePrevious } from "@ditadi/qwik-hooks";
import { Button } from "~/components/ui/button/button";

const getRandomColor = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    return \`#\${n.slice(0, 6)}\`;
};

export default component$(() => {
    const current = useSignal(getRandomColor());
    const previous = usePrevious(current);

    return (
        <div class="flex flex-col bg-background w-full items-center p-10 gap-5">
            <h1 class="text-white">usePrevious</h1>
            <Button
                onClick$={() => {
                    current.value = getRandomColor();
                }}
                look={"link"}
                size="sm"
                class="text-white hover:text-primary"
            >
                Next
            </Button>
            <div class="flex gap-4">
                <div
                    class="w-56 h-56"
                    style={{ backgroundColor: previous.value ?? "transparent" }}
                />
                <div class="w-56 h-56" style={{ backgroundColor: current.value }} />
            </div>
        </div>
    );
});

`;
