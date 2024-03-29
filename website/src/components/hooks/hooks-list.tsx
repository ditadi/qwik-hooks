import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuChevronRight } from "@qwikest/icons/lucide";
import ListOfHooks from "~/docs/index";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card/card";

export default component$(() => {
    return (
        <div class="grid grid-cols-3 max-w-[980px] gap-5 mx-auto my-8">
            {ListOfHooks.map((hook) => (
                <Link href={`/${hook.key}`}>
                    <Card class="w-[300px] bg-foreground border-transparent col-span-1 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
                        <CardHeader class="gap-2">
                            <CardTitle class="text-primary text-xl">{hook.title}</CardTitle>
                            <CardDescription class="text-white text-base">
                                {hook.highlight}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter class="flex justify-end">
                            <LuChevronRight class="text-primary w-6 h-6" />
                        </CardFooter>
                    </Card>
                </Link>
            ))}
            <Card class="w-[300px] bg-foreground border-transparent col-span-1 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
                <CardHeader class="gap-2">
                    <CardTitle class="text-primary text-xl">more to come...</CardTitle>
                    <CardDescription class="text-white text-base">
                        this a new library, more hooks will be added soon.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
});
