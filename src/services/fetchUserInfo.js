import { BASE_URL, HOST, API_KEY } from './consts';

export function fetchUserById(id) {
  return fetch(`https://tiktok33.p.rapidapi.com/user/info/${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': HOST,
      'x-rapidapi-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.error(`error from fetch by id ${err}`);
    });
}
