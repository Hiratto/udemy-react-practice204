export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title"> -StyledJsx- </p>
        <button className="button">Fight!!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px green;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          aline-items: center;
        }

        .title {
          margin: 0;
          color: red;
        }

        .button {
          background-color: skyblue;
          border: none;
          padding: 8px;
          border-radius: 8px;
          // scssの書き方はできない
          &:hover {
            background-color: #fff;
            color: skyblue;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
