/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let frequencies = Array.from({ length: 26 });
    let obj = {}
    for (task of tasks) {
        obj[task] = (obj[task] || 0) + 1;
    }
    
    for (task of tasks) {
        idx = task.charCodeAt(0) - 'A'.charCodeAt(0)
        if (frequencies[idx]) frequencies[idx]++;
        else frequencies[idx] = 1;
    }
    frequencies = frequencies.filter((a)=> a!== undefined).sort((a, b) => b - a);
    const freq_max = frequencies[0] 
    let vacancies = (freq_max- 1) * n;
    if (vacancies === 0) return tasks.length;
    for (let i = 1; i < frequencies.length; i++){
        vacancies -= Math.min(freq_max[0] - 1, frequencies[i]);
    }
    vacancies = Math.max(0,vacancies);
    return tasks.length + vacancies
};