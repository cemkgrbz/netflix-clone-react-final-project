function Category({ title }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <h1 style={{ color: "white", fontSize: "1.5rem" }}>{title[4].name4}</h1>
    </div>
  );
}

export default Category;
