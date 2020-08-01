import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// import placeholder from '../assets/placeholder.jpg';

import Spinner from './Spinner';

const Post = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    let { slug } = useParams();

    useEffect( () => {
        const fetchPost = async () => {
            const response = await axios.get(`https://wp-content.co/wp-json/wp/v2/posts?_embed&slug=${slug}`);

            setPost(response.data);
            setLoading(false);
        };

        fetchPost();
    } );

    return (
        <>
            {
                loading ? <Spinner /> : 
                ( 
                    post.map((data) => {
                        return (
                            <div key={data.id}>
                                <section className="jumbotron text-center mb-0">
                                    <div className="container">
                                        <img src={data._embedded['wp:featuredmedia'][0].source_url} alt={data.title.rendered} />
                                        <h1 className="my-4">{data.title.rendered}</h1>
                                    </div>
                                </section>
                                <div className="py-5 bg-light">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8" dangerouslySetInnerHTML={ { __html: data.content.rendered } } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )
            }
            
        </>
    );
}
 
export default Post;