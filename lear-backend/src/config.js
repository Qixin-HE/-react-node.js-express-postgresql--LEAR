const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password:process.env.POSTGRES_PASSWORD,
  port:process.env.POSTGRES_PORT,
  twitterConsumerKey:process.env.TWITTER_CONSUMER_KEY,
  twitterConsumerSecret:process.env.TWITTER_CONSUMER_SECRET,
  twitterAccessTokenKey:process.env.TWITTER_ACCESS_TOKEN_KEY,
  twitterTokenSecret:process.env.TWITTER_TOKEN_SECRET,
  newApiKey:process.env.NEWS_API_KEY
};