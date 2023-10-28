import React from "react";

const AccordionItem = ({ title, content, isActive, onClick}) => {
    return (
        <div className={`AccordionItem ${isActive ? "active" : ""}`} onClick={onClick}>
            <div className={`IconContainer ${isActive ? "active" : ""}`}>
                <div className={`stroke1 ${isActive ? "active" : ""}`}>

                </div>
                <div className="stroke2"></div>
            </div>
            <h1 className="AccordionTitle">{title}</h1>
            <p className={`AccordionContent ${isActive ? "active" : ""}`}>{content}</p>
        </div>
    )
}

export default AccordionItem