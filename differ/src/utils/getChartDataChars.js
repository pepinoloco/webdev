/**
 * Derives chart data by processing diff results into character-by-character data points
 * @param {Array} diff - Array of diff clusters containing added/removed text segments
 * @returns {Array} Array of data points with index number, removed chars (negative), and added chars
 */

export default function getChartDataChars(diff) {
  const data = [];

  let index = 1;
  for (let i = 0; i < diff.length; i++) {
    let added = 0
    let removed = 0;
    const cluster = diff[i];
    const chars = cluster.value.split('');

    for (const chr of chars) {
      if (cluster.added) {
        added = chr.length;
      }
      else if (cluster.removed) {
        removed = chr.length * (-1);
      }

      data.push({
        line: index,
        removed: removed,
        added: added,
      });

      index = index + 1;
    }
  }

  return data;
}
