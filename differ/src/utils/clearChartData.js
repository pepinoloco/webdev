export default function clearChartData() {
  const data = [];
  for (let i=1; i<10; i++) {
    data.push({line: i, left: 0, right: 0});
  }
  return data;
}
