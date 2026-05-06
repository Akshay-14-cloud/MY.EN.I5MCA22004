const WEIGHTS = {
  placement: 3,
  result: 2,
  event: 1
};

export function getTopNotifications(data, n, filter) {
  return data
    .filter(item => !item.read)
    .filter(item => filter === "all" || item.type === filter)
    .map(item => ({
      ...item,
      score: WEIGHTS[item.type] * 1e13 + new Date(item.timestamp).getTime()
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}