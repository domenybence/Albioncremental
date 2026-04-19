type props = {
    "silverCount": number,
    "soldFishCount": number,
    "caughtFishCount": number;
}

const TopBox = ({silverCount, soldFishCount, caughtFishCount}: props) => {
  return (
    <div className="topBox">
        <p>You currently have <span className="topBoxSpan">{silverCount}</span> silver.</p>
        <p>You have sold <span className="topBoxSpan">{soldFishCount}</span> fish.</p>
    </div>
  )
}

export default TopBox;