import { useDispatch, useSelector } from "react-redux";
import { TweetsComponentsListItem } from "../TweetsComponentListItem/TweetsComponentListItem";
import { useEffect, useState } from "react";
import { tweetsAsyncThunk } from "../../../redux/tweets.thunk";
import { selectTweets } from "../../../redux/selectors";
import {
  TweetsComponentListMoreBtn,
  TweetsComponentListStyled,
} from "./TweetsComponentList.styled";

export const TweetsComponentList = () => {
  const { tweets } = useSelector(selectTweets);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tweetsAsyncThunk(page));
    console.log(tweets);
  }, [dispatch, page]);
  return (
    <>
      {tweets ? (
        <>
          <TweetsComponentListStyled>
            {tweets.map((item) => (
              <TweetsComponentsListItem key={item.id} itemInfo={item} />
            ))}
            <TweetsComponentListMoreBtn
              onClick={() => setPage((prevState) => prevState + 1)}
            >
              Load more
            </TweetsComponentListMoreBtn>
          </TweetsComponentListStyled>
        </>
      ) : (
        <p>Can`t find tweets</p>
      )}
    </>
  );
};
