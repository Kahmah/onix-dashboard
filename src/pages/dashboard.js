

// componenets
import Header from '../components/header';

// utis
import { tokenLists } from '../utilities/coin-list';

// media
import logo_single from './../medias/imgs/onix_logo_single.png'
import effect_1 from './../medias/imgs/effect_1.png'
import chart_img_gr from './../medias/imgs/chart_img_gr.png'

import search_icon_l from './../medias/icons/search_l.png'
import tl_arrow_up from './../medias/icons/tl_arrow_up.png'
import tl_arrow_down from './../medias/icons/tl_arrow_down.png'




const Dashbaord = () => {
    return ( 
        <div className="dashboard-main">
            <Header 
                headTitle={'Dashboard'}
                headSubTitle={'Dashboard/Overview'}
            />

            <div className="dashboard-body">
                <div className="effect-wrap">
                    <div className="effect effect-1">
                        <img src={effect_1} alt="" />
                    </div>
                </div>

                <div className="search-cont flex justify-center mgb-50">
                    <div className="search-box flex row align-center gap-35">
                        <img src={search_icon_l} alt="" />
                        <input type="text inter_f regular_w" placeholder='Search by name, address, symbol' />
                    </div>
                </div>

                <div className="top-tk-cont">
                    <h2 className='syne_f bold_w mgb-25'>Top Ai Tokens</h2>

                    <div className="token-list-box">
                        <div className="flex row justify-space-between align-center mgb-30">
                            <h3 className='cairo_f bold_w'>Token List</h3>
                            <div className="tk-list-dot flex row gap-3 cursor-pointer">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="tl-th-row flex row mgb-15">
                            <div className="tl-name">
                                <p className='semi-bold_w cairo_f'>Name</p>
                            </div>
                            <div className="tl-price-usd">
                                <p className='semi-bold_w cairo_f'>Price USD</p>
                            </div>
                            <div className="tl-change">
                                <p className='semi-bold_w cairo_f'>24h Change</p>
                            </div>
                            <div className="tl-volume">
                                <p className='semi-bold_w cairo_f'>24h Volume(USD)</p>
                            </div>
                            <div className="tl-chart">

                            </div>
                        </div>

                        <div className="tl-td-row flex row align-center">
                            <div className="tl-name flex row gap-10">
                                <img src={logo_single} alt="" />
                                <div className="">
                                    <h3 className='cairo_f bold_w'>ONX</h3>
                                    <h4 className='cairo_f regular_w'>Onixe AI</h4>
                                </div>
                            </div>
                            <div className="tl-price-usd">
                                <p className="cairo_f semi-bold_w">N/A</p>
                            </div>
                            <div className="tl-change">
                                <div className="flex row align-center gap-10">
                                    <div className="tlc-icon-box flex justify-center align-center">
                                        <img src={tl_arrow_up} alt="" />
                                    </div>
                                    <h3 className="cairo_f bold_w">N/A</h3>
                                </div>
                            </div>
                            <div className="tl-volume">
                                <h3 className="cairo_f semi-bold_w">N/A</h3>
                            </div>
                            <div className="tl-chart">
                                <img src={chart_img_gr} alt="" />
                            </div>
                        </div>

                        {tokenLists.map((tokenList, index) => (
                            <div className="tl-td-row flex row align-center">
                                <div className="tl-name flex row gap-10">
                                    <img src={tokenList.logo} alt="" />
                                    <div className="">
                                        <h3 className='cairo_f bold_w'>{tokenList.ticker}</h3>
                                        <h4 className='cairo_f regular_w'>{tokenList.name}</h4>
                                    </div>
                                </div>
                                <div className="tl-price-usd">
                                    <p className="cairo_f semi-bold_w">{tokenList.price}$</p>
                                </div>
                                <div className="tl-change">
                                    <div className="flex row align-center gap-10">
                                        <div className={`tlc-icon-box flex justify-center align-center ${tokenList.status === false ? 'red' : ''}`}>
                                            <img src={tokenList.status === true ? tl_arrow_up : tl_arrow_down} alt="" />
                                        </div>
                                        <h3 className="cairo_f bold_w">{tokenList.change}%</h3>
                                    </div>
                                </div>
                                <div className="tl-volume">
                                    <h3 className="cairo_f semi-bold_w">{tokenList.volume}$</h3>
                                </div>
                                <div className="tl-chart">
                                    <img src={tokenList.chart_img} alt="" />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Dashbaord;