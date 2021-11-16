import { useState, useEffect } from 'react';
import Loader from 'react-js-loader';
import s from './NewsFeed.module.scss';
import Post from '../../components/Post';
import { statuses } from '../../consts';
import { fetchTrends } from '../../services/fetchNews';

function NewsFeed() {
  const [trends, setTrends] = useState([]);
  const [status, setStatus] = useState(statuses.INIT);
  const [error, setError] = useState('');

  useEffect(() => {
    setStatus(statuses.PENDING);
    fetchTrends()
      .then(data => {
        setTrends(data);
        setStatus(statuses.RESOLVE);
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setStatus(statuses.REJECT);
      });
  }, []);

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
          size={100}
        />
      </div>
    );
  }

  if (status === statuses.REJECT) {
    return <div>Oops.. something went wrong! {error}</div>;
  }

  if (status === statuses.RESOLVE) {
    return (
      <section className="section">
        <ul className={s.postsList}>
          {trends.map(el => {
            return (
              <Post
                key={el.id}
                uniqueId={el.authorMeta.name}
                auth={el.authorMeta}
                video={el.videoUrl}
                hashtags={el.hashtags}
                desc={el.text}
                views={el.playCount}
                comments={el.commentCount}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default NewsFeed;
