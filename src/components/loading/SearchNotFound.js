
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { ImArrowLeft } from 'react-icons/im';

function SearchNotFound(){

    return (
        <div className="notfound">
            <div className="page_nav">
                <p>
                <Link to="/"><ImArrowLeft /><span>Back</span></Link>
                </p>
            </div>
            <div className="notfound_msg">
                <span className="notfound_icon">
                    <HiOutlineExclamationCircle />
                </span>
                <h4>Search not found...</h4>
            </div>
            <div className="cta-search">
                <h5>Try this keywords:</h5>
                <ul>
                    <li>ID</li>
                    <li>Category</li>
                    <li>Title</li>
                </ul>
            </div>
        </div>
    )
}

export default SearchNotFound