import { PropTypes } from 'prop-types';
import s from './Post.module.scss';
import PostCard from '../PostCard';

function Post(props) {
  return (
    <li className={s.ListItem}>
      <PostCard info={props} />
    </li>
  );
}

Post.propTypes = {
  props: PropTypes.object,
};

export default Post;
