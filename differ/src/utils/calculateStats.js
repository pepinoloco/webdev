export default function calculateStats(leftText, rightText) {
  function countRows(text) {
    if (text === '') {
      return 0;
    }
    return text.split("\n").length;
  }

  function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function countChars(text) {
    return text.length;
  }

  const stats = [
    { stat: "rows", left: 0, right: 0, diff: 0 },
    { stat: "words", left: 0, right: 0, diff: 0 },
    { stat: "characters", left: 0, right: 0, diff: 0 }
  ];

  // Calculate and populate the statistics
  stats[0].left = countRows(leftText);
  stats[0].right = countRows(rightText);
  stats[0].diff = Math.abs(stats[0].left - stats[0].right);

  stats[1].left = countWords(leftText);
  stats[1].right = countWords(rightText);
  stats[1].diff = Math.abs(stats[1].left - stats[1].right);

  stats[2].left = countChars(leftText);
  stats[2].right = countChars(rightText);
  stats[2].diff = Math.abs(stats[2].left - stats[2].right);

  return stats;
}
