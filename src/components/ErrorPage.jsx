import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="error-page"
        className="container mx-auto text-center"
      >
        <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Oops! 404
        </h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-xl">{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <h4 className="text-2xl bg-indigo-400 p-2 rounded text-white w-80 mx-auto my-8">Back to Homepage</h4>
        </Link>
      </div>
    </div>
  );
}
