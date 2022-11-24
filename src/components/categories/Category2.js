function Category({ title }) {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <h1 style={{ color: "white", fontSize: "1.5rem", marginLeft: "2rem" }}>{title[2].name2}</h1>
    </div>
  );
}

export default Category;
