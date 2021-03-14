/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    if (s.length % 2 === 1) return false;
    const mid = s.length / 2;
    const left = s.substr(0, mid);
    const right = s.substr(mid);
    const vCountL = (left.match(/[aeiou|AEIOU]/g) && left.match(/[aeiou|AEIOU]/g).length) || 0;
    const rCountL = (right.match(/[aeiou|AEIOU]/g) && right.match(/[aeiou|AEIOU]/g).length) || 0;
    return vCountL === rCountL;
};

console.log(halvesAreAlike("AbCdEfGh"));
console.log(halvesAreAlike("MerryChristmas"));
console.log(halvesAreAlike("textbook"));
console.log(halvesAreAlike("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC"));