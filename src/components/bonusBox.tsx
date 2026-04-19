type props = {
    "fishingLuck": number;
}

const BonusBox = ({fishingLuck}: props) => {
    return (
        <div className="bonusBox">
            <p>Your current fishing luck is <span className="bonusBoxSpan">{Math.floor(fishingLuck*100)}%</span>.</p>
        </div>
    );
}

export default BonusBox;