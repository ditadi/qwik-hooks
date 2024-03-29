import { component$ } from "@builder.io/qwik";
import { useCopyClipboard } from "@ditadi/qwik-hooks";
import { LuChevronRight, LuCopy } from "@qwikest/icons/lucide";
import { Button } from "../ui/button/button";

interface InstallProps {
    path: string;
    bgVariant: "foreground" | "background";
}
export default component$<InstallProps>((props) => {
    const { copy, isCopying, setCopy } = useCopyClipboard();
    return (
        <div
            class={`flex justify-between bg-${props.bgVariant} p-4 rounded gap-5 w-full h-20 items-center text-center`}
        >
            <span class="text-white flex items-center justify-center font-code">
                <LuChevronRight class="mr-2 text-primary" />
                {props.path}
            </span>
            <Button
                look="secondary"
                size="sm"
                class="font-sans"
                onClick$={() => setCopy(props.path)}
            >
                <LuCopy class="mr-2" />
                {isCopying.value ? "Copying..." : copy.value ? "Copied" : "Copy"}
            </Button>
        </div>
    );
});
