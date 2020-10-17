export default{
  baseUrl: `https://pixabay.com/api/`,
  key: `18650821-54d383092d5458c2872240bef`,
  imageType: `photo`,
  orientation: `horizontal`,
  page: 1,

  getImages(query, perPage){
    let params = `?image_type=${this.imageType}&orientation=${this.orientation}&q=${query}&page=${this.page}&per_page=${per_page}&key=${this.key}`;
    let url = `${this.baseUrl}${params}`;

    return fetch(url)
    .then(response => response.json());
  }
}
