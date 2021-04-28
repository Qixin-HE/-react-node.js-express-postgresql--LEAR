import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';

import { Link } from 'react-router-dom';



const ArticlesListPage = () => {
    // const [merchants, setMerchants] = useState(false);
    
    // useEffect(() => {
    //     getMerchant();
    // }, []);
    // function getMerchant() {
    //     fetch('http://localhost:8080')
    //         .then(response => {
    //             return response.text();
    //         })
    //         .then(data => {
    //             setMerchants(data);
    //         });
    // }
    return (
        <>
            <h1>The Laws related to litter action in Victoria
</h1>
            <br />
            <h5>
                Litter in Victoria has been an issue as far back as 1987 when the Litter Act was passed into law by Victorian Parliament. Main points from the Litter Act include the definition of litter, the 2 laws and their penalties. Below are extracts from the Litter Act highlighting these key points:
 </h5>
            <p>
                Definition of Litter According to the Litter Act 1987:<br />
"Litter" includes— (a) any solid or liquid domestic or commercial waste, refuse, debris or rubbish and, without limiting the generality of the above, includes any glass, metal, plastic, paper, fabric, wood, food, garden remnants and clippings, soil, sand, concrete or rocks; and (b) any other material, substance or thing deposited in a place if its size, shape, nature or volume makes the place where it is deposited disorderly or detrimentally affects the proper use of that place; and (c) any unsolicited handbills or other advertising material— but does not include any gases, dust or smoke or any waste matter which is produced or emitted during or as a result of any of the normal operations of the mining, building or manufacturing industry or of any primary industry.
<br />
                <br />
Law 1 of the Litter Act 1987:<br />
Deposit of litter generally. 5. (1) A person who deposits any litter in or on any land or into any waters or into, onto, inside or from any vehicle is guilty of an offence.
(2) A person is not guilty of an offence under sub-section (1) if the person deposits the litter in or on any land or into any waters or into, onto, inside or from any vehicle with the express consent of the person who or body which has the control or management of the land, waters or vehicle.
<br />
                <br />
Law 2 of the Litter Act 1987:<br />
6. A person convicted of an offence under section 5 is guilty of the offence of aggravated littering if the court which convicts the person is satisfied that the offence involved— (a) the intentional deposit of litter being glass, metal, earthenware or crockery; or (b) the intentional deposit of litter that was a danger to any persons or animals or to any land, waters or vehicle; or (c) the intentional deposit of litter in, on, from or towards any vehicle
<br />
                <br />
Penalties for Law 1 of the Litter Act 1987:<br />
	Penalty: 20 penalty units.<br />

Penalties for Law 2 of the Litter Act 1987:<br />
Penalty: In addition to or instead of any penalty under section 5, 20 penalty units or imprisonment for 1 month or both.<br />
                <br />
Link to legislation:
<Link to={{ pathname: "http://classic.austlii.edu.au/au/legis/vic/hist_act/la198799.pdf" }} target="_blank"> Click here
</Link>
                <br />
                <br />
Below is publicly available fine data that shows the number of fines issued under the Litter act of 1987 during 2020. This data shows that there are many individuals in Victoria caught littering as well as being charged for littering. This number does not capture the full problem however, as there are even more individuals littering who are not caught and charged. Below it is clear to see a trend of when more fines are issues. In the summer months 3,813 fines are issued compared to the winter months where only 2,248 fines are issued. As more people venture out, more litter is deposited, and thus more fines are issued. Conversely, as the temperatures drop and people decided to stay at home, less litter is deposited and thus less fines are issued. There is also the added issue of COVID which has affected the data due to restrictions placed on individuals leaving their homes. It is still worrying to see that during lockdown months a total of 4,221 fines were issues. This means that, despite restrictions being in place, individuals were still caught littering more than 4,000 times. The fact that over 4,000 incidents of littering were caught during lockdown also suggests that there were far more incidents that were not caught, supporting our call to arms and the need for change.

        </p>
            <br />
            <br />
            <h1>Penalties cases in 2020</h1>
            <div style={{ height: "100vh" }}>
                <ArticlesList />
            </div>
        </>
    );

}

export default ArticlesListPage;