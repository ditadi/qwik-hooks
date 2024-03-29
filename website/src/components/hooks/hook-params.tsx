import { component$ } from "@builder.io/qwik";
import type { HookParams } from "~/docs";

type HookParamsProps = {
    params: HookParams[];
};

export default component$<HookParamsProps>((props) => {
    if (!props?.params?.length)
        return (
            <div id="hook-parameters" class="flex flex-col gap-3">
                <span class="font-bold text-secondary text-xl">PARAMETERS</span>
                <span class="font-bold text-secondary text-xl">None</span>
            </div>
        );
    return (
        <div id="hook-parameters" class="flex flex-col gap-3">
            <span class="font-bold text-secondary text-xl">PARAMETERS</span>
            <div class="w-full overflow-x-auto border border-solid border-opacity-10 border-yellow-200">
                <table class="rounded w-full">
                    <thead class="bg-[#393533] text-left text-secondary font-code w-full text-sm">
                        <tr class="w-full">
                            <th class="p-3 font-normal">Index</th>
                            <th class="p-3 font-normal">Type</th>
                            <th class="p-3 font-normal">Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.params.map((param) => (
                            <tr class="border border-solid border-opacity-10 border-yellow-200 text-left text-secondary font-code text-sm">
                                <td class="py-2 px-3 font-normal">{param.index}</td>
                                <td class="py-2 px-3 font-normal">{param.type}</td>
                                <td class="py-2 px-3 font-normal">{param.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
});
