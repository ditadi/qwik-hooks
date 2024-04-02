import type { HookDoc } from "..";
import UseDebounceCode from "./code";
import UseDebounceDemo from "./demo";

export default {
    key: "useDebounce",
    title: "useDebounce",
    highlight: "Delay the execution of function or state update with useDebounce.",
    description:
        "The useDebounce hook is useful for delaying the execution of functions or state updates until a specified time period has passed without any further changes to the input value. This is especially useful in scenarios such as handling user input or triggering network requests, where it effectively reduces unnecessary computations and ensures that resource-intensive operations are only performed after a pause in the input activity.",
    params: [
        {
            name: "value",
            type: "T",
            description: "The value that you want to debounce. This can be of any type.",
        },
        {
            name: "delay",
            type: "number",
            description:
                "The delay time in milliseconds. After this amount of time, the latest value is used.",
        },
        {
            name: "fn",
            type: "QRL<() => Promise<void>>",
            description:
                "The function that you want to execute after the delay time has passed. This is an optional parameter.",
        },
    ],
    return: [
        {
            name: "debouncedValue",
            type: "Signal<{width: number, height: number;}>",
            description:
                "The debounced value. After the delay time has passed without the value changing, this will be updated to the latest value.",
        },
        {
            name: "isDebouncing",
            type: "Signal<boolean>",
            description:
                "A boolean signal that indicates whether the debouncing process is currently active or not.",
        },
    ],
    demo: <UseDebounceDemo />,
    code: UseDebounceCode,
} as HookDoc;
