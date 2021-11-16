import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-js-loader';
import s from './Profile.module.scss';
import { statuses } from '../../consts';
import UserProfile from '../../components/UserProfile';
import Post from '../../components/Post';
import { fetchUserById } from '../../services/fetchUserInfo';
import { feed } from '../../services/feed';

function Propfile() {
  const [userInfo, setUserInfo] = useState([]);
  const [userFeed, setUserFeed] = useState([]);
  const [status, setStatus] = useState(statuses.INIT);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    setStatus(statuses.PENDING);
    setUserFeed(feed.itemList);
    fetchUserById(id)
      .then(data => {
        setUserInfo(data);
        setStatus(statuses.RESOLVE);
      })
      .catch(err => {
        setError(err);
        setStatus(statuses.REJECT);
      });
  }, [id]);

  if (status === statuses.INIT) {
    return <div></div>;
  }

  if (status === statuses.PENDING) {
    return (
      <div className="Loader">
        <Loader
          type="bubble-top"
          bgColor={'#FFFFFF'}
          color={'#FFFFFF'}
          size={150}
        />
      </div>
    );
  }

  if (status === statuses.REJECT) {
    return <div>Oops.. something went wrong! {error}</div>;
  }

  if (status === statuses.RESOLVE) {
    return (
      <section className={s.section}>
        <UserProfile profileInfo={userInfo} />
        <ul className={s.postsList}>
          {userFeed.map(el => {
            return (
              <Post
                key={el.id}
                uniqueId={el.author.uniqueId}
                auth={el.author}
                authStats={el.authorStats}
                video={el.video.playAddr}
                hashtags={el.textExtra}
                desc={el.desc}
                views={el.stats.playCount}
                comments={el.stats.commentCount}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Propfile;
