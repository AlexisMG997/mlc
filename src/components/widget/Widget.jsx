import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case "pieces":
      data = {
        title: "PIEZAS PRODUCIDAS",
        isMoney: false,
        link: "VER TODAS LAS PIEZAS",
      };
      break;
    case "scrap":
      data = {
        title: "SCRAP",
        isMoney: false,
        link: "VER TODOS LOS SCRAPS",
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
