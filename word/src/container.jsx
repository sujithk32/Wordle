const count = Array.from({ length: 25 }, (_, i) => i + 1);

function Container({ arr }) {
  return (
    <div className="container">
      {count.map((ele, index) => (
        <div key={ele} className={arr[index]?.success ? "unbox" : "box"}>
          <span className={arr[index]?.success ? "success" : "unsuccess"}>
            {arr[index]?.item || ""}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Container;
