import ConvexClientProvider from "../ConvexProvider";
import { ReactNode } from "react";

export default function RootLayout({children} : {children : ReactNode}) {

    return (
        <ConvexClientProvider>
            {children}
        </ConvexClientProvider>
    )
}