import "./loading.css";
import loadingSvg from '../../assets/loading.svg';

function Loading() {
    return <div className="wrapper-loading">
        <img src={loadingSvg} className='loading-svg' />
    </div>
}

export default Loading;