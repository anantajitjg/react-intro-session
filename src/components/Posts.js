import React from 'react';

import placeholder from '../assets/placeholder.jpg';

const Posts = () => {
    return (
        <div class="py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <img src={placeholder} className="bd-placeholder-img card-img-top" alt="Post Title" />
                            <div class="card-body">
                                <h3>Title</h3>
                                <p class="card-text">Content</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Posts;