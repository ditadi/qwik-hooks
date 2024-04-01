import { component$ } from "@builder.io/qwik";

type HookHeaderProps = {
    title: string;
    description: string;
};
export default component$<HookHeaderProps>((props) => {
    return (
        <div id="hook-header" class="flex flex-col gap-3 mt-6 md:mt-4 lg:mt-4">
            <div id="hook-title">
                <h1 class="text-primary font-semibold text-[clamp(1rem,5vw,2.6rem)]">
                    {props.title}
                </h1>
            </div>
            <div id="hook-description" class="w-full">
                <p class="text-secondary">{props.description}</p>
            </div>
        </div>
    );
});
