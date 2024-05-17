


// compoenets
import Header from "../components/header";

// media
import effect_3 from './../medias/imgs/effect_3.png'

import search_icon_l from './../medias/icons/search_l.png'
import send_l from './../medias/icons/send_l.png'




const WalletAna = () => {
    return ( 
        <div className="wallet-analyzer-main">
            <Header 
                headTitle={'Wallet Analyzer'}
                headSubTitle={'Wallet Analyzer/Overview'}
            />

            <div className="wallet-analyzer-body flex align-center justify-center">
                <div className="effect-wrap">
                    <div className="effect effect-3">
                        <img src={effect_3} alt="" />
                    </div>
                </div>

                <div className="wa-input-cont">
                    <h2 className="syne_f bold_w text-align-center">Wallet Analyzer</h2>
                    <h3 className="cairo_f light_w text-align-center">Track any Wallet Trades Inastantly</h3>
                    <div className="wa-input-box flex align-center">
                        <div className="wa-input-inner flex row justify-space-between align-center">
                            <div className="gap-15 flex row align-center">
                                <img src={search_icon_l} alt="" />
                                <input type="text" placeholder="Enter Wallet Address" className="inter_f regular_w" />
                            </div>
                            <img src={send_l} className="wa-send" alt="" />
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <a className="btn-1 cursor-pointer syne_f bold_w">Check</a>
                    </div> */}
                </div>

            </div>

        </div>
    );
}
 
export default WalletAna;