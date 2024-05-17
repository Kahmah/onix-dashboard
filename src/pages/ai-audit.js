import { useState } from "react";

// componenents
import Header from "../components/header";

// media
import logo_single from './../medias/imgs/onix_logo_single.png'
import effect_2 from './../medias/imgs/effect_2.png'

import send_icon from './../medias/icons/send_icon.png'




const AIAudit = () => {

    const [value, setValue] = useState('')
    const [inputheight, setHeight] = useState(35)


    const handleChange = (event) => {
        setValue(event.target.value)
        setHeight(event.target.scrollHeight)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setHeight(event.target.scrollHeight)
        }
    }


    return ( 
        <div className="audit-main">
            <Header 
                headTitle={'Audit'}
                headSubTitle={'Audit/Overview'}
            />

            <div className="audit-body">
                <div className="effect-wrap">
                    <div className="effect effect-2">
                        <img src={effect_2} alt="" />
                    </div>
                </div>

                <div className="audit-center-logo flex justify-center">
                    <div className="">
                        <div className="audit-temp-sug">
                            <div className="flex justify-center">
                                <img src={logo_single} alt="" />
                            </div>
                            <h2 className="cairo_f regular_w">How can I help you today</h2>

                            <div className="ai-sug-cont">
                                <div className="ai-sug-item one">
                                    <p className="inter_f medium_w">“How can I check for overflow risks in my smart contract” →</p>
                                </div>
                                <div className="ai-sug-item two">
                                    <p className="inter_f medium_w">“What are the best practices for updating contract state variables?” →</p>
                                </div>
                                <div className="ai-sug-item one">
                                    <p className="inter_f medium_w">“Can you help verify the gas efficiency of my contract functions?” →</p>
                                </div>
                                <div className="ai-sug-item two">
                                    <p className="inter_f medium_w">“Does my contract comply with the latest ERC standards?” →</p>
                                </div>
                                <div className="ai-sug-item three">
                                    <p className="inter_f medium_w">“Is my contract susceptible to reentrancy attacks?” →</p>
                                </div>
                            </div>
                        </div>

                        <div className="audit-input-box flex row gap-10 align-center">
                            <textarea 
                                name="" placeholder="Enter audit request" 
                                className="cairo_f medium_w" 
                                style={{height: inputheight}}
                                value={value}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                            <img src={send_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AIAudit;