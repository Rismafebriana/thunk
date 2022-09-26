import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./Post";
import { Toaster } from "react-hot-toast";
import { Container, Button, Table, Spinner } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.entities);
  const loading = useSelector((state) => state.posts.loading);

  const doFetchPosts = () => {
    dispatch(fetchPosts());
  };

  return (
    <Container>
      <Toaster />
      <br>
      </br>
        <Button onClick={doFetchPosts} variant="primary">
        Ambil Data
        </Button>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Table striped className="text-start">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {allPosts.map((post) => (
            <tr key={post.id}> <td>{post.id}</td> <td>{post.title}</td> <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;