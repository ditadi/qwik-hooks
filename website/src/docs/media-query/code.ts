export default `
import { component$ } from "@builder.io/qwik";
import { useMediaQuery } from "@ditadi/qwik-hooks";
export default component$(() => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
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
            </div>
        </div>
    );
});
`;
