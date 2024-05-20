import SideBar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import * as M from "../../styles/HomeStyle/HomeStyle";
import WordComponents from "./wordComponents";


const Home = () => {
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

            </M.menu>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </>
    );
}

export default Home;