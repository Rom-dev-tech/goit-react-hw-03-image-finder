const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '22356210-f5a6fb995cd777b2b01184cc9';

const fetchImages = async (searchQuerry, page) => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    q: searchQuerry,
    page,
    per_page: 12,
    key: `${API_KEY}`,
  });
  const url = `${BASE_URL}/?${searchParams}`;

  const response = await fetch(url);
  const fetchObject = await response.json();
  const imagesArray = await fetchObject.hits;

  if (imagesArray.length !== 0) {
    return imagesArray;
  }

  return Promise.reject(new Error(`Нет картинок с именем ${searchQuerry}`));

  // return fetch(url)
  //   .then((response) => response.json())
  //   .then((responseObj) => {
  //     if (responseObj.hits !== 0) {
  //       return responseObj.hits;
  //     }
  //     return Promise.reject(new Error(`Нет картинок с именем ${searchQuerry}`));
  //   });
};

export default fetchImages;
