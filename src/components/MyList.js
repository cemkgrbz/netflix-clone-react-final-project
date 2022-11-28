import { useContext, useState } from "react";
import Navbar from "./Header/Navbar";
import { Context } from "./UserList";
import PopUp from "./PopUp";

function MyList() {
  const { myList, setMyList } = useContext(Context);
  const [popup, setPopup] = useState();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [state, setState] = useState(-1);

  const handleRemove = (item) => {
    const newList = [...myList];

    newList.splice(myList.indexOf(item), 1);
    setMyList(newList);

    console.log(myList);
  };

  console.log(myList);

  return (
    <div className="bg-black h-[100vh]">
      <Navbar />
      <div className="flex m-auto gap-5 w-fit flex-wrap">
        {myList.map((item, idx) => (
          <div key={idx} className="">
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className="w-[17rem] rounded mt-[3rem] "
              alt="movie-pics"
              onClick={() => {
                setState(idx);

                // setPopup(

                // );
                // toggleShow();
              }}
            />
            <div
              className="bg-red-600 rounded-full px-2 text-center absolute top-10 right-[-10px] w-fit text-white cursor-pointer"
              onClick={() => handleRemove(item)}
            >
              x
            </div>
            {/* {popup} */}
          </div>
        ))}
        {state > -1 ? (
          <div className="w-[70%] h-[20rem]  p-[10px] m-auto ">
            {<h1 className="text-red-600">{myList[state].original_title}</h1>}
            {<p className="text-white">{myList[state].overview}</p>}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MyList;
