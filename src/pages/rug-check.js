


// components
import Header from "../components/header";

// media
import effect_1 from './../medias/imgs/effect_1.png'

import search_icon_l from './../medias/icons/search_l.png'




const RugCheck = () => {
    return ( 
        <div className="rug-check-main">
            <Header 
                headTitle={'Rug Checker'}
                headSubTitle={'Rug Checker/Overview'}
            />

            <div className="rug-check-body flex justify-center align-center">
                <div className="effect-wrap">
                    <div className="effect effect-1">
                        <img src={effect_1} alt="" />
                    </div>
                </div>

                <div className="rug-input-cont">
                    <h2 className="syne_f bold_w text-align-center">Rug Checker</h2>
                    <div className="rug-input-box flex align-center">
                        <div className="flex row align-center gap-15">
                            <img src={search_icon_l} alt="" />
                            <input type="text" placeholder="Enter Token Address" className="inter_f regular_w" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <a className="btn-1 cursor-pointer syne_f bold_w">Check</a>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default RugCheck;