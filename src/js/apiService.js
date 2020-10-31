export default{
  baseUrl: `https://pixabay.com/api/`,
  key: `18650821-54d383092d5458c2872240bef`,
  imageType: `photo`,
  orientation: `horizontal`,
  q: ``,
  per_page: 3,
  page: 1,

  getImages(){
    let params = `?image_type=${this.imageType}&orientation=${this.orientation}&q=${this.q}&page=${this.page}&per_page=${this.per_page}&key=${this.key}`;
    let url = `${this.baseUrl}${params}`;

    return fetch(url)
    .then(response => response.json());
  },
  setPage() {
    return this.page += 1;
  },

  // get perPage() {
  //   return this.per_page = value;
  // },
  // set perPage(value) {
  //   return (this.per_page = value);
  // },

  get query(){
    return this.q = value;
  },
  set query(value){
    return this.q = value;
  }
}

