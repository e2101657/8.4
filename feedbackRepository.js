let feedbacks = {
  1: 0,
  2: 0,
  3: 0
};

const getFeedbackCount = (value) => {
  return feedbacks[value] || 0;
};
const incrementFeedback = (value) => {
  if (feedbacks[value] !== undefined) {
    feedbacks[value]++;
  }
};
export { getFeedbackCount, incrementFeedback };
