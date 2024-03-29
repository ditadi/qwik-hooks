import { component$ } from "@builder.io/qwik";
import CodePreview from "~/components/code-preview/code-preview";

type HookCodeProps = {
    code: string;
};

export default component$<HookCodeProps>((props) => {
    if (!props?.code) return null;
    return (
        <div id="hook-code">
            <CodePreview code={props.code} />
        </div>
    );
});
