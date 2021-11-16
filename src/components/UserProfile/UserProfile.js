import { PropTypes } from 'prop-types';
import s from './UserProfile.module.scss';

function UserProfile({ profileInfo: { user, stats } }) {
  return (
    <div className={s.userProfile}>
      <div className={s.thumb}>
        <img
          className={s.userAvatar}
          src={user?.avatarMedium ?? 'https://via.placeholder.com/300x300'}
          alt={user?.nickname ?? 'placeholder'}
          width="300"
          height="300"
        />
      </div>
      <div className={s.userInfo}>
        <p>
          <span className={s.field}>User name</span>:{' '}
          {user?.nickname ?? 'staranger'}
        </p>
        <p>
          <span className={s.field}>Signature</span>: {user?.signature ?? ''}
        </p>
        <p>
          <span className={s.field}>Followers</span>:{' '}
          {stats?.followerCount ?? 0}
        </p>
        <p>
          <span className={s.field}>Following</span>:{' '}
          {stats?.followingCount ?? 0}
        </p>
        <p>
          <span className={s.field}>Count of posts</span>:{' '}
          {stats?.videoCount ?? 0}
        </p>
      </div>
    </div>
  );
}

UserProfile.defaultProps = {
  profileInfo: {
    user: {
      nickname: '',
      avatarMedium: '',
      signature: '',
    },
    stats: {},
  },
};

UserProfile.propTypes = {
  profileInfo: PropTypes.object,
};

export default UserProfile;
