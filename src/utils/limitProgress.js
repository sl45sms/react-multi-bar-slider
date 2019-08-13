const limitProgress = (progress,max=100) => Math.max(Math.min(progress, max), 0);
export default limitProgress;
