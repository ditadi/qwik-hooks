import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikInsights } from "@builder.io/qwik-labs/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { type UserConfig, defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";

const { dependencies = {}, devDependencies = {} } = pkg as any as {
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
    [key: string]: unknown;
};
export default defineConfig(({ command, mode }): UserConfig => {
    return {
        plugins: [
            qwikInsights({
                publicApiKey: loadEnv("", ".", "").PUBLIC_QWIK_INSIGHTS_KEY,
            }),
            qwikCity(),
            qwikVite(),
            tsconfigPaths(),
        ],
        optimizeDeps: {
            exclude: [],
        },
        ssr:
            command === "build" && mode === "production"
                ? {
                      noExternal: Object.keys(devDependencies),
                      external: Object.keys(dependencies),
                  }
                : undefined,
        server: {
            headers: {
                "Cache-Control": "public, max-age=0",
            },
        },
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        },
    };
});
