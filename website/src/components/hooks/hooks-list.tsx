import { component$ } from "@builder.io/qwik";
import ListOfHooks from "~/docs/index";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card/card";
import HookCard from "./hook-card";

export default component$(() => {
    return (
        <div class="max-w-[1024px] md:my-8 my-2 mx-auto">
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {ListOfHooks.map((hook) => (
                    <HookCard hook={hook} />
                ))}
                <Card class="w-full bg-foreground border-transparent col-span-1 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
                    <CardHeader class="gap-2">
                        <CardTitle class="text-primary text-xl">more to come...</CardTitle>
                        <CardDescription class="text-white text-base">
                            this a new library, more hooks will be added soon.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </ul>
        </div>
    );
});
