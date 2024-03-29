import { component$ } from "@builder.io/qwik";
import Install from "~/components/install/install";

export default component$(() => {
    return <Install bgVariant="background" path="click at button to copy" />;
});
