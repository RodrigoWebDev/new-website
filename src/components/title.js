import React from "react"
import titleCSS from "../styles/title.css"

export default({children}) => (
    <div className="container container-title">
        <h2 className="title">{children}</h2>
    </div>
)