import {
    $,
    type ClassList,
    type PropsOf,
    component$,
    useOnWindow,
    useSignal,
    useTask$,
} from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import { cn } from "@qwik-ui/utils";
import { CodeCopy } from "./code-copy";
import { highlighter as highlighterPromise } from "./highlighter";

export type CodePreviewProps = PropsOf<"div"> & {
    code: string;
    copyCodeClass?: ClassList;
    language?: "tsx" | "html" | "css";
    splitCommentStart?: string;
    splitCommentEnd?: string;
};

export default component$(
    ({
        code,
        copyCodeClass,
        language = "tsx",
        splitCommentStart = "{/* start */}",
        splitCommentEnd = "{/* end */}",
        ...props
    }: CodePreviewProps) => {
        const codeSig = useSignal("");

        const generateHighlighter = $(async () => {
            const highlighter = await highlighterPromise;
            let modifiedCode: string = code;

            let partsOfCode = modifiedCode.split(splitCommentStart);
            if (partsOfCode.length > 1) {
                modifiedCode = partsOfCode[1];
            }

            partsOfCode = modifiedCode.split(splitCommentEnd);
            if (partsOfCode.length > 1) {
                modifiedCode = partsOfCode[0];
            }

            const str = highlighter.codeToHtml(modifiedCode, {
                lang: language,
                themes: {
                    light: "vitesse-dark",
                    dark: "vitesse-dark",
                },
            });
            codeSig.value = str.toString();
        });

        useTask$(({ track }) => {
            track(() => code);
            if (isServer) return;
            generateHighlighter();
        });

        useOnWindow("load", generateHighlighter);

        return (
            <div class="code-example relative max-h-[31.25rem]">
                <CodeCopy
                    class={[
                        "absolute right-3 top-3 text-white hover:bg-background hover:text-white",
                        copyCodeClass,
                    ]}
                    code={code}
                />
                <div
                    {...props}
                    class={cn(
                        "tab-size max-h-[31.25rem] max-w-full overflow-auto rounded-sm bg-background p-6 text-sm",
                        props.class,
                    )}
                >
                    <div dangerouslySetInnerHTML={codeSig.value} />
                </div>
            </div>
        );
    },
);
