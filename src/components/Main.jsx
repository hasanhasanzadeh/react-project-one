import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function Main(props){
    return(
        <>
            <Header />
                <main>
                    {props.children}
                </main>
            <Footer />
        </>
    )
}