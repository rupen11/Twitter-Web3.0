import { useContext } from "react";
import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
};

export default function Feed() {
    const { tweets } = useContext(TwitterContext);

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars />
            </div>
            <TweetBox />
            {tweets?.map((tweet, index) => {
                return (
                    <Post
                        key={index}
                        displayName={
                            tweet.author.name === "Unnamed"
                                ? tweet.author.walletAddress
                                : tweet.author.name
                        }
                        username={`${tweet.author.walletAddress.slice(
                            0,
                            4
                        )}...${tweet.author.walletAddress.slice(-4)}`}
                        avatar={tweet.author.profileImage}
                        text={tweet.tweet}
                        isProfileImageNft={tweet.author.isProfileImageNft}
                        timestamp={tweet.timestamp}
                    />
                );
            })}
        </div>
    );
}
