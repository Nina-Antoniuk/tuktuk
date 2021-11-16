import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { v4 as uuid } from 'uuid';
import { PropTypes } from 'prop-types';
import s from './CardContentInfo.module.scss';

function CardContentInfo({ video, hashtags, desc }) {
  return (
    <CardContent>
      {video ? (
        <video
          className={s.video}
          src={video}
          // poster="https://via.placeholder.com/200x150.png?text=video+is+not+available"
          width="100%"
          controls
          autoPlay
          muted
          loop
          preload="auto"
        ></video>
      ) : (
        <img
          src="https://via.placeholder.com/200x150.png?text=video+is+not+available"
          alt="placeholder"
        />
      )}

      <Typography
        variant="overline"
        sx={{ lineHeight: 1.2, marginBottom: '5px' }}
      >
        {hashtags.map(el => (
          <p className={s.hashtags} key={el.id ?? uuid()}>
            #{el.name ?? el.hashtagName}
          </p>
        ))}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
  );
}

CardContentInfo.defaultProps = {
  video: '',
  hashtags: [],
  desc: '',
};

CardContentInfo.propTypes = {
  video: PropTypes.string,
  hashtags: PropTypes.array,
  desc: PropTypes.string,
};
export default CardContentInfo;
