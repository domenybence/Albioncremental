import React, { useState } from "react";
import "./App.css";
import TopBox from "./components/topBox";
import FishBox from "./components/fishBox";

function App() {
    const [silverCount, setSilverCount] = useState<number>(0);
    const [soldFishCount, setSoldFishCount] = useState<number>(0);

    return (
    <>
        <TopBox silverCount={silverCount} setSilverCount={setSilverCount} soldFishCount={soldFishCount} setSoldFishCount={setSoldFishCount}/>
        <FishBox silverCount={silverCount} setSilverCount={setSilverCount} soldFishCount={soldFishCount} setSoldFishCount={setSoldFishCount}/>
    </>
    );
}

export default App;
