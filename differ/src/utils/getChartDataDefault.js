/**
 * Generates default chart data with zero values for placeholder purposes
 * @returns {Array} Array of data points with line numbers and zero values for removed/added chars
 */

export default function getChartDataDefault() {
  const data = [];
  for (let i=1; i<10; i++) {
    data.push({line: i, removed: 0, added: 0});
  }
  return data;
}
