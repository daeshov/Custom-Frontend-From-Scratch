
export const product = (props) => {
  const { id, name, price, image } =  props.data;
  return (
    <div className="product">
      <img src={image}/>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
    </div>
  );
};
 