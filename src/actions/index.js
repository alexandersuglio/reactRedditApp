import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(subreddit) {
  const ROOT_URL = 'https://www.reddit.com/r/';
  
  if (subreddit === '')
  {
    subreddit = 'pugs'
  }
  
	const url = `${ROOT_URL}${subreddit}.json`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}