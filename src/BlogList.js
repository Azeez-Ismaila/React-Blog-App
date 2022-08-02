import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.article; u can use this with props as a parameter above or use destructuring
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((Blog) => (
        <div className="blog-preview" key={Blog.id}>
          <Link to={`/blogs/${Blog.id}`}>
            <h2>{Blog.title}</h2>
            <p>Written By {Blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
