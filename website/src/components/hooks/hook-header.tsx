import { component$ } from "@builder.io/qwik";

type HookHeaderProps = {
    title: string;
    description: string;
};
export default component$<HookHeaderProps>((props) => {
    return (
        <div id="hook-header" class="flex flex-col gap-3 mt-8">
            <div id="hook-title">
                <span class="text-primary text-4xl">{props.title}</span>
            </div>
            <div id="hook-description">
                <span class="text-secondary text-2xl">{props.description}</span>
            </div>
        </div>
    );
});
