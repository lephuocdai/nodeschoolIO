n = process.argv.length;
sum = 0;
for(i = 2; i < n; i++){ sum += Number(process.argv[i]); }
console.log(sum);
