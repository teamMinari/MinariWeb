import SideBar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import * as M from "../../styles/HomeStyle/HomeStyle";
import WordComponents from "./wordComponents";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const goto = () => {
        navigate("/gogogo");
    };
    return (
    <>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <SideBar />
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
                <M.house onClick={goto}>
                    <M.houseImg/>
                </M.house>
                <M.HorizontalLine/>
                <M.chartImg/>
                <M.HorizontalLine/>
                <M.coinImg/>
                <M.HorizontalLine/>
                <M.earthImg/>
                <M.HorizontalLine/>
                <M.walletImg/>
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