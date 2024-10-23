import ConvexClientProvider from "../ConvexProvider";
import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode}) {

    return (
        <ConvexClientProvider>
            {children}
        </ConvexClientProvider>
    )
}