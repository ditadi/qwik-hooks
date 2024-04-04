import { component$ } from "@builder.io/qwik";

type HookDemoProps = {
    demo: any;
};

export default component$<HookDemoProps>((props) => {
    const Demo = props.demo;
    return (
        <div id="hook-demo" class="flex flex-col gap-4">
            <span class="font-bold text-secondary text-base md:text-xl lg:text-xl">DEMO:</span>
            {<Demo />}
        </div>
    );
});
