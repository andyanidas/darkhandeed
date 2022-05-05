import { createContext, useContext, useEffect, useState } from "react";
import { contentFetch } from "../services/otherServices";

interface Content {
  id: number;
  attributes: {
    body: string;
    createdAt: Date;
    publishedAt: Date;
    title: string;
    updatedAt: Date;
  };
}
const ContentContext = createContext<Content[]>([]);

export function useContent() {
  return useContext(ContentContext);
}

export default function ContentProvider(props: any) {
  const [contents, setContents] = useState<Content[]>([]);
  useEffect(() => {
    contentFetch("contents")
      .then((res) => res.json())
      .then((data) => {
        setContents(data.data);
      });
  }, []);
  return (
    <ContentContext.Provider value={contents}>
      {props.children}
    </ContentContext.Provider>
  );
}
