import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hnApi';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from '../styles/StoryStyles';

import Button from "@material-ui/core/Button";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { mapTime } from '../mappers/mapTime';

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});
  const[count,setCount]=useState(0);

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  },[]);

  const upvote=()=>{
    setCount(count+1);
  }

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
        <Button onClick={()=>upvote()}><sup style={{ height: "4px"}}>{count}</sup><ThumbUpAltIcon/></Button>
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});