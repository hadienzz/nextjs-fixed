'use client'

const Error = ({error}) => {
  return (
    <main className="error">
      <h1>An Error Occured! </h1>
      <p>Failed to fetch meals data, please try again later!</p>
    </main>
  );
};

export default Error;
