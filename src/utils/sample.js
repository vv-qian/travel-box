const sampleWithReplacement = (n, items) => {
  const upper = items.length;
  let sampled = [];

  for (let i = 0; i < n; i++) {
    let idx = Math.floor(Math.random() * upper);
    sampled.push(items[idx]);
  }

  return sampled;
};

export default sampleWithReplacement;
