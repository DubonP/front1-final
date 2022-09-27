export function fetchDetalhes(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
