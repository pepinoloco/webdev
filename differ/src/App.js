import { useState } from 'react';
import * as Diff from 'diff'

import Panel from './components/Panel';
import Grid from './components/Grid';
import Chart from './components/Chart';
import getGridData from './utils/getGridData';
import clearChartData from './utils/clearChartData';
import calculateLinesLength from './utils/calculateLinesLength';
import './App.css';

const App = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [diffText, setDiffText] = useState([]);
  const [gridData, setGridData] = useState(getGridData('',''));
  const [chartData, setChartData] = useState(clearChartData);

  const pasteLeftText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setLeftText(clipboardText.replace(/\n$/, ''));
    setGridData(getGridData(clipboardText, rightText));
  };

  const pasteRighText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setRightText(clipboardText.replace(/\n$/, ''));
    setGridData(getGridData(leftText, clipboardText));
  };

  const compareLeftToRightText = () => {
    if (leftText === rightText) {
      setDiffText("texts are indentical..")
      return
    }

    let lines;
    let diffs = [];
    if(leftText.includes('\n') || rightText.includes('\n')) {
      const diff = Diff.diffLines(leftText, rightText, { ignoreWhitespace: true });

      let line = 0;
      for (let i = 0; i < diff.length; i++) {
        let left = 0;
        let right = 0
        const part = diff[i];

        const item = part.value.split('\n');
        for (let j = 0; j < item.length; j++) {
          if (part.added) {
            right = item[j].length;
          }
          else if (part.removed) {
            left = item[j].length * (-1);
          }
          
          line = line + 1;
          diffs.push({
            line: line,
            left: left,
            right: right,
          });
        }
      }

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
    setChartData(diffs);
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
