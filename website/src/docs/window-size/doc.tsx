import type { HookDoc } from "..";
import UseWindowSizeCode from "./code";
import UseWindowSizeDemo from "./demo";

export default {
    key: "usewindowsize",
    title: "useWindowSize",
    highlight: "Track the dimensions of the browser window with useWindowSize.",
    description:
        "The useWindowSize hook is a useful for retrieving and tracking the dimensions of the browser window within a React component. It attaches an event listener to the “resize” event, ensuring that the size is updated dynamically whenever the window is resized. The hook returns the “size” object, enabling components to access and utilize the window dimensions for various purposes, such as responsive layout adjustments, conditional rendering, or calculations based on the available space.",
    params: null,
    return: [
        {
            name: "size",
            type: "Signal<{width: number, height: number;}>",
            description: "The current width and height of the window, in pixels.",
        },
    ],
    demo: UseWindowSizeDemo,
    code: UseWindowSizeCode,
} as HookDoc;
