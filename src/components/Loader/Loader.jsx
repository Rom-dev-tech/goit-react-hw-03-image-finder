import '../Loader/Loader.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => {
  return (
    <Loader
      className="loader"
      type="Audio"
      color="#303f9f"
      height={70}
      width={70}
      timeout={500}
    />
  );
};

export default Loading;
