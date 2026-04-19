import { useState } from "react";

type props = {
    "fishCount": number,
    "setFishCount": (x: number) => void,
    "silverCount": number,
    "setSilverCount": (x: number) => void,
    "soldFishCount": number,
    "setSoldFishCount": (x: number) => void,
    "caughtFishCount": number,
    "setCaughtFishCount": (x: number) => void,
    "fishingLuck": number;
}

const FishBox = ({fishCount, setFishCount, silverCount, setSilverCount, soldFishCount, setSoldFishCount, caughtFishCount, setCaughtFishCount, fishingLuck} : props) => {
    

    return (
        <div className="fishBox">
            <span>Click here to catch a fish. </span>
            <button onClick={() => {
                setFishCount(fishCount + Math.floor(fishingLuck) + (Math.random() < fishingLuck % 1 ? 1 : 0));
                setCaughtFishCount(caughtFishCount + 1);
            }}>Catch fish</button>
            <p>You have <span className="fishCountSpan">{fishCount}</span> fish.</p>

            <span>Sell 1 fish. </span>
            <button onClick={() => {
                if(fishCount > 0) {
                    setFishCount(fishCount - 1);
                    setSilverCount(silverCount + 20);
                    setSoldFishCount(soldFishCount + 1);
                }
            }}>Sell</button>
            <br/>
            <span>Sell all fish. </span>
            <button onClick={() => {
                if(fishCount > 0) {
                    setFishCount(0);
                    setSilverCount(silverCount + (fishCount * 20));
                    setSoldFishCount(soldFishCount + fishCount);
                }
            }}>Sell</button>
        </div>
    );
}

export default FishBox;