import localFont from "next/font/local";

export const dmSerif = localFont({
    src: [
        {
            path: "../assets/fonts/DMSerifDisplay-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/DMSerifDisplay-Italic.ttf",
            weight: "400",
            style: "italic",
        },
    ],
    variable: "--font-display",
});

export const gelasio = localFont({
    src: [
        {
            path: "../assets/fonts/Gelasio-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/Gelasio-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/Gelasio-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-serif",
});

export const k2d = localFont({
    src: [
        {
            path: "../assets/fonts/K2D-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/K2D-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/K2D-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sans",
});

export const kadwa = localFont({
    src: [
        {
            path: "../assets/fonts/Kadwa-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/Kadwa-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-heading",
});