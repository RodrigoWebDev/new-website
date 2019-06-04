import React from "react"
import Header from "./header"
import Footer from "./footer"

export default({children}) => (
    <div className="container">
        <Header/>
        <main className="main">
            {children}
        </main>
        <Footer/>
    </div>
)