import logo from './play.png';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <div className="blog-img">
            <img className="img-pre" src={blog.img}></img>
            <img className="img-fluid"
              src={logo}
              alt="logo" />
          </div>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;