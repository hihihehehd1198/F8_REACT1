import { useState, useEffect } from "react";

function ListContent() {
  const listOption = ["posts", "todos", "comments"];
  const [option, setOption] = useState("posts");
  const [listData, setListData] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/${option}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setListData(data);
      })
      .catch(
        (err) => {
          console.warn(err);
        },
        [option]
      );
  }, [option]);

  //test useEffect with event scroll
  useEffect(() => {
    //scroll event
    const eventScroll = () => {
      setIsLastPage(window.scrollY >= 1000);
    };
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
  }, []);
  return (
    <div className="App">
      <div>
        {listOption.map((item) => {
          return (
            <button
              onClick={() => {
                setOption(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {listData.map((item) => {
            return <li>{item.title || item.name}</li>;
          })}
        </ul>
      </div>
      {isLastPage && (
        <button
          style={{
            position: "fixed",
            height: 30,
            width: 50,
            color: "red",
            background: "yellow",
            bottom: 20,
            right: 20,
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default ListContent;
