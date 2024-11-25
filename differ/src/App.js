import { useState } from 'react';
import * as Diff from 'diff'

import Panel from './Panel';
import './App.css';

const App = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [diffText, setDiffText] = useState([]);

  const pasteLeftText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setLeftText(clipboardText)
  };
  const pasteRighText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setRightText(clipboardText)
  };
  const compareLeftToRightText = () => {
    if (leftText === rightText) {
      setDiffText("texts are indentical..")
      return
    }

    const diff = Diff.diffLines(leftText, rightText, { ignoreWhitespace: true });
    let lines = diff.map((part, index) => {
      const className = part.added ? 'text-viewer-line-added' : part.removed ? 'text-viewer-line-removed' : '';
      return (
        <div key={index} className={className}>
          {part.value}
        </div>
      );
    });
    setDiffText(lines);
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
        <Panel
          buttonText="Paste"
          buttonOnClick={pasteLeftText}
          viewerText={leftText}
          viewerOnScroll={syncHorizontalScroll}
        />
      </div>
      <div className="panel-container">
        <Panel
          buttonText="Paste"
          buttonOnClick={pasteRighText}
          viewerText={rightText}
          viewerOnScroll={syncHorizontalScroll}
        />
      </div>
      <div className="panel-container">
        <Panel
          buttonText="Compare"
          buttonOnClick={compareLeftToRightText}
          viewerText={diffText}
          viewerOnScroll={syncHorizontalScroll}
        />
      </div>
    </div>
  );
}

export default App;
