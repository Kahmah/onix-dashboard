import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from './redux/store';

// styles
import './styles/screen-division.css'
import './styles/main.css'
import './styles/grid-system.css'
import './styles/flex-system.css'
import './styles/spacing.css'
import './styles/text.css'
import './styles/sidebar.css'
import './styles/home-header.css'
import './styles/modals.css'
import './styles/effects.css'

// components
import Sidebar from './components/sidebar';

// pages
import Dashbaord from './pages/dashboard';
import AIAudit from './pages/ai-audit';
import Staking from './pages/staking';
import RugCheck from './pages/rug-check';
import WalletAna from './pages/wallet-analyzer';
import LiqLock from './pages/liq-lock';
import AITgBot from './pages/ai-tg-bot';


function App() {
  return (
    <Provider store={Store}>
      <div className="app">

        <BrowserRouter>

          <div className="general-app-div">
            
            <div className="sidebar-div">
              <Sidebar />
            </div>

            <div className="pages-div">
              <Routes>

                <Route 
                  path='/'
                  element={<Dashbaord />}
                />
                <Route 
                  path='ai-audit'
                  element={<AIAudit />}
                />
                <Route 
                  path='staking'
                  element={<Staking />}
                />
                <Route 
                  path='rug-checker'
                  element={<RugCheck />}
                />
                <Route 
                  path='wallet-analyzer'
                  element={<WalletAna />}
                />
                <Route 
                  path='liquidity-locker'
                  element={<LiqLock />}
                />
                <Route 
                  path='ai-tg-bot'
                  element={<AITgBot />}
                />

              </Routes>
            </div>

            {/* <div className="rightbar-div"> */}
              {/* <Sidebar /> */}
            {/* </div> */}

          </div>

        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
