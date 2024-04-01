import { component$ } from "@builder.io/qwik";
import type { HookReturn } from "~/docs";

type HookReturnProps = {
    title: string;
    return: HookReturn[];
};

export default component$<HookReturnProps>((props) => {
    return (
        <div id="hook-return" class="flex flex-col gap-8">
            <span class="font-bold text-secondary text-base md:text-xl lg:text-xl">
                RETURN VALUE
            </span>
            <span class="text-secondary text-base md:text-xl lg:text-xl">
                The{" "}
                <span class="bg-background px-2 py-3 rounded-[0.4rem] font-code text-base ">
                    {props.title}
                </span>{" "}
                hook returns an array with the following elements:
            </span>
            <div class="w-full overflow-x-auto border border-solid border-opacity-10 border-yellow-200">
                <table class="rounded w-full">
                    <thead class="bg-[#393533] text-left text-secondary font-code w-full text-sm">
                        <tr class="w-full">
                            <th class="p-3 font-normal">Name</th>
                            <th class="p-3 font-normal min-w-[300px]">Type</th>
                            <th class="p-3 font-normal min-w-[300px]">Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.return.map((item) => (
                            <tr class="border border-solid border-opacity-10 border-yellow-200 text-left text-secondary font-code text-sm">
                                <td class="py-2 px-3 font-normal">{item.name}</td>
                                <td class="py-2 px-3 font-normal">{item.type}</td>
                                <td class="py-2 px-3 font-normal">{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
});
