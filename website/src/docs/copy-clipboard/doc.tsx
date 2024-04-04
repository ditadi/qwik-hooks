import type { HookDoc } from "..";
import UseCopyClipboardCode from "./code";
import UseCopyClipboardDemo from "./demo";

export default {
    key: "useCopyClipboard",
    title: "useCopyClipboard",
    highlight: "Copy text to the clipboard using useCopyClipboard.",
    description:
        "The useCopyToClipboard hook is useful because it abstracts the complexity of copying text to the clipboard in a cross-browser compatible manner. It utilizes the modern navigator.clipboard.writeText method if available, which provides a more efficient and secure way to copy text. In case the writeText method is not supported by the browser, it falls back to a traditional method using the document.execCommand(“copy”) approach",
    params: [
        {
            name: "timeout",
            type: "number (optional)",
            description:
                "The timeout in milliseconds to execute the copy operation. Default is 300ms.",
        },
    ],
    return: [
        {
            name: "copy",
            type: "Signal<string | boolean | null>",

            description: "The value that was last copied to the clipboard.",
        },
        {
            name: "setCopy",
            type: "QRL<(value: string | boolean | null) => Promise<void>>",
            description: "A function to copy a specified value to the clipboard.",
        },
        {
            name: "isCopying",
            type: "Signal<boolean>",
            description:
                "A boolean signal that indicates whether the copy operation is in progress.",
        },
    ],
    demo: UseCopyClipboardDemo,
    code: UseCopyClipboardCode,
} as HookDoc;
