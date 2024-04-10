import type { HookDoc } from "..";
import UseOrientationCode from "./code";
import UseOrientationDemo from "./demo";

export default {
    key: "useorientation",
    title: "useOrientation",
    highlight: "Manage and respond to changes in device orientation with useOrientation.",
    description:
        "The useOrientation React Hook simplifies the management of a device’s orientation within a React application. It wraps the complexity of listening for, handling, and cleaning up after orientation changes into a reusable hook. By abstracting this logic, the hook allows you to easily track device orientation, resulting in cleaner and more readable code. It adapts to both the Screen Orientation API and the deprecated window.orientation property, providing flexibility across different browser capabilities.",
    params: [],
    return: [
        {
            name: "orientation",
            type: "Signal<{ angle: number; type: string }>",
            description:
                "The current orientation of the device, including the angle and type of orientation.",
        },
    ],
    demo: UseOrientationDemo,
    code: UseOrientationCode,
} as HookDoc;
