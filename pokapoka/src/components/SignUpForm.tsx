import React from "react";

const style = {};

const SignUpForm = () => {
  const usertype = window.location.pathname;
  const typespace = decodeURI(usertype);
  const typeremove = typespace.split("/").pop();
  let typefinal: string = typeremove!;

  return <h1>{typefinal}</h1>;
};

export default SignUpForm;
