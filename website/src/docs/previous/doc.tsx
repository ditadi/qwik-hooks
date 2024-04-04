import type { HookDoc } from "..";
import UsePreviousCode from "./code";
import UsePreviousDemo from "./demo";

export default {
    key: "useprevious",
    title: "usePrevious",
    highlight: "Track the previous value of a variable with usePrevious.",
    description:
        "The usePrevious hook is a useful tool for tracking the previous value of a variable in a functional component. This can be particularly handy in scenarios where it is necessary to compare the current value with the previous one, such as triggering actions or rendering based on changes.",
    params: [
        {
            name: "newValue",
            type: "Signal<any>",
            description: "The new value to track and return the previous of.",
        },
    ],
    return: [
        {
            name: "previousValue",
            type: "Signal<any>",
            description: "The previous value of the provided newValue.",
        },
    ],
    demo: UsePreviousDemo,
    code: UsePreviousCode,
} as HookDoc;
