import axios from 'axios';

import { selectFields } from '../selectors/selectFields';

export const baseUrl='https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl=`${baseUrl}newstories.json`;
export const storyUrl=`${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result = await axios
      .get(`${storyUrl + storyId}.json`);
  
    return result.data;
  };

export const getStoryIds=async ()=>{
    const res=await axios.get(newStoriesUrl).then(({data})=>data);

    return res;
}