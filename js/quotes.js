const quotes = [
  {
    quote: 'Those who cannot remember the past are condemned to repeat it.',
    author: 'George Santayana',
  },
  {
    quote: 'I would rather be a coward than brave because people hurt you when you are brave.',
    author: 'E. M. Forster',
  },
  {
    quote: 'Life is a long lesson in humility.',
    author: 'James M. Barrie',
  },
  {
    quote: 'In the truest sense, freedom cannot be bestowed; it must be achieved.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: "The man who doesn't read good books has no advantage over the man who can't read them.",
    author: 'Mark Twain',
  },
  {
    quote: 'A friend is a second self.',
    author: 'Aristotle',
  },
  {
    quote: 'The very spring and root of honesty and virtue lie in good education.',
    author: 'Plutarch',
  },
  {
    quote: 'True life is lived when tiny changes occur.',
    author: 'Leo Tolstoy',
  },
  {
    quote: 'Be modest! It is the kind of pride least likely to offend.',
    author: 'Jules Renard',
  },
  {
    quote: "A man's character is his fate.",
    author: 'Heraclitus',
  },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;
