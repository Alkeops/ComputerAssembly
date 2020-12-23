const Categoria = ({ match }) => {
  return (
    <div className="home">
      <h1>{match.params.categoria}</h1>
    </div>
  );
};

export default Categoria;
