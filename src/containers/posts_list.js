import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';

class PostsList extends Component {
    renderPost(postData) {
        const id = postData.data.id;
        const title = postData.data.title;
        const titleUrl = postData.data.url;
        const commentsNumber = postData.data.num_comments;
        const commentsUrl = `https://www.reddit.com/${postData.data.permalink}`;
        const upvotes = postData.data.ups;
        const downvotes = postData.data.downs;
        const created = postData.data.created_utc;
        const author = postData.data.author;
        const authorURL = `https://www.reddit.com/user/${postData.data.author}`;
        var imgURL = postData.data.url;


        //if (imgURL.contains())


        //if (imgURL.includes('comments') == true || imgURL.includes('youtube') ==true)

        //// imgURL.includes('imgur') == false
        if (imgURL.includes('.jpg') == false || imgURL.includes('gallery') == true) {

            imgURL = `https://www.redditinc.com/assets/images/site/reddit-logo.png`;

        }

        if (postData.data.is_gallery == true /*|| postData.data.domain = 'youtu.be' */ ) {

            imgURL = `https://i.redd.it/${postData.data.gallery_data.items[0].media_id}.jpg`;

           // console.log(postData.data.gallery_data.items[0].media_id);

        }


        // if (postData.data.is_video == true)
        // {
        //   imgURL = postData.data.thumbnail;
        // }


        if (postData.data.post_hint == "rich:video") {
            //imgURL = `https://upload.wikimedia.org/wikipedia/commons/7/75/Dr.Phil2013.jpg`;

            imgURL = postData.data.thumbnail;
        }

        console.log(postData.data.commentsUrl)

   
        return (


            <Post 
        key={id}
        title={title}
        titleUrl={titleUrl}
        commentsNumber={commentsNumber}
        commentsUrl={commentsUrl}
        upvotes={upvotes}
        downvotes={downvotes}
        created={created}
        author={author}
        authorURL={authorURL}
        imgURL = {imgURL}
        
        />
        );
    }

    render() {


        var posts = [];

        var prompt = '';

        //if not null 
        if (this.props.posts[0] !== undefined) {

            posts = this.props.posts[0].data.children
            posts = posts.slice(0, 10)

            //gives me lenth of the array after I slice only first 10...
            console.log(posts.length)

            console.log(posts)

     

            //console.log(posts[4].data.gallery_data.items[0].media_id)
        }

        //if blank
        else {



            prompt = <div tabIndex="0">
      
          <p> Yikes... this is embarrassing </p>

          <img src="http://www.pmlive.com/__data/assets/image/0020/634610/the-chimp-1.jpg" alt="stupid monkey"/>

          <p>Try entering something else</p>
     
      </div>







        }

        var term = localStorage.getItem("previousTerm");

        if (term === '' || term === null) {


            term = 'pugs';

        }

        return (
            <div className="container">
      
        <h1 tabIndex="0">/r/{term.replace(/\s+/g, '')}</h1>
        
        {prompt}

        {posts.map(this.renderPost)}
      </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps)(PostsList);
