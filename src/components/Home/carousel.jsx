import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import { PropTypes } from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';

const DUMMY_VIDEOS = [
  {
    _id: '5fd025a181e2c80897c14ae1',
    videoUrl: 'https://youtu.be/-LkHS8geUjQ'
  },
  {
    _id: '5fd025a181e2c80897c14ae2',
    videoUrl: 'https://youtu.be/Q6nepw3fskg'
  },
  {
    _id: '5fd025a181e2c80897c14ae2',
    videoUrl: 'https://youtu.be/jLMBLuGJTsA'
  },
  {
    _id: '5fd025a181e2c80897c14ae2',
    videoUrl: 'https://youtu.be/ASih5a8F78A'
  },
  {
    _id: '5fd025a181e2c80897c14ae2',
    videoUrl: 'https://youtu.be/DdJhScsJCDI'
  }
];

const useStyles = makeStyles(theme => ({
  carousel: {
    margin: theme.spacing(2),
    marginTop: '100px',
    width: '95vw',
    height: '85vh'
  }
}));

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width='100%' height="420px" url={url} playing={isSelected} controls='controls' />
);

const CarouselVideo = ({ data }) => {
  const classes = useStyles();

  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = videoId => `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = url => url.substr('https://www.youtube.com/watch?v='.length, url.length);

  const customRenderThumb = children =>
    children.map(item => {
      const videoId = getVideoId(item.props.url);

      return <img key={videoId} src={getVideoThumb(videoId)} />;
    });

  return (
    <Grid item md={6} xs={12}>
      <Carousel
        autoPlay={false}
        className={classes.carousel}
        emulateTouch={true}
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        infiniteLoop={true}
      // renderItem={customRenderItem}
      // renderThumbs={customRenderThumb}
      >
        {data.map(v => (
          <YoutubeSlide
            url={v.videoUrl}
            muted
            playing={false}
            key={v._id ? v._id : v.id}
          />
        ))}
      </Carousel>
    </Grid >
  );
};

YoutubeSlide.propTypes = {
  url: PropTypes.string,
  isSelected: PropTypes.bool
};

CarouselVideo.propTypes = {
  data: PropTypes.array
};

CarouselVideo.defaultProps = {
  data: DUMMY_VIDEOS
};

export default CarouselVideo;