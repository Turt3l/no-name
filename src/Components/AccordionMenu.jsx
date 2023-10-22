import React, { useState } from "react";
import AccordionItem from './AccordionItem';
import "./Accordion.css"

const AccordionMenu = () => {
    const [currentlyActive, setCurrentlyActive] = useState(1);

    const handleAccoridonClick = (newActiveAccordion) => {
        setCurrentlyActive(newActiveAccordion === currentlyActive ? null : newActiveAccordion);
    };

    return (
        <div className="AccordionMenu">
            <h1 className="title">Frequently asked questions(FaQ)</h1>
            <div className="accordion-items">
                <AccordionItem title="Section 1" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                isActive={currentlyActive === 1}
                onClick={() => handleAccoridonClick(1)}/>
                <AccordionItem title="Section 2" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                isActive={currentlyActive === 2}
                onClick={() => handleAccoridonClick(2)} />
                <AccordionItem title="Section 3" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                isActive={currentlyActive === 3}
                onClick={() => handleAccoridonClick(3)} />
            </div>
        </div>
    )
}

export default AccordionMenu