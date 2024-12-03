import { useState } from 'react';
import * as Diff from 'diff'

import Panel from './components/Panel';
import Grid from './components/Grid';
import Chart from './components/Chart';
import calculateStats from './utils/calculateStats';
import calculateLinesLength from './utils/calculateLinesLength';
import './App.css';

const App = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [diffText, setDiffText] = useState([]);
  const [gridData, setGridData] = useState(calculateStats('',''));
  const [chartData, setChartData] = useState(calculateLinesLength('',''));

  const pasteLeftText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setLeftText(clipboardText.replace(/\n$/, ''));
    setGridData(calculateStats(clipboardText, rightText));
    setChartData(calculateLinesLength(clipboardText, rightText));
  };

  const pasteRighText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setRightText(clipboardText.replace(/\n$/, ''));
    setGridData(calculateStats(leftText, clipboardText));
    setChartData(calculateLinesLength(leftText, clipboardText));
  };

  const compareLeftToRightText = () => {
    if (leftText === rightText) {
      setDiffText("texts are indentical..")
      return
    }

    let lines;
    if(leftText.includes('\n') || rightText.includes('\n')) {
      const diff = Diff.diffLines(leftText, rightText, { ignoreWhitespace: true });
      lines = diff.map((part, index) => {
        const className = part.added ? 'text-viewer-token-added' : part.removed ? 'text-viewer-token-removed' : '';
        return (
          <div key={index} className={className}>
          {part.value}
         </div>
        );
     });
    }
    else {
      const diff = Diff.diffChars(leftText, rightText);
      lines = diff.map((part, index) => {
        const className = part.added ? 'text-viewer-token-added' : part.removed ? 'text-viewer-token-removed' : '';
        return (
          <span key={index} className={className}>
          {part.value}
         </span>
        );
     });
    }
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
    <div>
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
      <div className="grid-container">
        <Grid data={gridData}/>
        <Chart data={chartData}/>
      </div>
    </div>
  );
}

export default App;
