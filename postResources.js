class getPostResource {
    constructor(data) {
      this.id = data.id;
      this.userId = data.userId;
      this.title = data.title || null;
      this.createdAt = data.createdAt;
    }
  }
  
  export default getPostResource;