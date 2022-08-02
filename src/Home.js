import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: Blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {Blogs && <BlogList blogs={Blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
