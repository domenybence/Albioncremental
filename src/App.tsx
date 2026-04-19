import { useState } from "react";
import "./App.css";
import TopBox from "./components/topBox";
import FishBox from "./components/fishBox";
import FishUpgradeBox from "./components/fishUpgradeBox";
import BonusBox from "./components/bonusBox";

function App() {
    const [fishCount, setFishCount] = useState<number>(0);
    const [silverCount, setSilverCount] = useState<number>(0);
    const [caughtFishCount, setCaughtFishCount] = useState<number>(0);
    const [soldFishCount, setSoldFishCount] = useState<number>(0);
    const [fishingLuck, setFishingLuck] = useState<number>(1);

    return (
    <>
        <div className="topBar">
            <TopBox silverCount={silverCount} soldFishCount={soldFishCount} caughtFishCount={caughtFishCount}/>
            <BonusBox fishingLuck={fishingLuck}/>
        </div>
        <FishBox fishCount={fishCount} setFishCount={setFishCount} silverCount={silverCount} setSilverCount={setSilverCount} soldFishCount={soldFishCount} setSoldFishCount={setSoldFishCount} caughtFishCount={caughtFishCount} setCaughtFishCount={setCaughtFishCount} fishingLuck={fishingLuck}/>
        <FishUpgradeBox fishCount={fishCount} setFishCount={setFishCount} silverCount={silverCount} setSilverCount={setSilverCount} caughtFishCount={caughtFishCount} fishingLuck={fishingLuck} setFishingLuck={setFishingLuck}/>
    </>
    );
}

export default App;
