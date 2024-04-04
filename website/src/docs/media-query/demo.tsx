import { component$ } from "@builder.io/qwik";
import { useMediaQuery } from "@ditadi/qwik-hooks";

export default component$(() => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isMediumDevice = useMediaQuery(
        "only screen and (min-width : 769px) and (max-width : 992px)",
    );
    const isLargeDevice = useMediaQuery(
        "only screen and (min-width : 993px) and (max-width : 1200px)",
    );
    const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");

    return (
        <div class="w-full flex flex-col bg-background text-white p-10 justify-center items-center gap-5">
            <h1 class="text-xl text-white">useMediaQuery</h1>
            <span>Resize your browser windows to see changes</span>
            <div class="flex gap-5 w-full justify-center items-center flex-col md:flex-row">
                <div
                    class="w-full h-28 flex justify-center items-center border rounded"
                    style={{
                        borderColor: isSmallDevice.value
                            ? "hsl(var(--primary))"
                            : "hsl(var(--primary-foreground))",
                    }}
                >
                    <span>Mobile</span>
                </div>

                <div
                    class="w-full h-28 flex justify-center items-center border rounded"
                    style={{
                        borderColor: isMediumDevice.value
                            ? "hsl(var(--primary))"
                            : "hsl(var(--primary-foreground))",
                    }}
                >
                    <span>Medium</span>
                </div>
                <div
                    class="w-full h-28 flex justify-center items-center border rounded"
                    style={{
                        borderColor: isLargeDevice.value
                            ? "hsl(var(--primary))"
                            : "hsl(var(--primary-foreground))",
                    }}
                >
                    <span>Large</span>
                </div>
                <div
                    class="w-full h-28 flex justify-center items-center border rounded"
                    style={{
                        borderColor: isExtraLargeDevice.value
                            ? "hsl(var(--primary))"
                            : "hsl(var(--primary-foreground))",
                    }}
                >
                    <span>Extra Large</span>
                </div>
            </div>
        </div>
    );
});
