export default `
import { component$ } from "@builder.io/qwik";
import { useWindowSize } from "@ditadi/qwik-hooks";

export default component$(() => {
    const windowSize = useWindowSize();
    return (
        <div class="w-[500px] h-[500px] bg-background flex flex-col justify-center items-center gap-10">
            <span class="text-xl text-white">useWindowSize</span>
            <div class="flex flex-col gap-3">
                <span class="text-white">Width: {windowSize.value?.width}</span>
                <span class="text-white">Height: {windowSize.value?.height}</span>
            </div>
        </div>
    );
});
`;
