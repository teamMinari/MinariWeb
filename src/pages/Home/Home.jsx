import SideBar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import * as M from "../../styles/HomeStyle/HomeStyle";
import WordComponents from "./wordComponents";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGoToHome = () => {
        navigate("/wordHome");
    };
    const handleGoToChart = () => {
        navigate("/wordChart");
    };
    const handleGoToCoin = () => {
        navigate("/wordCoin");
    };
    const handleGoToEarth = () => {
        navigate("/wordEarth");
    };
    const handleGoToWallet = () => {
        navigate("/wordWallet");
    };
    return (
    <>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <SideBar/>
        <M.MainContent>
          <M.CenteredContent>
            <M.RecommendWordContainer>
              <M.pageText>오늘의 추천단어</M.pageText>
                <M.wordSpace>
                    <WordComponents txt="가산금리" score={1} />
                    <WordComponents txt="또 다른 단어" score={3} />
                    <WordComponents txt="가산금리" score={1} />
                    <WordComponents txt="또 다른 단어" score={3} />
                    <WordComponents txt="가산금리" score={2} />
                    <WordComponents txt="또 다른 단어" score={3} />
                </M.wordSpace>
            </M.RecommendWordContainer>
            <M.menu>
                <M.house onClick={handleGoToHome}>
                    <M.houseImg/>
                </M.house>
                <M.HorizontalLine/>
                <M.chart onClick={handleGoToChart}>
                    <M.chartImg/>
                </M.chart>
                <M.HorizontalLine/>
                <M.coin onClick={handleGoToCoin}>
                    <M.coinImg/>
                </M.coin>
                <M.HorizontalLine/>
                <M.earth onClick={handleGoToEarth}>
                    <M.earthImg/>
                </M.earth>
                <M.HorizontalLine/>
                <M.wallet onClick={handleGoToWallet}>
                    <M.walletImg/>
                </M.wallet>
            </M.menu>
            <M.bannerWarp>
                <M.banner/>
            </M.bannerWarp>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </>
    );
}

export default Home;