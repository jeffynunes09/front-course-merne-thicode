import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchPosts } from '../../services/postsService';
import { ContainerResults, SearchPosts, TextResults } from './SearchStyled';
import Card from '../../components/Card/Card'

function Search() {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  const search = async () => {
    try {
      const postsApi = await searchPosts(title);
      setPosts(postsApi.data.news);
      console.log(postsApi.data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  };

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
        {posts.length ? `Encontramos ${posts.length} ${posts.length > 1 ? "Resultados" : "Resultado" } para:` : "Não encontramos resultados para :"}
        </span>
        <h2>{title}</h2>
      </TextResults>
      <SearchPosts>
        {posts.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </SearchPosts>
    </ContainerResults>
  );
}

export default Search;
