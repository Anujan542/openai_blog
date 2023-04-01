import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const SinglePost = () => {
  return <div>SinglePost</div>;
};

export default SinglePost;

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    prop: {},
  };
});
