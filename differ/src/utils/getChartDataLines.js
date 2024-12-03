/**
 * Derives chart data by processing diff results into line-by-line data points
 * @param {Array} diff - Array of diff clusters containing added/removed text segments
 * @returns {Array} Array of data points with line number, removed chars (negative), and added chars
 */

export default function getChartDataLines(diff) {
  const data = [];

  let index = 1;
  for (let i = 0; i < diff.length; i++) {
    let added = 0
    let removed = 0;
    const cluster = diff[i];
    const value = cluster.value.replace(/\n$/, '');
    const lines = value.split('\n');

    for (const line of lines) {
      if (cluster.added) {
        added = line.length;
      }
      else if (cluster.removed) {
        removed = line.length * (-1);
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
