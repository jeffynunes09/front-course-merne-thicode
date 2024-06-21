  import React from 'react'
  import { BsHandThumbsUp } from "react-icons/bs";
  import { BsHandThumbsUpFill } from "react-icons/bs";
  import { BsChatDots } from "react-icons/bs";
  import { BsChatDotsFill } from "react-icons/bs";
  import { CardBody,CardHeader, CardContainer, CardFooter } from './CardStyled';
import TextLimit from '../TextLimit/TextLimit';



function Card({    top,
  title,
  text,
  likes,
  comments,
  banner,
  actions = false,
  id,}) 

 {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={top}>
            {actions && (
              <span>
                <Link to={`/manage-news/edit/${id}`}>
                  <BsHandThumbsUp className="bi bi-pencil-square"></BsHandThumbsUp>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <BsHandThumbsUp className="bi bi-trash3"></BsHandThumbsUp>
                </Link>
              </span>
            )}
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </CardHeader>

          <CardFooter>
            <section>
              <BsHandThumbsUp className="bi bi-hand-thumbs-up"></BsHandThumbsUp>
              <span>{likes?.length}</span>
            </section>

            <section>
              <BsChatDots className="bi bi-chat"></BsChatDots>
              <span>{comments?.length}</span>
            </section>
          </CardFooter>
        </div>

        <img src={banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}
  


export default Card
  