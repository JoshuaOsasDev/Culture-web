import { useState } from "react";
import Button from "../Button/Button";

function TextExpander({ children }) {
  const [expand, setExpand] = useState(false);
  console.log(children.split(" ").slice(0, 100));
  return (
    <>
      {expand ? children : children.split(" ").slice(0, 60).join(" ")}
      <span>
        <Button type="btnExoand" onClick={() => setExpand((expand) => !expand)}>
          {expand ? "show less" : "show more"}
        </Button>{" "}
      </span>
    </>
  );
}

export default TextExpander;
