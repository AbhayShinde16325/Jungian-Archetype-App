export const calculateResult = (answers) => {
  const scoreMap = {};

  answers.forEach(({ archetype }) => {
    scoreMap[archetype] = (scoreMap[archetype] || 0) + 1;
  });

  const sorted = Object.entries(scoreMap)
    .sort((a, b) => b[1] - a[1]);

  return {
    primary: sorted[0][0],
    secondary: sorted[1]?.[0]
  };
};
