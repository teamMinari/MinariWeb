import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import * as M from "../../styles/QuizStyle";

const Quiz = () => {
    return (
        <div>
            <React.Fragment>
            <Header />
            <M.GlobalStyles />
            <M.PageContent>
                <Sidebar/>
                    <M.QuizContainer>

                    </M.QuizContainer>
            </M.PageContent>
        </React.Fragment>
        </div>
    );
};

export default Quiz;