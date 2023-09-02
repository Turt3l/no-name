import React, { useState } from 'react';
import "./Accordion.css"
// Accordion dropdown function

function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <div className="accordion">
          <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
            {props.title}
          </div>
          {isOpen && <div className="accordion-content">{props.content}</div>}
        </div>
      );
}

export default Accordion;
