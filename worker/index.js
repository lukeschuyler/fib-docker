const { redisHost, redisPort } = require('./keys');
const { createClient } = require('redis');

const redisClient = createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function fib (index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
  console.log(message);
  redisClient.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');
