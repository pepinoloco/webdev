import './TextViewerWithButton.css';

const TextViewerWithButton = ({buttonText, buttonOnClick, viewerText, viewerOnScroll}) => {
  return (
    <div>
      <button onClick={buttonOnClick}>{buttonText}</button>
      <div className="text-viewer" onScroll={viewerOnScroll}>{viewerText}</div>
    </div>
  );
};

export default TextViewerWithButton;
