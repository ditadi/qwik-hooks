import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { LuChevronLeft, LuGithub, LuTwitter } from "@qwikest/icons/lucide";

export default component$(() => {
    const location = useLocation();
    return (
        <div class="flex justify-between">
            <Link href="/">
                {location.url.pathname === "/" ? null : (
                    <span class="text-white font-medium text-center items-center flex hover:underline">
                        <LuChevronLeft class="mr-2" />
                        All Hooks
                    </span>
                )}
            </Link>
            <div class="flex gap-5">
                <Link href="https://github.com/ditadi/qwik-hooks">
                    <LuGithub class="text-secondary text-4xl hover:text-primary" />
                </Link>
                <Link href="https://twitter.com/victorditadi">
                    <LuTwitter class="text-secondary text-4xl hover:text-primary" />
                </Link>
            </div>
        </div>
    );
});
