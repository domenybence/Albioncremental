import { useEffect } from "react";

type props = {
    "fishCount": number,
    "setFishCount": (x: number) => void,
    "silverCount": number,
    "setSilverCount": (x: number) => void,
    "caughtFishCount": number,
    "fishingLuck": number,
    "setFishingLuck": (x: number) => void;
}


const FishUpgradeBox = ({fishCount, setFishCount, silverCount, setSilverCount, caughtFishCount, fishingLuck, setFishingLuck}: props) => {
    

    return (
        <div className="fishUpgradeBox">
            {
                caughtFishCount >= 5
                &&
                <>
                <h3>Upgrades:</h3>
                <span>500 silver - Gain extra fishing luck. (+1%) </span>
                <button onClick={() => {
                    if(silverCount >= 500) {
                        setFishingLuck(fishingLuck + 0.01);
                        setSilverCount(silverCount - 500);
                    }
                }}>Buy</button>
                {
                    caughtFishCount >= 250
                    &&
                    <>
                        <br/>
                        <span>5000 silver - Hire a fisherman.</span>
                        <button>Buy</button>
                    </>
                }
                </>
            }
        </div>
    );
}

export default FishUpgradeBox;