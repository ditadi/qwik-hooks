import type { HookDoc } from "..";
import UseMediaQueryCode from "./code";
import UseMediaQueryDemo from "./demo";

export default {
    key: "usemediaquery",
    title: "useMediaQuery",
    highlight: "Subscribe and respond to media query changes with useMediaQuery.",
    description:
        "The useMediaQuery hook leverages the window.matchMedia API to subscribe to CSS media query changes, thereby providing real-time responsiveness to dynamic changes in the viewport or screen orientation. It allows the component to rerender whenever the media query’s result changes. It throws an error if attempted to be used on the server-side (media queries only work in the browser).",
    params: [
        {
            name: "query",
            type: "string",
            description: "The media query to listen changes",
        },
    ],
    return: [
        {
            name: "s",
            type: "Signal<boolean>",
            description:
                "Returns a boolean value indicating whether the media query matches the current state of the device.",
        },
    ],
    demo: UseMediaQueryDemo,
    code: UseMediaQueryCode,
} as HookDoc;
