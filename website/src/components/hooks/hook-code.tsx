import { component$ } from "@builder.io/qwik";
import CodePreview from "~/components/code-preview/code-preview";

type HookCodeProps = {
    code: string;
};

export default component$<HookCodeProps>((props) => {
    if (!props?.code) return null;
    return (
        <div id="hook-code" class="flex flex-col gap-4">
            <span class="font-bold text-secondary text-base md:text-xl lg:text-xl">Example:</span>
            <CodePreview code={props.code} />
        </div>
    );
});
