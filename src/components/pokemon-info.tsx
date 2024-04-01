import { useGetPokemonByNameQuery } from "../api/pokemon";

type PokeProps = {
  name: string;
};
export function PokemonInfo({ name }: PokeProps) {
  const {
    data,
    error,
    isLoading,
    isFetching,
    isUninitialized,
    isSuccess,
    isError,
  } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <br />
      <br />
      <p>isLoading: {String(isLoading)}</p>
      <p>isFetching: {String(isFetching)}</p>
      <p>isUninitialized: {String(isUninitialized)}</p>
      <p>isSuccess: {String(isSuccess)}</p>
      <p>isError: {String(isError)}</p>
      <br />
    </div>
  );
}
