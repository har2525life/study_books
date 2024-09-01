import { type ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
