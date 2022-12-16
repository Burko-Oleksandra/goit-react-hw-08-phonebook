import { ProgressBar } from 'react-loader-spinner';
import { LoaderWrap, LoaderOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderWrap>
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#a163f5"
          barColor="#efbad3"
        />
      </LoaderWrap>
    </LoaderOverlay>
  );
};

export default Loader;
