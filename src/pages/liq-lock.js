import { useState } from "react";


// componenets
import Header from "../components/header";

// media
import logo_single from './../medias/imgs/onix_logo_single.png'
import effect_3 from './../medias/imgs/effect_3.png'
import lock_chart from './../medias/imgs/lock_chart.png'

import lock_plus from './../medias/icons/lock_plus.png'
import search_thin_d from './../medias/icons/search_thin_d.png'
import chain_ang_down from './../medias/icons/chain_ang_down.png'
import ll_view_angle from './../medias/icons/ll_view_ang.png'
import { liq_lock_lists } from "../utilities/ll-list";







const LiqLock = () => {

    const [chainSSActive, setchainssactive] = useState(null)
    const [cc_op, setccOP] = useState('')

    const chains_op = [
        { label: "ERC 20", value: 'erc' },
        { label: "SOLANA", value: 'sol' },
        { label: "BEP 20", value: 'bep' },
        { label: "BASE", value: 'base' },
    ]

    const handleChainSSActive = () => {
        if(!chainSSActive) {
            setchainssactive(true)
        } else {
            setchainssactive(null)
        }
    }

    const handleCCUpdate = (current) => {
        setccOP(current)
        setchainssactive(null)
    }

    const getCCLabel = () => {
        if(!cc_op) {
            return null
        }

        const filter = chains_op.filter(e => e.value === cc_op)
        return filter[0].label
    }


    return ( 
        <div className="liq-lock-main">
            <Header 
                headTitle={'OnixeLock'}
                headSubTitle={'Liquidity Locker/Overview'}
            />

            <div className="liq-lock-body">

                <div className="lock-chart-cont">
                    <div className="lock-chart-box">
                        <div className="flex row justify-space-between lock-chart-head">
                            <h2 className="readex_f semi-bold_w">Total Locked Value <span className="regular_w">(USD)</span></h2>
                            <a className="btn-1 syne_f bold_w cursor-pointer flex row gap-5 align-center"><img src={lock_plus} alt="" /> NEW LOCK</a>
                        </div>

                        <img src={lock_chart} className="lock-chart-img" alt="" />
                    </div>

                    <div className="lock-list-cont">
                        <h2 className="bold_w syne_f">ONIXELOCK</h2>
                        <div className="flex row gap-15 lock-nav-row">
                            <p className="cairo_f light_w active">All</p>
                            <p className="cairo_f light_w">Lock</p>
                        </div>

                        <div className="flex row align-center gap-10 mgb-25">
                            <div className="ll-input-box flex row gap-10 align-center">
                                <img src={search_thin_d} alt="" />
                                <input type="text" placeholder="Search by Lp Token address or Token address" className="cairo_f light_w" />
                            </div>

                            <div className="flex column gap-10 chain-ss-cont">
                                <div className="flex justify-space-between row align-center cursor-pointer chain-dd-box" onClick={handleChainSSActive}>
                                    <p className="cairo_f semi-bold_w">{cc_op ?  getCCLabel() : "Chain"}</p>
                                    <img src={chain_ang_down} className={`${chainSSActive ? 'active' : ''}`} alt="" />
                                </div>
                                <div className={`chain-ss-box ${chainSSActive ? 'active' : ''}`}>
                                    {chains_op.map((item, index) => (
                                        <p className={`cursor-pointer cairo_f semi-bold_w ${cc_op === item.value ? 'active' : ''}`} onClick={() => handleCCUpdate(item.value)} key={index}>
                                            {item.label}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="liq-list-box">
                            <div className="flex row mgb-15">
                                <div className="liq-token">
                                    <p className="readex_f medium_w">Liquidity Token</p>
                                </div>
                                <div className="liq-amount">
                                    <p className="readex_f medium_w">Amount</p>
                                </div>
                                <div className="value-usd">
                                    <p className="readex_f medium_w">Value (USD)</p>
                                </div>
                                <div className="unlock-date">
                                    <p className="readex_f medium_w">Unlock Date</p>
                                </div>
                            </div>

                            <div className="flex row align-center liq-list-item">
                                <div className="liq-token flex row align-center gap-20">
                                    <img src={logo_single} alt="" />
                                    <h2 className="readex_f regular_w">ONX/WETH</h2>
                                </div>
                                <div className="liq-amount">
                                    <h2 className="readex_f regular_w">N/A</h2>
                                </div>
                                <div className="value-usd">
                                    <h2 className="readex_f regular_w">N/A</h2>
                                </div>
                                <div className="unlock-date">
                                    <div className="flex justify-space-between align-center">
                                        <h2 className="readex_f regular_w">09/30/2022</h2>
                                        <div className="flex row gap-10 align-center cursor-pointer">
                                            <h3 className="cairo_f semi-bold_w">View</h3>
                                            <img src={ll_view_angle} className="ll-view-angle" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {liq_lock_lists.map((item, index) => (
                                <div className="flex row align-center liq-list-item" key={index}>
                                    <div className="liq-token flex row align-center gap-20">
                                        <img src={item.logo} alt="" />
                                        <h2 className="readex_f regular_w">{item.tokenname}</h2>
                                    </div>
                                    <div className="liq-amount">
                                        <h2 className="readex_f regular_w">{item.amount}</h2>
                                    </div>
                                    <div className="value-usd">
                                        <h2 className="readex_f regular_w">{item.value}</h2>
                                    </div>
                                    <div className="unlock-date">
                                        <div className="flex justify-space-between align-center">
                                            <h2 className="readex_f regular_w">{item.unlock_date}</h2>
                                            <div className="flex row gap-10 align-center cursor-pointer">
                                                <h3 className="cairo_f semi-bold_w">View</h3>
                                                <img src={ll_view_angle} className="ll-view-angle" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default LiqLock;