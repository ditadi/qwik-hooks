import type { QRL, Signal } from "@builder.io/qwik";
import { $, useOnDocument } from "@builder.io/qwik";

/**
 * This code defines a function useClickOutside that listens for a click event on the document. 
 * It checks if the clicked element is not within the specified ref element and then calls the function specified by onClickOut.
 *
 * @param {Signal<HTMLElement | undefined>} ref - The reference to the HTMLElement or undefined.
 * @param {QRL<() => void>} onClickOut - The QRL of the function to be called when clicked outside.
 */
export const useClickOutside = (
  ref: Signal<HTMLElement | undefined>,
  onClickOut: QRL<() => void>,
) => {
  useOnDocument(
    "click",
    $((event) => {
      if (!ref.value) {
        return;
      }
      const target = event.target as HTMLElement;
      if (!ref.value.contains(target)) {
        onClickOut();
      }
    }),
  );
};
