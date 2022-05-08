import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const cardStyle = {
  container: {
    width: "200px",
    height: "200px",
    backgroundColor: "rgba(119, 119, 119, 0.95)",
    display: "block",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "10px 10px 10px black",
  },
  header: {
    // color: "blue",
    textAlign: "center" as "center",
    width: "100%",
  },
  image: {
    width: "100%",
    display: "block",
  },
};
export default function NewsCard(props: any) {
  return (
    <div style={cardStyle.container}>
      <h3 style={cardStyle.header}>{props.attributes.title}</h3>
      <img src={props.attributes.imageUrl} alt="" style={cardStyle.image} />
      <p>{props.attributes.body.substring(0, 70)}...</p>
    </div>
  );
}
