import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { PropTypes } from 'prop-types';
import s from './NewsFeed.module.scss';
import Post from '../../components/Post';
import LoaderComponent from '../../components/LoaderComponent';
import { statuses } from '../../consts';
import { fetchTrends } from '../../services/fetchNews';

function NewsFeed({ getVideo }) {
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

  // отримання інформації про перше відео
  useEffect(() => {
    getVideo(trends[0]);
  }, [getVideo, trends]);

  if (status === statuses.INIT) {
    return <div></div>;
  }

  if (status === statuses.PENDING) {
    return <LoaderComponent />;
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
                key={uuid()}
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

NewsFeed.propTypes = {
  getVideo: PropTypes.func,
};

export default NewsFeed;
