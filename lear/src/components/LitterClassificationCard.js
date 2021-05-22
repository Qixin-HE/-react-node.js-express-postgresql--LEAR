import React from 'react';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Popover, OverlayTrigger } from 'react-bootstrap';

// This component are used to format the cards on "Litter classification" page.

const LitterClassificationCard = ({ info }) => {

    //This is the popover that appears on each card when the "?" icon is clicked.
    const popoverCard = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">How to dispose</Popover.Title>
            <Popover.Content>
            <p style={{textAlign: "center"}}>{info['How to dispose']}</p>
            
      </Popover.Content>
        </Popover>
    );

    return (
    <div className="CardWrapper">
        <div className="ColImg">
            <img className="Img" src={info.Images} alt={info['Super category']} />
        </div>
        <div className="ColDetail">
            <div className="Header">
                <div className="BookTitle">{info.Category}</div>
            </div>
            <div className="Description"><strong>Super category:</strong> {info['Super category']}</div>
            {/* <Link to={`//www.google.com/search?q=how%20to%20dispose%20${info.Category}`} target="_blank">
                Learn more
        </Link> */}
        <div className="Description"><strong>Decomposition time:</strong> {info.Decomposition}</div>
        <div className="Description">
        <p style={{ textAlign: "left" }}><strong>How to dispose:</strong>   <span> &nbsp;</span>
                           
                           <OverlayTrigger trigger="click" placement="bottom" overlay={popoverCard}>
                               <BsFillQuestionCircleFill />
                           </OverlayTrigger>
                           
                       </p>
                       </div>
        </div>
    </div>
    );
}

export default LitterClassificationCard;


