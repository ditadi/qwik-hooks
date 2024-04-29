import type { HookDoc } from "..";
import UseClickOutsideCode from "./code";
import UseClickOutsideDemo from "./demo";

export default {
    key: "useclickoutside",
    title: "useClickOutside",
    highlight: "Detect clicks outside of specific component with useClickOutside.",
    description:
        "The useClickOutside hook is a useful for detecting clicks outside a specific component. It allows you to pass a callback function that will be triggered whenever a click occurs outside the component’s area. This hook is particularly helpful when implementing dropdown menus, modals, or any other UI elements that need to be closed when the user clicks outside of them. By attaching event listeners to the document, the hook checks if the click target is within the component’s reference, and if not, it invokes the provided callback function.",
    params: [
        {
            name: "callback",
            type: "function",
            description:
                "The callback function that is provided as an argument to useClickOutside. This function is invoked whenever a click event is detected outside of the referenced element. The event object from the click is passed to this callback function.",
        },
    ],
    demo: UseClickOutsideDemo,
    code: UseClickOutsideCode,
} as HookDoc;
