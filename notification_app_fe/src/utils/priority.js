const WEIGHTS = {
  placement: 3,
  result: 2,
  event: 1
};

export function calculatePriority(notification) {
  return WEIGHTS[notification.type] * 10000000000000 + notification.timestamp;
}

export function getTopNotifications(data, n) {
  const unread = data.filter(item => !item.read);

  const scored = unread.map(item => ({
    ...item,
    score: calculatePriority(item)
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, n);
}