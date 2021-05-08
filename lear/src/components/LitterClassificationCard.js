import React from 'react';
// import { Card } from 'react-bootstrap';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Popover, OverlayTrigger } from 'react-bootstrap';


const LitterClassificationCard = ({ info }) => {
//image = image url = "Image"in json
//title="Super category"
//author=desciption=”Category“

    // <div style={{ height: "100vh" }} >
    //     <ListGroup>
    //         {classifications.map((classification, key) => (
    //             <ListGroupItem>
    //                 <div style={{
    //                     height: "10vh",
    //                     minHeight: "330px",
    //                     maxHeight: "500px"
    //                 }}>


    //                         <h4 className="article-list-item">{classification.date}</h4>


    //                     <p>Residential: {classification.residential}<br/>
    //                     Public litter bins: {classification.public_litter_bins}<br/>
    //                     Dumped rubbish: {classification.dumped_rubbish}<br/>
    //                     Street Sweepings: {classification.street_sweepings}<br/>
    //                     Mattresses: {classification.mattresses}<br/>
    //                     Commingled recycling: {classification.commingled_recycling}<br/>
    //                     Cardboard: {classification.cardboard}<br/>
    //                     Hardwaste to landfill: {classification.hardwaste_to_landfill}<br/>
    //                     Hardwaste recovered: {classification.hardwaste_recovered}<br/>
    //                     Hardwaste total: {classification.hardwaste_total}<br/>
    //                     Green waste: {classification.green_waste}<br/>
    //                     Month: {classification.month}<br/></p>
    //                 </div>
    //             </ListGroupItem>
    //         ))}
    //     </ListGroup>
    // </div>
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
        <h7 style={{ textAlign: "left" }}>How to dispose:   <span> &nbsp;</span>
                           
                           <OverlayTrigger trigger="click" placement="bottom" overlay={popoverCard}>
                               <BsFillQuestionCircleFill />
                           </OverlayTrigger>
                           
                       </h7>
                       </div>
        </div>
    </div>
    );
}

export default LitterClassificationCard;


