import React, { useState } from 'react';
import SideBar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import * as M from "../../styles/HomeStyle/HomeStyle";
import WordComponents from "./wordComponents";
import { useNavigate } from "react-router-dom";
import IngChart from "../Home/PieChart";
import StackBars from "../Home/StackBarChart";
import SimpleNews from "./SimpleNews";

const Home = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("경제");
    const [input, setInput] = useState(query);

    const handleGoToHome = () => {
        navigate("/dictionary");
    };
    const handleGoToChart = () => {
        navigate("/dictionary");
    };
    const handleGoToCoin = () => {
        navigate("/dictionary");
    };
    const handleGoToEarth = () => {
        navigate("/dictionary");
    };
    const handleGoToWallet = () => {
        navigate("/dictionary");
    };

    const handleSearch = () => {
        setQuery(input);
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
              <M.PageText>오늘의 추천단어</M.PageText>
                <M.WordSpace>
                    <WordComponents txt="가산금리" score={1} />
                    <WordComponents txt="또 다른 단어" score={3} />
                    <WordComponents txt="가산금리" score={1} />
                    <WordComponents txt="또 다른 단어" score={3} />
                    <WordComponents txt="가산금리" score={2} />
                    <WordComponents txt="또 다른 단어" score={3} />
                </M.WordSpace>
            </M.RecommendWordContainer>
            <M.Menu>
                <M.House onClick={handleGoToHome}>
                    <M.StyledHouseImg/>
                </M.House>
                <M.HorizontalLine/>
                <M.Chart onClick={handleGoToChart}>
                    <M.StyledChartImg/>
                </M.Chart>
                <M.HorizontalLine/>
                <M.Coin onClick={handleGoToCoin}>
                    <M.StyledCoinImg/>
                </M.Coin>
                <M.HorizontalLine/>
                <M.Earth onClick={handleGoToEarth}>
                    <M.StyledEarthImg/>
                </M.Earth>
                <M.HorizontalLine/>
                <M.Wallet onClick={handleGoToWallet}>
                    <M.StyledWalletImg/>
                </M.Wallet>
            </M.Menu>
            <M.SimpleNewsContainer>
                <M.PageText>오늘의 경제 관련 기사</M.PageText>
                <M.SimpleNewsCenterWrapper>
                    <M.NewsContainer>
                        <SimpleNews query={query} />
                    </M.NewsContainer>
                    
{/*                     
                    검색 테스트용 인풋 창
                    <input 
                        type="text" 
                        placeholder="검색어를 입력하세요" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSearch}>검색</button> */}
                </M.SimpleNewsCenterWrapper>
            </M.SimpleNewsContainer>
            <M.BannerWarp>
                <M.Banner/>
            </M.BannerWarp>
            </M.CenteredContent>
            <M.ChartContent>
                <M.PieChartContainer>
                    <M.ChartPageText>학습률</M.ChartPageText>
                    <IngChart/>
                </M.PieChartContainer>
                <M.ChartContainer>
                    <M.ChartPageText>출석률</M.ChartPageText>
                    <M.ChartCenter>
                        <StackBars/>
                    </M.ChartCenter>
                </M.ChartContainer>
            </M.ChartContent>
        </M.MainContent>
      </M.PageContent>
    </>
    );
}

export default Home;
