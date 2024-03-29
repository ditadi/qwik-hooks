import { component$ } from "@builder.io/qwik";
type HookDescriptionProps = {
    description: string;
};
export default component$<HookDescriptionProps>((props) => {
    return (
        <div id="hook-description" class="flex flex-col gap-4">
            <span class="font-bold text-secondary text-xl">DESCRIPTION:</span>
            <span class="text-secondary text-xl">{props.description}</span>
        </div>
    );
});
