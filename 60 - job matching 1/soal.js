function match(candidate, job) {
    if(!(candidate.minSalary)) throw Error("a candidate has no minSalary");
    if(!(job.maxSalary)) throw Error("a job has no maxSalary")
    return job.maxSalary >= (candidate.minSalary  - (candidate.minSalary * 0.1));
}


let candidate1 = { minSalary: 190000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 171000 };

console.log(match(candidate1, job1)); // true
console.log(match(candidate1, job2)); // false