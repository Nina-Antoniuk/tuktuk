import Loader from 'react-js-loader';

function LoaderComponent() {
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

export default LoaderComponent;
