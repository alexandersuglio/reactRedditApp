import React from 'react';
import moment from 'moment';

export default (props) => {
    var comments = "comments";
    var upvotes = "upvotes";
    var downvotes = "downvotes";

    if (props.commentsNumber === 1) {
        comments = "comment";
    }

    if (props.upvotes === 1) {
        upvotes = "upvote";
    }

    if (props.downvotes === 1) {
        downvotes = "downvote";
    }





    return (

        <div className="panel panel-default">
     
      <div className="panel-body">

   
        <h3> <a href={props.commentsUrl} tabIndex="0"> {props.title} </a> </h3> 

        <a href={props.imgURL}> <img src={props.imgURL} width="500" height="500" onError="this.src='https://upload.wikimedia.org/wikipedia/commons/7/75/Dr.Phil2013.jpg';"/></a>
                     
        <p>{props.commentsNumber} {comments}, 
       
          <span tabIndex="0"> {props.upvotes} {upvotes}</span>, 
       
          <span tabIndex="0"> {props.downvotes} {downvotes}</span>
       
        </p>
       
        <p className="text-muted" tabIndex="0"> Posted about {moment(new Date(props.created * 1000)).fromNow()} by u/</p>  
        <a id="auth" href={props.authorURL} > {props.author} </a>


  
      </div>

    </div>
    );
}