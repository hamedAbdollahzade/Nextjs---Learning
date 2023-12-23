import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

  const isCurrent = useRef(true);
  // console.log(comments);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    // NOTE : اینجا ما از این Api استفاده کردیم
    // NOTE : https://jsonplaceholder.typicode.com/
    // {JSON} Placeholder
    // Free fake API for testing and prototyping.
    // Powered by JSON Server + LowDB. Tested with XV.
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => setComments(json));
  }, []);

  const computedLongestComment = () => {
    // اینجا میخوایم یک تابع درست کنیم ک بزرگترین کامنتی ک وجود داره رو برای ما نمایش بده
    console.log("computedLongestComment");

    if (comments.length > 0) {
      let longestComment = "";
      comments.forEach((comment) => {
        if (comment.body.length > longestComment.length) {
          longestComment = comment.body;
        }
      });
      return longestComment;
    } else {
      return [];
    }
  };

  // NOTE : USE MEMO
  const longetsComment = useMemo(() => computedLongestComment(), [comments]);
  // اینجا بدرد میخوره ک مقداری ک قبلا محاسبه کرده رو به خاطر میسپاره
  //و میگه تا زمانی ک اون دپندسی مربوط به من تغییر نکرده لازم نیس ک مجدد محاسبه انجام بشه

  return (
    <>
      <div style={{ color: "yellow", fontSize: "50px" }}>
        count : {count}
        <br></br>
        <br></br>{" "}
      </div>
      <button onClick={() => setCount((c) => c + 1)}> count ++ </button>
      <div>
        <h3>longestComment :</h3>
        <p>{longetsComment}</p>
      </div>
    </>
  );
}

export default App;
