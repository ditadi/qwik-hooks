import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuChevronRight } from "@qwikest/icons/lucide";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card/card";

type HookCardProps = {
    hook: {
        key: string;
        title: string;
        highlight: string;
    };
};
export default component$<HookCardProps>((props) => {
    return (
        <li class="flex flex-col gap-1.5 bg-charcoal rounded-[0.5rem] transition-transform duration-200 ease-in-out">
            <Link href={`/${props.hook.key}`}>
                <Card class="w-full sm:h-40 md:h-60 lg:h-52 bg-foreground border-transparent col-span-1 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
                    <CardHeader class="gap-2">
                        <CardTitle class="text-primary text-xl">{props.hook.title}</CardTitle>
                        <CardDescription class="text-white text-base">
                            {props.hook.highlight}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter class="flex justify-end">
                        <LuChevronRight class="text-primary w-6 h-6" />
                    </CardFooter>
                </Card>
            </Link>
        </li>
    );
});
