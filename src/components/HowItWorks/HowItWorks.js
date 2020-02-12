import React, {Component} from "react";
import postCase from "../../assets/media/post-case.png";
import searchCase from "../../assets/media/search-case.png";
import Steps from "../chunks/Steps/Steps";
import "./HowItWorks.scss";


class HowItWorks extends Component {

    render() {

        const data1 = [
            {
                id: 1,
                step: "Step 1",
                title: "Post your case:",
                desc: "Refer your cases fast and simple through Legal Mates. Simply, post a summary of your case and include any relevant case details and your desired referral fee. Then, simply wait for others to bid. "
            },
            {
                id: 2,
                step: "Step 2",
                title: "Attorney Bids:",
                desc: "Interested lawyers will submit bids, which may include adjusting their desired referral fee."
            },
            {
                id: 3,
                step: "Step 3",
                title: "Select Attorney:",
                desc: "Review your bids and reject any of those that don’t interest you. For the bids that do interest you, either accept outright, or direct message the bidder to discuss in greater detail."
            }
        ];

        const data2 = [
            {
                id: 1,
                step: "Step 1",
                title: "Search for a case:",
                desc: "Select your area of your practice, the type of case you are looking for and the city in which you practice in."
            },
            {
                id: 2,
                step: "Step 2",
                title: "Bid on case:",
                desc: "Once you find a case that interests you, simply select the referral fee that you are willing to offer to submit your bid."
            },
            {
                id: 3,
                step: "Step 3",
                title: "Get Case Referral:",
                desc: "If the referring attorney is interested in your offer, they will reach out through a direct message where you can discuss the case in more detail."
            }
        ];

        return (
            <div className="how-it-works">
                <div className="how-post">
                    <h2>
                        I want to <span>refer a case</span>
                    </h2>
                    <img src={postCase} alt="I want to refer a case"/>
                    <Steps data={data1} />
                </div>
                <div className="how-search">
                    <h2>
                        I want to <span>get a referral</span>
                    </h2>
                    <img src={searchCase} alt="I want to get a referral"/>
                    <Steps data={data2}/>
                </div>
            </div>
        );
    }
}

export default HowItWorks;
