import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-100 p-2 w-[90%] mx-auto rounded my-10">
      <h1 className="text-4xl md:text-6xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold uppercase underline decoration-green-600">
        Welcome to my Blog
      </h1>
      <div className="px-10 py-2">
        <div className="font-semibold text-gray-500 text-lg border border-green-400 p-4 my-4 rounded-lg">
          <p className="font-bold underline">
            Q : When should you use context API?
          </p>
          <p>
            A : Context API in React should be used when we need to share data or state between components that are not directly related, or when we need to pass data to many components. It can help avoid prop drilling and make our code more modular and maintainable.
          </p>
        </div>
        <div className="font-semibold text-gray-500 text-lg border border-green-400 p-4 my-4 rounded-lg">
          <p className="font-bold underline">Q : What is a custom hook?</p>
          <p>
            A : A custom hook is a JavaScript function that starts with the <code className="text-pink-400">use</code> keyword and follows the React Hook Rules. Custom hooks allow us to reuse stateful logic between different components, reducing the amount of duplicate code.
          </p>
        </div>
        <div className="font-semibold text-gray-500 text-lg border border-green-400 p-4 my-4 rounded-lg">
          <p className="font-bold underline">Q : What is useRef?</p>
          <p>
            A : The useRef Hook allows us to persist values between renders. It
            can be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </div>
        <div className="font-semibold text-gray-500 text-lg border border-green-400 p-4 my-4 rounded-lg">
          <p className="font-bold underline">
            Q : d. What is useMemo?
          </p>
          <p>
            A : In React, useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
