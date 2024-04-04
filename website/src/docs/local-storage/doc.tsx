import type { HookDoc } from "..";
import UseLocalStorageCode from "./code";
import UseLocalStorageDemo from "./demo";

export default {
    key: "uselocalstorage",
    title: "useLocalStorage",
    highlight:
        "Store, retrieve, and synchronize data from the browser’s localStorage API with useLocalStorage",
    description:
        "The useLocalStorage hook provides a convenient way to synchronize the state of a component with the data stored in local storage. It automatically reads the initial value from local storage when the component mounts and updates the local storage whenever the state changes. Additionally, it listens for changes in local storage made by other tabs or windows and keeps the component’s state up to date.",
    params: [
        {
            name: "key",
            type: "string",
            description: "The key used to access the local storage value.",
        },
        {
            name: "initialValue",
            type: "any (optional)",
            description:
                "The initial value to use if there is no item in the local storage with the provided key.",
        },
    ],
    return: [
        {
            name: "storedValue",
            type: "Signal<any>",
            description: "The current state of the value stored in local storage.",
        },
        {
            name: "setStoredValue",
            type: "QRL<(newValue: any) => void>",
            description:
                "A function to set the state of the value in the local storage. This function accepts a new value or a function that returns a new value. The value is also saved in the local storage under the provided key.",
        },
    ],
    demo: UseLocalStorageDemo,
    code: UseLocalStorageCode,
} as HookDoc;
