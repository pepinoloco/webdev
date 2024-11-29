import './Panel.css';

const Panel = ({buttonText, buttonOnClick, viewerText, viewerOnScroll}) => {
  return (
    <div>
      <button onClick={buttonOnClick}>{buttonText}</button>
      <div className="text-viewer" onScroll={viewerOnScroll}>{viewerText}</div>
    </div>
  );
};

export default Panel;
