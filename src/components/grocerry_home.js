import React, { useState } from "react";
import "./index.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Grocerry = () => {
  const [item, setitem] = useState("");
  const [error, seterror] = useState(false);
  const [showitem, setshowitem] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (item) {
      const newitems = { id: new Date().getTime().toString(), item };
      setshowitem((itemlist) => {
        return [...itemlist, newitems];
      });
      setitem("");
    } else {
      seterror(true);
    }
  };

  const removeItem = (id) => {
    let remove = showitem.filter((getout) => getout.id !== id);
    setshowitem(remove);
  };

  return (
    <>
      <section className="container">
        <h2 className="item-head-text">Add ur Grocerry items</h2>
        <section className="input-container">
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="item"
              value={item}
              onChange={(e) => setitem(e.target.value)}
              className={`${error ? "error" : "ok"}`}
            ></input>

            <button type="submit" className="btn">
              <TbShoppingCartPlus style={{ fontSize: "20px" }} />
            </button>
          </form>
        </section>
      </section>
      <section className="show-item">
        {showitem.map((items) => {
          const { id, item } = items;
          return (
            <div className="displayitem-container" key={id}>
              <p>{item}</p>
              <div className="removebtn">
                <button
                  className="remove-item"
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Grocerry;
