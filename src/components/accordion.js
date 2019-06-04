import React from "react"

const list = [
    {
        name: "HTML",
        libs: ["HTML5", "Pug.js/Jade"]
    },
    {
        name: "CSS",
        libs: ["Bootstrap" , "Bulma.css", "W3.css", "Sass", "Less", "BEM", "Design Responsivo"]
    },
    {
        name: "Javascript",
        libs: ["React", "Jquery"]
    },
];

const Child = () => (
    <ul>
        {list.map( item => (
            <li>{item.libs}</li>
        ))}
    </ul>
)

class Accordion extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isHidden: false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }

    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div>
                {list.map(item => (
                    <>
                        <div className="accordion">
                            <div onClick={this.toggleHidden} className="accordion__title">
                                <h2>{item.name}</h2>
                            </div>
                            {this.state.isHidden && <Child/>}
                        </div>
                    </>
                ))}
            </div>
        )
    }
}

export default Accordion;