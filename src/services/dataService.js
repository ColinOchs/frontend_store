import axios from 'axios';

var catalog = [
    {
        _id: "fhklajshdf3456lkja7shdf",
        title: "polka dots",
        price: 7.99,
        stock: 34,
        category: "stationary",
        image: "1-letter.jpg",
        discount: 0,
        
    },
    {
        _id: "glgkdj34568lgkjlkjdf",
        title: "assorted prints",
        price: 24.99,
        stock: 23,
        category: "stationary",
        image: "2-letter.jpg",
        discount: 15,
    },
    {
        _id: "wasdfalglkj3456g",
        title: "black/white prints",
        price: 23.99,
        stock: 13,
        category: "calendars",
        image:"1-calendar.jpg",
        discount: 20,
    },
    {
        _id: "alsdkjflkdjasflk87987j",
        title: "color prints",
        price: 32.99,
        stock: 4,
        category: "calendars",
        image: "2-calendar.jpg",
        discount: 0,
        
    },
    {
        _id: "oieurohis586785687dfoh",
        title: "bird prints",
        price: 29.99,
        stock: 34,
        category: "calendars",
        image: "3-calendar.jpg",
        discount: 10,
        
    },
    {
        _id: "oieur3456ohisdfoh",
        title: "calendar stand",
        price: 36.99,
        stock: 34,
        category: "calendars",
        image: "4-calendar.jpg",
        discount: 10,
        
    },
    {
        _id: "oieurohisdfo4356h",
        title: "alphabet print",
        price: 9.99,
        stock:54,
        category: "framed prints",
        image: "1-frame.jpg",
        discount: 0,
        
    },
    {
        _id: "oieurohisdf3245oh",
        title: "fish print",
        price: 9.99,
        stock: 44,
        category: "framed prints",
        image: "2-frame.jpg",
        discount: 0,
        
    },
    {
        _id: "oieurohis5646dfoh",
        title: "fox print",
        price: 9.99,
        stock: 36,
        category: "framed prints",
        image: "3-frame.jpg",
        discount: 0,
        
    },
    {
        _id: "oieuroh34534isdfoh",
        title: "location print",
        price: 9.99,
        stock: 26,
        category: "framed prints",
        image: "6-frame.jpg",
        discount: 0,
        
    }
];


class DataService{
    async getCatalog() {
      // retrieve the data from the server
      // retrieve the catalog;
      let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
      return resp.data;
       // return mock data
      //return catalog; (uncomment to use mockdata)
    }   

    async getCoupons() {
        //call server
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    async saveProduct(prod){//new
        let resp = await axios.post("http://127.0.0.1:5000/api/catalog", prod);
        return resp.data;  //new ;
    }
    async saveCoupon(coupon){
        let resp = await axios.post("http://127.0.0.1:5000/api/couponCode", coupon);
        return resp.data;
    }
}

export default DataService;