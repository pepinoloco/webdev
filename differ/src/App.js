import { useState } from 'react';

// Third-party text comparion library
import * as Diff from 'diff'

// Custom components
import Panel from './components/Panel';
import Chart from './components/Chart';

// Data for vizualization by AG Chart component
import getChartDataDefault from './utils/getChartDataDefault';
import getChartDataLines from './utils/getChartDataLines';
import getChartDataChars from './utils/getChartDataChars';

import './App.css';

const App = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [diffText, setDiffText] = useState([]);
  const [chartData, setChartData] = useState(getChartDataDefault);

  // Callack for left Paste button click event
  const pasteLeftText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setLeftText(clipboardText.replace(/\n$/, ''));
  };

  // Callback for right Paste button click event
  const pasteRighText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setRightText(clipboardText.replace(/\n$/, ''));
  };

  // Callback for Compare button click event
  const compareLeftToRightText = () => {
    if (leftText === rightText) {
      setDiffText('texts are indentical..')
      setChartData(getChartDataDefault());
      return
    }

    let renderedDiff; //rendered Diff results for compare text area
    let chartDataBuffer; //captures chartDate to be renedered by AG Chart 

    // Line-by-line comparison for multiline text, char-by-char comparison for single line
    if(leftText.includes('\n') || rightText.includes('\n')) {
      const diff = Diff.diffLines(leftText, rightText, { ignoreWhitespace: true });
      renderedDiff = diff.map((part, index) => {
        const className = part.added ? 'text-viewer-token-added' : part.removed ? 'text-viewer-token-removed' : '';
        return <div key={index} className={className}>{part.value}</div>;
     });
     chartDataBuffer = getChartDataLines(diff);
    }
    else {
      const diff = Diff.diffChars(leftText, rightText);
      renderedDiff = diff.map((part, index) => {
        const className = part.added ? 'text-viewer-token-added' : part.removed ? 'text-viewer-token-removed' : '';
        return <span key={index} className={className}>{part.value}</span>;
     });
     chartDataBuffer = getChartDataChars(diff);
    }

    // Re-render compare and chart components with new data
    setDiffText(renderedDiff);
    setChartData(chartDataBuffer);
  };

  // Synchronized schrolling of all three components (left, right and compare text areas)
  const syncHorizontalScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const viewers = document.querySelectorAll('.text-viewer');
    viewers.forEach(viewer => {
      if (viewer !== event.target) {
        viewer.scrollLeft = scrollLeft;
      }
    });
  };

  // Renders three instances of Panel component (left, right and compare) and AG chart component
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
      <div className="chart-container">
        <Chart data={chartData}/>
      </div>
    </div>
  );
}

export default App;
