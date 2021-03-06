import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';
import graph from '../images/fineGraph.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';
import navigateToElement from '../components/ArticleNaviation';
import lawPic01 from '../images/lawPic01.jpg';
import lawPic02 from '../images/lawPic02.jpg';
import lawPic03 from '../images/lawPic03.jpg';


/** This is the "Laws, Penalties and News" page. */
const LawPage = () => {
    //This is used for handle the user scroll action but is not used later.
    //const [scroll, setScroll] = useState(false);
    // const [style, setStyle] = useState({ 
    //     backgroundColor: "rgba(245, 245, 245, 0.8)", 
    //     position: "fixed",
    //     width: "20%",
    //     borderRadius: "0.7rem",
    //     paddingTop: "10px",
    //     marginTop: "-80px",
    //     height: "98.7%"})


    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 50);
    //     });
    // }, []);
    // useEffect(() => {
    //     if (scroll){
    //         setStyle({ 
    //             backgroundColor: "rgba(245, 245, 245, 0.8)", 
    //             position: "fixed",
    //             width: "20%",
    //             borderRadius: "0.7rem",
    //             paddingTop: "10px",
    //             marginTop: "-80px",
    //             })
    //     }else{
    //         setStyle({backgroundColor: "rgba(245, 245, 245, 0.8)", 
    //         position: "fixed",
    //         width: "20%",
    //         borderRadius: "0.7rem",
    //         paddingTop: "10px",
    //         marginTop: "8px",
    //         height: "89%"})
    //     }
    
    // }, [scroll]);

    //for the onClick scroll to a position
    //const data = useRef(null);
    // const navigateToElement = (name) => {
    //     const element = document.getElementById(name)
    //     element.scrollIntoView();
    // }
    //This state saved the news fetches from the backend.
    const [news, setNews] = useState([]);
    //This useEffect will fetch the news from api in backend.
    useEffect(() => {
        // fetch('https://newsapi.org/v2/everything?q=((litter)AND(melbourne))OR((volunteer)AND(clean)AND(melbourne))OR((polution)AND(melbourne))OR((litter)AND(victoria))&from=2021-04-25&sortBy=popularity&apiKey=6908e643d9a442798796f3906c8b1c1a')
        fetch('/api/news')
  .then(response => response.json())
  .then(data => {
    setNews(data.articles)});
    //console.log(news);
    }, []);
    //This is each row of the FixedSizeList which used to show news.
    const ARow = ({ index, style, data }) => (
        <div className="Row" style={style}> 
          <div style={{paddingLeft: "20px", paddingRight: "25px", paddingTop :"20px"}}>
          {/* <Container> */}
          <Link to={{ pathname: data[index].url }} target="_blank">
              {/* <Row> */}
            <h4 class="text-dark font-weight-light" style={{ textAlign: "justify", textDecoration: "underline"}}>{data[index].title}</h4>
            {/* </Row>
            <Row> */}
            <img
                                        alt="law"
                                        src={data[index].urlToImage}
                                        style={{
                                            marginTop: "5px",
                                            //width: "80%",
                                            height: "300px",
                                            marginBottom: "15px",
                                            borderRadius:"10px"
                                            // marginLeft: "20px"
                                        }}

                                        
                                    />{' '}
                                    {/* </Row>
                                    <Row> */}
            <p class="text-dark font-weight-light">{data[index].description}</p>
            <p class="text-dark font-weight-light" style={{marginBottom: "0.3rem"}}><strong>Publish time: </strong>{data[index].publishedAt}</p>
            {/* </Row> */}
            </Link>
            {/* <p><strong>News url: </strong><Link to={{ pathname: data[index].url }} target="_blank">{data[index].url}</Link></p> */}
            {/* <p>News url: {data[index].url}</p> */}
            <br />
            
            {/* </Container> */}
            </div>
            
        </div>
      );
    

    return (
        <>
            <div style={{ marginTop: "-8px" }}>

                <Container>
                    <Row>
                        <Col sm={4} style={{ left: "10%", position: "fixed", marginLeft: "-10px" }}>
                        <div >
                                    
                                <List disablePadding dense style={{
                                    backgroundColor: "rgba(245, 245, 245, 0.8)", 
                                    position: "fixed",
                                    width: "20%",
                                    borderRadius: "0.7rem",
                                    paddingTop: "10px",
                                    marginTop: "48px"}}>
                
                <ListItem button onClick={() => navigateToElement("litterInVic")}>
                    <h5 class="text-dark font-weight-light" >
                    Introduction to Litter in Victoria</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("def")}>
                    <h5 class="text-dark font-weight-light" >
                    Definition of Litter</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("law1")}>
                    <h5 class="text-dark font-weight-light" >
                    
                    Law 1 of the Litter Act 1987</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("law2")}>
                    <h5 class="text-dark font-weight-light" >
                    Law 2 of the Litter Act 1987</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("penaltiesLaw")}>
                    <h5 class="text-dark font-weight-light" >
                    Penalty Units</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("link")}>
                    <h5 class="text-dark font-weight-light" >
                    Link to legislation</h5>                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("data")}>
                    <h5 class="text-dark font-weight-light" >
                        Fine data 2020</h5>
                    
                </ListItem>
                <ListItem button onClick={() => navigateToElement("news")}>
                    <h5 class="text-dark font-weight-light" >
                        News</h5>
                    
                </ListItem>
            </List>
                                </div>
                        </Col>
                        <Col sm={8} style={{ left: "30%" }}>
                            <Row>
                                <h1 class="text-dark font-weight-light" style={{ paddingTop: "40px", marginBlockEnd: "30px" }}>
                                    The Laws related to litter action in Victoria
                                </h1>
                            </Row>
                            
                            
                            <Row>
                                <div id="litterInVic" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                    <h5 style={{ textAlign: "left" }}>
                                    Introduction to Litter in Victoria
                                </h5>
                                    <p>
                                    Victoria is blessed with some of the best nature walks and public beaches, from the Grampians to St Kilda and Brighton beaches. But Litter threatens the eco-systems of these beautiful places. For this reason, in 1987 Victorian parliament introduced the Litter Act. This piece of legislation made it illegal to litter and set out 2 laws for the public to follow. The law also importantly defined what litter is. 
                                    </p>
                                </div>
                            </Row>
                            <br />
                            <br />
                            <Row>
                                <div id="def" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                    <h5 style={{ textAlign: "left" }}>
                                        Definition of Litter
                                </h5>
                                <Row>
                                <Col sm={8}><p>
                                    According to the Litter Act of 1987, Litter is defined as: <br /></p>
<p>(a) any solid or liquid domestic or commercial waste, refuse, debris or rubbish and, without limiting the generality of the above, includes any glass,metal, plastic, paper, fabric, wood, food, garden remnants and clippings, soil, sand, concrete or rocks;
    </p>  
    <p>(b) any other material, substance or thing deposited in a place if its size, shape, nature or volume makes the place where it is deposited disorderly or detrimentally affects the proper use of that place;  
</p>
<p>(c) any unsolicited handbills or other advertising material??? but does not include any gases, dust or smoke or any waste matter which is produced or emitted during or as a result of any of the normal operations of the mining, building or manufacturing industry or of any primary industry.</p>
                                <p>In basic terms, Litter is defined by the act as waste or rubbish left somewhere it should not be.</p>
                                </Col>
                                <Col sm={4}>
                                <img
                                        alt="law.jpg"
                                        src={lawPic01}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            MsTransform: "translate(-50%, -50%)",
                                            transform: "translate(-50%, -50%)",
                                            width: "90%"
                                        }}

                                        className="d-inline-block align-top"
                                    />{' '}
                                </Col>
                                
                                </Row>
                                    </div>
                            </Row>
                        
                                <br />
                                <br />
                                <Row>
                                    <div id="law1" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                        <h5 style={{ textAlign: "left" }}>
                                            Law 1 of the Litter Act 1987
                                </h5>
                                <Row>
                                <Col sm={8}>
                                    <p>The first law held within the Litter Act 1987 is as follows:</p>
                                
                                <p>
                                ??? Section 5.1 of the Litter Act says that a person who deposits any litter in or on any land or into any waters or into, onto, inside or from any vehicle is guilty of an offence.
                                    
                        </p>
                        <p>??? Section 5.2 of the Litter Act says that a person is not guilty of an offence under sub-section (1) if the person deposits the litter in or on any land or into any waters or into, onto, inside or from any vehicle with the express consent of the person who or body which has the control or management of the land, waters or vehicle.
</p>
<p>Once again, in basic terms, it is an offence to leave litter somewhere without the consent of the landowner. The penalty for committing this crime is up to 20 penalty units. Penalty units will be explained later</p>
                            </Col>
                                <Col sm={4}>
                                <img
                                        alt="logo"
                                        src={lawPic02}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            MsTransform: "translate(-50%, -50%)",
                                            transform: "translate(-50%, -50%)",
                                            width: "90%"
                                        }}

                                        className="d-inline-block align-top"
                                    />{' '}
                                </Col>
                                
                                </Row>
                                </div>
                                </Row>
                                <br />
                                <br />
                                <Row>
                                    <div id="law2" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                        <h5 style={{ textAlign: "left" }}>
                                            Law 2 of the Litter Act 1987
                                </h5>
                                <Row>
                                <Col sm={8}>
                                <p>The second law held within the Litter Act 1987 is as follows:</p>
                                        <p>
                                            Section 6 of the Litter Act says that A person convicted of an offence under section 5 is guilty of the offence of aggravated littering if the court which convicts the person is satisfied that the offence involved:
                                             
                                </p>
                                <div style={{ paddingLeft: "20px"}}>
                                <p>(a) the intentional deposit of litter being glass, metal, earthenware or crockery; </p>
                                <p>(b) the intentional deposit of litter that was a danger to any persons or animals or to any land, waters or vehicle;</p>
<p>(c) the intentional deposit of litter in, on, from or towards any vehicle
</p>
</div>
<p>In plain English, it is an offence to intentionally leave litter somewhere. The difference between the first and second law is the addition of intent. The penalty for intentionally littering is up to 20 penalty unit and/or imprisonment for up to 1 month.</p>
                                    </Col>
                                <Col sm={4}>
                                <img
                                        alt="law"
                                        src={lawPic03}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            MsTransform: "translate(-50%, -50%)",
                                            transform: "translate(-50%, -50%)",
                                            width: "90%"
                                        }}

                                        className="d-inline-block align-top"
                                    />{' '}
                                </Col>
                                
                                </Row>
                                </div>
                                    
                                </Row>
                                <br />
                                <br />
                                <Row>
                                    <div id="penaltiesLaw" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                        <h5 style={{ textAlign: "left" }}>
                                        Penalty Units
                                </h5>
                                        <p>
                                        Each law says that the penalty for committing a crime is ???penalty units???. Penalty units are the value that a person is fined when they commit a crime. Each year the penalty unit amount is set by the Victorian Department of Treasury and Finance. As of 1 July 202 a penalty unit is worth $165.22 however this amount is set to be reviewed on the 1st July 2021. 
                                </p>
                                <br/>
                                <p>
                                This means that, currently, the penalties for law 1 and 2 are as follows:
                                </p>
                                <p><strong>
                                ???  a fine of up to $3,304.40 for Law 1</strong>
                                </p>
                                <p><strong>
                                ???  a fine of up to $3,304.40 and/or imprisonment for up to 1 month for Law 2</strong>
                                </p>
                                    </div>
                                </Row>
                                <br />
                                

                                <br />
                                <Row>
                                    <div id="link" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                        <h5 style={{ textAlign: "left" }}>
                                            Link to legislation
                                </h5>
                                <p>
                                If you are interested in reading the full legislation, you can click on the link below. This will take you to the official Australia laws website, which houses all national and state legislation. You can read in full the Litter Act of 1987 Victoria here.
                                </p>
                                        <p>
                                            Click here:
<Link to={{ pathname: "http://classic.austlii.edu.au/au/legis/vic/hist_act/la198799.pdf" }} target="_blank"> Litter Act
</Link>
                                        </p>
                                    </div>
                                </Row>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Row>
                                    <div id="data" style={{
                                        backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                        borderRadius: "0.5rem", height: "80%"
                                    }}>
                                        <h5 style={{ textAlign: "left" }}>
                                        Trend analysis on 2020 fine data
                                    </h5>
                                        <p>
                                            Below is fine data that shows the number of fines issued in Victoria during 2020. This data shows that there are many individuals caught littering as well as being charged for littering.
                                        </p>
                                        <p>
                                            The graph below shows some trends:
                                        </p>
                                        <p>???  In the summer months 3,813 fines are issued compared to the winter months where only 2,248 fines are issued</p>
                                        <p>???  When COVID began, the number of fines decreased as less people were out and about (4,221 fines during lockdown months)</p>
                                        <img className="d-block"
                                            src={graph}
                                            alt="fine data 2020"
                                            style={{
                                                height: "50%",
                                                width: "100%"
                                            }} />
                                        <br />
                                        <p>Despite over 10,000 fines being issues, there remains a large amount of litter in the environment. This indicates that there are far more people littering and not getting charged. With more education and clean up effort, we hope that less people will litter and environmental volunteers can have a greater impact on our environment.
 </p>
                                    </div>
                                </Row>
                                <br /><br />
                                <Row>
                                <div id="news" style={{ backgroundColor: "rgba(245, 245, 245, 0.90)", padding: "10px", margin: "-10px",
                                                                        borderRadius: "0.5rem", height: "80%", width: "110%",marginTop: "50px"
                                                                    }}>
                                <h1 class="text-dark font-weight-light">Current news related to litter in Australia</h1>
                                <br />
                                <div style={{ paddingLeft: "7%",paddingRight: "5%"}}>
                                <p >???  The news below come from News api, which are fetched with the keywords such as "litter" and "australia".</p>
                                <p >???  The below window is <strong>scrollable</strong>, you can sroll and have a read on the news.  </p>
                                <p >???  A <strong>click</strong> on the news will lead you to the news website.</p>
                                </div>
                                <br/>
                                <div id="newsBlock">
                                {/* <p style={{textAlign:"center"}}>==============================================================</p> */}
                                
                                {news.length > 0 ?
                                        <FixedSizeList
                                        className="List"
                                        //className="no-scrollbars"
                                        style={{position: "relative",
                                        width: "100%",borderRadius: "10px"}} // adding styles
                                        itemData={news} // adding your own data
                                        height={700}
                                        itemCount={news.length} // now becomes length of the state array
                                        itemSize={530}
                                        >
                                            
                                        {ARow}
                                        </FixedSizeList> : null}
                                        {/* <p style={{textAlign:"center"}}>==============================================================</p> */}
                                        </div>
                                        </div>
                                </Row>
                            


                        </Col>
                    </Row>
                </Container>
                
            </div>
            <div>
            {/* {news.length > 0 ? 
      news.map((item) => (
        // const string = item.info.id.toString();
        // console.log(string);
        //console.log(`'${item.info.id}'`);
        //const id = item.info.id.toString();
        //const id = `${item.info.id}`;
        //console.log(item.id_str);
          <p>{item.author}</p>
        
      )): null} */}
      <div>
      
            </div>
            </div>
        </>
    );
    

}

export default LawPage;