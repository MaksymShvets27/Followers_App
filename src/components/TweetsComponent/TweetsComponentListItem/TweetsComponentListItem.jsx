import { useDispatch } from "react-redux";
import { tweetsFollowingAsyncThunk } from "../../../redux/tweets.thunk";
import {
  CardImage,
  CardLogoImage,
  ListItemCardAvatar,
  ListItemCardBtn,
  ListItemCardStyled,
} from "./TweetsComponentListItem.styled";
import { useState } from "react";

export const TweetsComponentsListItem = ({ itemInfo }) => {
  const [follow, setFollow] = useState(itemInfo.follow);
  const [tweets, setTweets] = useState(itemInfo.tweets);
  const dispatch = useDispatch();
  const AddFollower = () => {
    if (follow) {
      setTweets((prevState) => prevState - 1);
      dispatch(
        tweetsFollowingAsyncThunk({
          ...itemInfo,
          follow: !itemInfo.follow,
          tweets: itemInfo.tweets - 1,
        })
      );
    } else {
      setTweets((prevState) => prevState + 1);
      dispatch(
        tweetsFollowingAsyncThunk({
          ...itemInfo,
          follow: !itemInfo.follow,
          tweets: itemInfo.tweets + 1,
        })
      );
    }
    setFollow((prevState) => !prevState);
  };
  return (
    <ListItemCardStyled>
      <CardLogoImage src="/card_logo.svg" />
      <CardImage src="/card_svg.svg" />
      <ListItemCardAvatar
        style={{ backgroundImage: `url(${itemInfo.avatar})` }}
      />
      <p>{itemInfo.name}</p>
      <p>{tweets} TWEETS</p>
      <p>{itemInfo.followers} FOLLOWERS</p>
      <ListItemCardBtn
        style={follow ? { background: `#5cd3a8` } : {}}
        onClick={AddFollower}
      >
        {follow ? "Following" : "Follow"}
      </ListItemCardBtn>
    </ListItemCardStyled>
  );
};
