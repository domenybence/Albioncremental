type props = {
    "silverCount": number,
    "setSilverCount": React.Dispatch<React.SetStateAction<number>>,
    "soldFishCount": number,
    "setSoldFishCount": React.Dispatch<React.SetStateAction<number>>;
}

const TopBox = ({silverCount, setSilverCount, soldFishCount, setSoldFishCount}: props) => {
  return (
    <div className="topBox">
        <p>You currently have <span className="topBoxSpan">{silverCount}</span> silver.</p>
        <p>You have sold <span className="topBoxSpan">{soldFishCount}</span> fish.</p>
    </div>
  )
}

export default TopBox;