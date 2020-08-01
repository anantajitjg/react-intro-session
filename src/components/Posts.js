import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import placeholder from '../assets/placeholder.jpg';

import Spinner from './Spinner';

const getReadingTime = (text) => {
    let rTime = '1 Min Read';
    const wpm = 250;
    const numberOfWords = text.split(' ').length;
    if (numberOfWords > wpm) {
        rTime = Math.ceil(numberOfWords/wpm) + ' Mins Read';
    }
    return rTime;
};

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchPosts = async () => {
            const response = await axios.get('https://wp-content.co/wp-json/wp/v2/posts?_embed');

            setPosts(response.data);
            setLoading(false);
        };

        fetchPosts();
    } );

    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    {
                        loading ? <Spinner /> :
                        posts.map((post) => {
                            let date = new Date(post.date);

                            return (
                                <div className="col-md-4 mb-4" key={post.id}>
                                    <div className="card shadow-sm h-100">
                                        <img src={post._embedded['wp:featuredmedia'][0].source_url} className="bd-placeholder-img card-img-top" alt={post.title.rendered} />
                                        <div className="card-body">
                                            {/* <h6><a href={post.link}>{post.title.rendered}</a></h6> */}
                                            <h6><Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link></h6>
                                            {/* <p className="card-text" dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } /> */}
                                        </div>
                                        <div className="card-footer text-muted">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span class="badge badge-secondary px-3 py-2">{date.toLocaleDateString('en-IN')}</span>
                                                <small className="text-muted text-uppercase">{getReadingTime(post.content.rendered)}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Posts;