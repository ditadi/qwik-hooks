export default `
s
import { component$ } from "@builder.io/qwik";
import { useLocalStorage } from "@ditadi/qwik-hooks";
import { Button } from "~/components/ui/button/button";

export default component$(() => {
    const { storedValue, setStoredValue } = useLocalStorage<number>("qwikhooks-demo");

    return (
        <div class="w-full flex flex-col bg-background text-white p-10 justify-center items-center gap-5">
            <h1 class="text-xl text-white">useLocalStorage</h1>
            <p>Current Value: {storedValue.value}</p>
            <div class="flex gap-2">
                <Button
                    size="sm"
                    class="rounded-[5px]"
                    look={"secondary"}
                    onClick$={() => setStoredValue(Math.random())}
                >
                    Store new Value
                </Button>
                <Button
                    size="sm"
                    class="rounded-[5px]"
                    look={"alert"}
                    onClick$={() => setStoredValue(null)}
                >
                    Clear Value
                </Button>
            </div>
        </div>
    );
});
`;
