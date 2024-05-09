import React, { useState } from "react";
import * as M from '../../styles/TermStyle';

const Term = ({title, explanation, refer}) => {
    const [selectedHeart, setSelectedHeart] = useState(false);

    const handleHeartClick = () => {
        setSelectedHeart(!selectedHeart);
      };

    return(
        <div>
            <M.Container>
                <M.InfoContainer>
                    <M.TermTxt>{title}</M.TermTxt>
                    <M.HeartContainer selected={selectedHeart} onClick={handleHeartClick}>
                        <M.HeartImg />
                    </M.HeartContainer>
                </M.InfoContainer>
                <M.TermExplanation>{explanation}</M.TermExplanation>
                <M.ReferContainer>

                <M.ReferTxt>{refer}</M.ReferTxt>
                </M.ReferContainer>
            </M.Container>
        </div>
    );
}

export default Term;