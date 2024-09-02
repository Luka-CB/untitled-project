import { createContext, ReactNode, useEffect, useState } from "react";

interface childrenIFace {
  children: ReactNode;
}

interface tagIFace {
  id: string;
  value: string;
}

interface contextIFace {
  tags: tagIFace[];
  tagCount: number;
  errorMsg: string;
  addTag: (tag: tagIFace) => void;
  removeTag: (id: string) => void;
}

export const TagsContext = createContext({} as contextIFace);

const TagsProvider = ({ children }: childrenIFace) => {
  const [tags, setTags] = useState<tagIFace[]>(
    localStorage.getItem("tags")
      ? JSON.parse(localStorage.getItem("tags") || "")
      : []
  );
  const [tagCount, setTagCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const addTag = (tag: tagIFace) => {
    if (tagCount >= 10) {
      return setErrorMsg("You can't add more than 10 tags!");
    }

    setTagCount((prev) => prev + 1);
    setTags((prev: any) => [...prev, tag]);
  };

  const removeTag = (id: string) => {
    const newArr = tags.filter((tag) => tag.id !== id);
    setTags(newArr);
    setTagCount((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  const values = {
    tags,
    tagCount,
    errorMsg,
    addTag,
    removeTag,
  };

  return <TagsContext.Provider value={values}>{children}</TagsContext.Provider>;
};

export default TagsProvider;
