export default function calculateLinesLength(leftText, rightText) {
 if (leftText === '' && rightText === '') {
    return [{line: 0, left: 0, right: 0}];
 }

  const leftLinesWithWhiteChars = leftText.split('\n');
  const rightLinesWithWhireChars = rightText.split('\n');

  // Remove whitespace characters from each line
  const leftLines = leftLinesWithWhiteChars.map(line => line.replace(/\s/g, ''));
  const rightLines = rightLinesWithWhireChars.map(line => line.replace(/\s/g, ''));

  const leftSize = leftLines.length;
  const rightSize = rightLines.length;

  const data = [];
  const maxLength = Math.max(leftSize, rightSize);

  for (let i = 0; i < maxLength; i++) {
    data.push({
      line: i + 1,
      left: leftLines[i] ? leftLines[i].length : 0,
      right: rightLines[i] ? rightLines[i].length : 0
    });
  }

  return data;
}
