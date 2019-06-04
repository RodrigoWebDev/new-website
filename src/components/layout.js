import React from "react"
import Header from "./header"
import Footer from "./footer"
import whatsapp from "../img/whatsapp-white.svg"

export default({children}) => (
    <div>
        <Header/>
        <main className="main container">
            {children}
            <a class="button success button-whatsapp"><span>Contato</span><img width="15" src={whatsapp}/> </a>
        </main>
        <Footer/>
    </div>
)