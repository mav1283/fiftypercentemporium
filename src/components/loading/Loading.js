import { FiLoader } from 'react-icons/fi';

function Loading(){
    return (
        <div className="loading">
            <span className="loading_icon">
                <FiLoader />
            </span>
            <h4>Loading...</h4>
        </div>
    )
}

export default Loading