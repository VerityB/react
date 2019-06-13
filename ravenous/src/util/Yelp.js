const apiKey = "LyI66oITivorFc3ANlYIytT8QOZtnyBb4M-j-GYbZ6ijsd8S9t-xZZsRpZLnol356VVvDtDnlGqwLNjWpM04lnf6qsvrnQu7TN6dExfvdpt9T6_BRUf1hPozRmcBXXYx";

const Yelp = {
  search(term, location, sortBy) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
  { 
      headers: {
        Authorization: `Bearer ${apiKey}` 
      }
      // converting the returned response to JSON
  }).then(response => {
    if(response.ok) {
      return response.json();
    }
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipcode,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }

}



  export default Yelp;