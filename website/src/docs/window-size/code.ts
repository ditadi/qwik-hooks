export default `
import { component$ } from "@builder.io/qwik";
import { useWindowSize } from "../../../../src/use-window-size";

export default component$(() => {
    const windowSize = useWindowSize();
    return (
        <div class="w-[500px] h-[500px] bg-background flex flex-col">
            <span class="text-xl text-white">useWindowSize</span>
            <span class="text-white">Width: {windowSize.value?.width}</span>
            <span class="text-white">Height: {windowSize.value?.height}</span>
        </div>
    );
});
`;
