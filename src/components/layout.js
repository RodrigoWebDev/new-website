import React from "react"
import Header from "./header"
import Footer from "./footer"
import whatsapp from "../img/whatsapp-white.svg"

export default({children}) => (
    <div>
        <Header/>
        <main className="main container">
            {children}
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=556192191727" target="_blank" class="button success button-whatsapp"><span>Contato</span><img width="15" src={whatsapp}/> </a>
        </main>
        <Footer/>
    </div>
)