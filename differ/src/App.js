import {useState} from 'react';
import * as Diff from 'diff'
import TextViewerWithButton from './TextViewerWithButton';
import './App.css';

const App = () => {
  const [leftViewerText, setLeftViewerText] = useState('');
  const [rightViewerText, setRightViewerText] = useState('');
  const [diffViewerText, setDiffViewerText] = useState('');

  const pasteLeftText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setLeftViewerText(clipboardText)
  };
  const pasteRighText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setRightViewerText(clipboardText)
  };
  const compareLeftToRightText = () => {
    if (leftViewerText === rightViewerText) {
      setDiffViewerText("texts are indentical..")
      return
    }

    const diff = Diff.diffLines(leftViewerText, rightViewerText, { ignoreWhitespace: true });
    let lines = diff.map((part, index) => {
      const className = part.added ? 'text-viewer-line-added' : part.removed ? 'text-viewer-line-removed' : '';
      return (
        <div key={index} className={className}>
          {part.value}
        </div>
      );
    });
    setDiffViewerText(lines);
  };

  const syncHorizontalScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const viewers = document.querySelectorAll('.text-viewer');
    viewers.forEach(viewer => {
      if (viewer !== event.target) {
        viewer.scrollLeft = scrollLeft;
      }
    });
  };

  return (
    <div className="app-container">
      <div className="panel-container">
        <TextViewerWithButton
          buttonText="Paste"
          buttonOnClick={pasteLeftText}
          viewerText={leftViewerText}
          viewerOnScroll={syncHorizontalScroll}
        /> 
      </div>
      <div className="panel-container">
        <TextViewerWithButton
          buttonText="Paste"
          buttonOnClick={pasteRighText}
          viewerText={rightViewerText}
          viewerOnScroll={syncHorizontalScroll}
        /> 
      </div>
      <div className="panel-container">
        <TextViewerWithButton
          buttonText="Compare"
          buttonOnClick={compareLeftToRightText}
          viewerText={diffViewerText}
          viewerOnScroll={syncHorizontalScroll}
        /> 
      </div>
    </div>
  );
}

export default App;
