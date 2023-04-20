import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, } = props;
    return (
      <div className="my-3">
        <div className="card">
          {/* <span className="position-absolute top-0 translate-middle p-2 bg-danger border border-light rounded-circle" style={{left: "90%", zIndex:'1'}}>
            {source}
          </span> */}
          <img
            src={
              !imageUrl
                ? "https://editorial.fxstreet.com/images/Breaking/breaking-news_Large.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;