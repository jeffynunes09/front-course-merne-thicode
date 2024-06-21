import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Nav/Nav';
import Card from '../../components/./Card/Card.jsx'
import { HomeBody,HomeHeader } from './HomeStyled.js';
import { getAllPosts,getTopPost } from '../../services/postsService.js';

function Home() {
    const [news, setNews] = useState([]);
    const [topPost, setTopPost] = useState([]);

    useEffect(() => {
        async function findAllPosts() {
            const response = await getAllPosts();
            console.log(response);
            setNews(response.data.results);
        }

      async function  FindTopPost(){

        const topPostResponse = await getTopPost();
        setTopPost(topPostResponse.data);
      }  
  
   
        findAllPosts();
        FindTopPost()
    }, []);

    return (
        <>
      
            <HomeHeader>
        <Card
        top={true}
        key={topPost.id}
          title={topPost.title}
          text={topPost.text}
          banner={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}
        />
      </HomeHeader>
           
            <HomeBody>
            {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
            </HomeBody>
        </>
    );
}

export default Home;