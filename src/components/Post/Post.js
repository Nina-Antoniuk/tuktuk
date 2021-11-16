import s from './Post.module.scss';
import PostCard from '../PostCard';

function Post(props) {
  return (
    <li className={s.ListItem}>
      <PostCard info={props} />
    </li>
  );
}

export default Post;
