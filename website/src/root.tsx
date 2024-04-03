import { $, component$, useOnWindow } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
    useOnWindow(
        "load",
        $(() => {
            if (!isDev) {
                inject();
                injectSpeedInsights();
            }
        }),
    );

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <RouterHead />
            </head>
            <body lang="en" class="bg-background">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});
