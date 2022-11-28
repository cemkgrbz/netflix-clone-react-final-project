import { useContext, useState } from "react";
import Navbar from "./Header/Navbar";
import { Context } from "./UserList";
import PopUp from "./PopUp";

function MyList() {
  const { myList, setMyList } = useContext(Context);
  const [popup, setPopup] = useState();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

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
      <div className="flex m-auto gap-5 w-fit">
        {myList.map((item, idx) => (
          <div key={idx} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className="w-[17rem] rounded mt-[3rem] "
              alt="movie-pics"
              onClick={() => {
                setPopup(
                  <PopUp
                    key={idx * Math.random()}
                    movie={item}
                    toggleShow={toggleShow}
                    basicModal={basicModal}
                    setBasicModal={setBasicModal}
                  />
                );
                toggleShow();
              }}
            />
            <div
              className="bg-red-600 rounded-full px-2 text-center absolute top-10 right-[-10px] w-fit text-white cursor-pointer"
              onClick={() => handleRemove(item)}
            >
              x
            </div>
            {popup}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
