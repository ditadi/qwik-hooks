import { component$ } from "@builder.io/qwik";
import { LuChevronRight, LuCopy } from "@qwikest/icons/lucide";
import { Button } from "../ui/button/button";

interface InstallProps {
    path: string;
    bgVariant: "foreground" | "background";
}
export default component$<InstallProps>((props) => {
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
                onClick$={() => console.log(props.path)}
            >
                <LuCopy class="mr-2" />
                Copy
            </Button>
        </div>
    );
});
