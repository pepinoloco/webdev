export default function textStats(leftText, rightText) {
  function countRows(text) {
    return text.split("\n").length;
  }

  function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function countChars(text) {
    return text.length;
  }

  const stats = [
    { type: "Row Count", leftText: 0, rightText: 0, diff: 0 },
    { type: "Word Count", leftText: 0, rightText: 0, diff: 0 },
    { type: "Character Count", leftText: 0, rightText: 0, diff: 0 }
  ];

  // Calculate and populate the statistics
  stats[0].leftText = countRows(leftText);
  stats[0].rightText = countRows(rightText);
  stats[0].diff = stats[0].leftText - stats[0].rightText;

  stats[1].leftText = countWords(leftText);
  stats[1].rightText = countWords(rightText);
  stats[1].diff = stats[1].leftText - stats[1].rightText;

  stats[2].leftText = countChars(leftText);
  stats[2].rightText = countChars(rightText);
  stats[2].diff = stats[2].leftText - stats[2].rightText;

  return stats;
}
