import { useState } from "react";

type props = {
    "silverCount": number,
    "setSilverCount": React.Dispatch<React.SetStateAction<number>>,
    "soldFishCount": number,
    "setSoldFishCount": React.Dispatch<React.SetStateAction<number>>;
}

const FishBox = ({silverCount, setSilverCount, soldFishCount, setSoldFishCount}: props) => {
    const [fishCount, setFishCount] = useState<number>(0);

    return (
        <div className="fishBox">
            <span>Click here to catch a fish. </span>
            <button onClick={() => setFishCount(prev => prev + 1)}>Catch fish</button>
            <p>You have <span className="fishCountSpan">{fishCount}</span> fish.</p>

            <span>Sell 1 fish. </span>
            <button onClick={() => {
                if(fishCount > 0) {
                    setFishCount(prev => prev - 1);
                    setSilverCount(prev => prev + 20);
                    setSoldFishCount(prev => prev + 1);
                }
            }}>Sell</button>
        </div>
    );
}

export default FishBox;