import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import HookCode from "~/components/hooks/hook-code";
import HookDemo from "~/components/hooks/hook-demo";
import HookDescription from "~/components/hooks/hook-description";
import HookHeader from "~/components/hooks/hook-header";
import HookInstall from "~/components/hooks/hook-install";
import HookParams from "~/components/hooks/hook-params";
import HookReturn from "~/components/hooks/hook-return";
import HooksList from "~/components/hooks/hooks-list";
import ListOfHooks from "~/docs/index";

export default component$(() => {
    const location = useLocation();
    const selectedHook = ListOfHooks.find((hook) => hook.key === location.params.hook);

    if (!selectedHook) {
        return (
            <div class="flex flex-col mx-auto my-16 max-w-[1024px] justify-center gap-10">
                <div class="flex flex-col bg-foreground gap-10  p-10 rounded">
                    <HookHeader title="404" description="Hook not found" />
                </div>
            </div>
        );
    }

    return (
        <div class="w-full max-w-[1024px] my-16 mx-auto">
            <section class="p-5 md:p-[4vw] lg:p-12 pt-0 flex flex-col gap-8 md:gap-[6vw] lg:gap-12 bg-foreground z-0 rounded">
                <HookHeader title={selectedHook.title} description={selectedHook.highlight} />
                <HookInstall />
                <HookDescription description={selectedHook.description} />
                <HookParams params={selectedHook.params} />
                <HookReturn title={selectedHook.title} return={selectedHook.return} />
                <HookDemo demo={selectedHook.demo} />
                <HookCode code={selectedHook.code} />
            </section>

            <div id="hook-install" class="flex flex-col gap-2 bg-background mt-4">
                <span class="font-bold text-secondary text-base md:text-xl lg:text-xl">
                    MORE HOOKS:
                </span>
                <HooksList />
            </div>
        </div>
    );
});
