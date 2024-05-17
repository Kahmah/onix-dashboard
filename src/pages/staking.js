


// componenets
import Header from "../components/header";

// media
import logo_single from './../medias/imgs/onix_logo_single.png'
import effect_1 from './../medias/imgs/effect_1.png'



const Staking = () => {
    return ( 
        <div className="staking-main">
            <Header 
                headTitle={'Staking'}
                headSubTitle={'Staking/Overview'}
            />

            <div className="staking-body flex justify-center align-center">
                <div className="effect-wrap">
                    <div className="effect effect-1">
                        <img src={effect_1} alt="" />
                    </div>
                </div>

                <div className="stake-info-box">
                    <div className="flex row align-flex-start mgb-7">
                        <div className="flex-60">
                            <h3 className="syne_f bold_w">Earn daily & utilize your staking</h3>
                            <h4 className="cairo_f light_w">What is ONX</h4>
                            <h5 className="cairo_f semi-bold_w">Reference APR</h5>
                        </div>

                        <div className="sib-img flex-40 flex justify-flex-end">
                            <img src={logo_single} alt="" />
                        </div>
                    </div>

                    <div className="flex row justify-space-between align-flex-start" >
                        <h6 className="poppins_bold_f">958.5%</h6>
                        <div className="flex row gap-10">
                            <a className="btn-2 cursor-pointer syne_f bold_w">Redeem</a>
                            <a className="btn-1 cursor-pointer syne_f bold_w">Stake $ONX</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Staking;