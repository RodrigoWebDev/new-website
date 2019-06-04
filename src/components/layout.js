import React from "react"
import Header from "./header"
import Footer from "./footer"

export default({children}) => (
    <div>
        <Header/>
        <main className="main container">
            {children}
        </main>
        <Footer/>
    </div>
)