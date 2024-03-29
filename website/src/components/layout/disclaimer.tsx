import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class={"absolute top-0 left-0 w-full"}>
            <div class="flex items-center justify-center text-white bg-foreground h-10">
                <div class="text-center">
                    this project was heavily inspired by{" "}
                    <Link href="https://usehooks.dev" class="hover:underline hover:text-primary">
                        usehooks.dev
                    </Link>{" "}
                    and built with the purpose of increasing qwik ecosystem. by:{" "}
                    <Link
                        href="https://twitter.com/victorditadi"
                        class="hover:underline hover:text-primary"
                    >
                        @victorditadi
                    </Link>
                </div>
            </div>
        </div>
    );
});
