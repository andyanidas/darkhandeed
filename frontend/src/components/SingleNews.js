import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { Button, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function SingleNews() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "https://darkhandeed.herokuapp.com/api/posts/" + id
  );
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{data?.data.attributes.title}</Card.Title>
          <Card.Img variant="top" src={data?.data.attributes.imageUrl} />
          <Card.Text>
            <ReactMarkdown>{data?.data.attributes.body}</ReactMarkdown>
          </Card.Text>
        </Card.Body>
        <Link to={"/news"}>
          <Button>Мэдээнүүд рүү буцах</Button>
        </Link>
      </Card>
    </div>
  );
}
