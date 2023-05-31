const Card = ({ title, atributes }) => {
  return (
    <span>
      <b>{title}</b>
      <br />
      <i>{atributes[0]}</i>
    </span>
  );
};

export default Card;
