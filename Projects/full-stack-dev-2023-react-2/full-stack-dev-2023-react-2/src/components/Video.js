import "./Video.css";

function Video({ views = 10 }) {
  console.log(views);
  // console.log(title, channel, views);
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://loremflickr.com/160/90" alt="Katherine Johnson" />
        </div>
        {/* <div className="title">{title}</div> */}
        {/* <div className="channel">{channel}</div> */}
        <div className="views">{/* views <span>{views}.</span> */}</div>
      </div>
    </>
  );
}

export default Video;
