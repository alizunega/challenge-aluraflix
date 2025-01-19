import React from "react";
import Banner from "../../components/Banner"
import ListVids from "../../components/ListVids";
import CategoryFilter from "../../components/Categories"; 
import FormDialog from "../../components/Modal";



const Main = () => {


  return (
    <>
      <Banner />
      <CategoryFilter />
      <ListVids />
      <FormDialog  /> 
    </>

  );
};

export default Main;
