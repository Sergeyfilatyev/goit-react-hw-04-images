const API_KEY = '29648653-4a0943b69a497c54fdb933d14';
const API_URL = 'https://pixabay.com/api/';

function fetchImage(name, page) {
  return fetch(
    `${API_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No response from server'));
  });
}

export default fetchImage;
