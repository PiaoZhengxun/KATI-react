import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage'
import RankingPage from './Pages/RankingPage/RankingPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import JoinPage from './Pages/JoinPage/JoinPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SearchPage from './Pages/SearchPage/SearchPage';
function App() {



  // 로그인 토큰 가져오는 곳
  // 로그인 & 로그아웃 관련된 코드들..

  return (
    
    <div className="App">
      <Header/>
        <div style={{ paddingTop: '20px', minHeight: 'calc(100vh - 100px)' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/search" exact component={SearchPage}/>
            <Route path="/category" exact component={CategoryPage} />
            <Route path="/ranking" exact component={RankingPage}/>
            <Route path="/join" exact component={JoinPage} />
            <Route path="/login" exact component={LoginPage}/>
             {/* url잘못치면 메인으로 */}
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
        </div>
      <Footer/>
    </div>

  );
}

export default App;
