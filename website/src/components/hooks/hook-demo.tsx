import { type JSXOutput, component$ } from "@builder.io/qwik";

type HookDemoProps = {
    demo: JSXOutput;
};

export default component$<HookDemoProps>((props) => {
    return (
        <div id="hook-demo" class="flex flex-col gap-4">
            <span class="font-bold text-secondary text-xl">DEMO:</span>
            {props.demo}
        </div>
    );
});
