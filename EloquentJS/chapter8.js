/**
 * EXERCISES
It is almost unavoidable that, in the course of working on these exercises, you will get confused and frustrated by some regular expression’s inexplicable behavior. Sometimes it helps to enter your expression into an online tool like https://debuggex.com to see whether its visualization corresponds to what you intended and to experiment with the way it responds to various input strings.

Regexp Golf
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

car and cat
pop and prop
ferret, ferry, and ferrari
Any word ending in ious
A whitespace character followed by a period, comma, colon, or semicolon
A word longer than six letters
A word without the letter e (or E)
Refer to the table in the chapter summary for help. Test each solution with a few test strings.

Quoting Style
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.

Numbers Again
Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.cha
 */