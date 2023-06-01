/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
      const jobs = [];
  const n = startTime.length;
  
  for (let i = 0; i < n; i++) {
    jobs.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i]
    });
  }
  
  // Sort jobs based on their end times
  jobs.sort((a, b) => a.end - b.end);
  
  // Initialize dp array
  const dp = new Array(n);
  dp[0] = jobs[0].profit;
  
  for (let i = 1; i < n; i++) {
    const { start, profit } = jobs[i];
    dp[i] = Math.max(profit, dp[i - 1]);
    
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j].end <= start) {
        dp[i] = Math.max(dp[i], dp[j] + profit);
        break;
      }
    }
  }
  
  return dp[n - 1];
};