import React, { useRef, useState } from 'react'
import "./header.css"

const Header = ({faq}) => {
    const [active,setActive] = useState("")
    const [height,setHeight] = useState("0px")
    const content = useRef(null)
    const handleToggle = () => {
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        // setHeight(active === "active" ? "0px" : "200px")
        console.log(content.current.scrollHeight)
    }
    return (
        <div className='header'>
            <div className='title' onClick={handleToggle}>
                <h3>{faq.question}</h3>
                {active == "active" ? <i class="fa fa-arrow-down" aria-hidden="true"></i> : <i class="fa fa-arrow-right" aria-hidden="true"></i>}
            </div>
            <div ref={content} style={{maxHeight:`${height}`}} className={`content ${active}`} >
                <div className='content-text'>{faq.answer}</div>
            </div>
        </div>
    )
}

export default Header