import { component$ } from "@builder.io/qwik";
import { useCopyClipboard } from "@ditadi/qwik-hooks";
import { LuChevronRight, LuCopy, LuLoader } from "@qwikest/icons/lucide";
import { Button } from "../ui/button/button";

interface InstallProps {
    path: string;
    bgVariant: "foreground" | "background";
}
export default component$<InstallProps>((props) => {
    const { copy, isCopying, setCopy } = useCopyClipboard();
    return (
        <div
            class={`flex justify-between bg-${props.bgVariant} p-4 rounded-[10px] gap-5 w-full h-20 items-center text-center `}
        >
            <span class="text-white flex items-center justify-center font-code text-[clamp(.8rem,3vw,1.2rem)]">
                <LuChevronRight class="mr-2 text-primary" />
                {props.path}
            </span>
            <Button
                look="secondary"
                size="sm"
                class="font-sans rounded-[10px] h-6 md:h-10 lg:h-10"
                onClick$={() => setCopy(props.path)}
            >
                {isCopying.value ? (
                    <LuLoader class="animate-spin" />
                ) : copy.value ? (
                    <>
                        <LuCopy class="mr-2" />
                        <span class="text-[0.5rem] md:text-sm lg:text-sm">Copied</span>
                    </>
                ) : (
                    <>
                        <LuCopy class="mr-2 w-[0.5rem] md:w-4 lg:w-4" />
                        <span class="text-[0.5rem] md:text-sm lg:text-sm">Copy</span>
                    </>
                )}
            </Button>
        </div>
    );
});
