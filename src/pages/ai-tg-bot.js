

// components
import Header from "../components/header";

// media
import logo_single from './../medias/imgs/onix_logo_single.png'
import effect_3 from './../medias/imgs/effect_3.png'




const AITgBot = () => {
    return ( 
        <div className="ai-tg-bot-main">
            <Header 
                headTitle={'AI Telegram Bot'}
                headSubTitle={'AI Telegram Bot/Overview'}
            />

            <div className="ai-tg-bot-body flex justify-center align-center">
                <div className="effect-wrap">
                    <div className="effect effect-3">
                        <img src={effect_3} alt="" />
                    </div>
                </div>

                <div className="tg-bot-cont">
                    <div className="flex justify-center">
                        <img src={logo_single} alt="" />
                    </div>

                    <div className="tg-bot-box flex justify-center align-center">
                        <div className="">
                            <h2 className="syne_f extra-bold_w">Onixe Smartbot</h2>
                            <h3 className="inter_f medium_w">@OnixeAIbot</h3>
                            <div className="flex justify-center">
                                <a className="btn-1 cursor-pointer syne_f bold_w">Send Message</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default AITgBot;