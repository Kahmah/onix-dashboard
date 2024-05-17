



const Header = ({ headTitle, headSubTitle }) => {
    return ( 
        <header>
            <div className="">
                <h2 className='syne_f bold_w'>{headTitle}</h2>
                <h3 className='cairo_f light_w'>{headSubTitle}</h3>
            </div>

            <div className="cw-btn flex justify-center align-center">
                <p className='syne_f bold_w'>Connect Wallet</p>
            </div>
        </header>
    );
}
 
export default Header;