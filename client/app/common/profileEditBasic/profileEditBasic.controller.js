class ProfileEditBasicController {
  constructor() {
    this.name = 'profileEditBasic';

    this.newAddress = { placeId: '', address: '', lat: '', lng: '', mapLink: '' };
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', value: this.user.name },
      { type: 'update', field: 'email', value: this.user.email },
      { type: 'update', field: 'phone', value: this.user.phone },
      { type: 'update', field: 'addressPlaceId', value: this.newAddress.placeId },
      { type: 'update', field: 'address', value: this.newAddress.address },
      { type: 'update', field: 'addressLat', value: this.newAddress.lat },
      { type: 'update', field: 'addressLng', value: this.newAddress.lng },
      { type: 'update', field: 'addressMapLink', value: this.newAddress.mapLink },
    ];
    const stateChange = 'profile';
    this.modifyProfile({ modifyDetails, stateChange });
  }

  imageSave(data, field) {
    const fieldPublicId = `${field}PublicId`;
    const modifyDetails = [
      { type: 'update', field, value: data.data.secure_url },
      { type: 'update', field: fieldPublicId, value: data.data.public_id },
    ];
    const stateChange = false;
    this.modifyProfile({ modifyDetails, stateChange });
  }

  imageDelete(field) {
    const fieldPublicId = `${field}PublicId`;
    const modifyDetails = [
      { type: 'remove', field, value: false },
      { type: 'remove', field: fieldPublicId, value: false },
    ];
    const stateChange = false;
    this.modifyProfile({ modifyDetails, stateChange });
  }

  imageError(error) {
    console.log(error);
  }
}

export default ProfileEditBasicController;

/*
{ "address_components":[
  {"long_name":"Somerville","short_name":"Somerville","types":["sublocality_level_1","sublocality","political"]},
  {"long_name":"Auckland","short_name":"Auckland","types":["locality","political"]},
  {"long_name":"Auckland","short_name":"Auckland","types":["administrative_area_level_2","political"]},
  {"long_name":"Auckland","short_name":"Auckland","types":["administrative_area_level_1","political"]},
  {"long_name":"New Zealand","short_name":"NZ","types":["country","political"]},
  {"long_name":"2014","short_name":"2014","types":["postal_code"]}],

  "adr_address":"<span class=\"extended-address\">Somerville</span>, <span class=\"locality\">Auckland</span> <span class=\"postal-code\">2014</span>, <span class=\"country-name\">New Zealand</span>",

  "formatted_address":"Somerville, Auckland 2014, New Zealand",

  "geometry":{"location":{"lat":-36.9132773,"lng":174.92774029999998},

  "viewport":{"south":-36.9225056,"west":174.92586729999994,"north":-36.9055874,"east":174.94263909999995}},

  "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",

  "id":"781a6493881a6a5108f614f30fb0d494ceaacae9",

  "name":"Somerville",

  "photos":[
    {"height":2358,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/116654163062451053250/photos\">Lianne Trevarthen</a>"],"width":4191},
    {"height":1594,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/105455679192926955517/photos\">Mohit Kakkar</a>"],"width":2991},
    {"height":1836,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/101470508911159159039/photos\">Jason Vasil</a>"],"width":3264},
    {"height":2988,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/114155556248614205886/photos\">Shaun Feldman</a>"],"width":5312},
    {"height":2448,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/108163430031368720750/photos\">Eamonn McKnight</a>"],"width":3264},
    {"height":2988,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/105455679192926955517/photos\">Mohit Kakkar</a>"],"width":5312},
    {"height":1836,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/109765503629741219984/photos\">Rahul Jagjiwan</a>"],"width":3264},
    {"height":2448,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/101689384288538187369/photos\">Malvin Leong</a>"],"width":3264},
    {"height":2322,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/102317468595780890359/photos\">Richardjenny Wagener</a>"],"width":4128},
    {"height":2988,"html_attributions":["<a href=\"https://maps.google.com/maps/contrib/110012759733045239498/photos\">Johnny Chao</a>"],"width":5312}],

  "place_id":"ChIJjZSQcUlLDW0RgMmiQ2HvAAU",

  "reference":"CmRbAAAA0iF32mu3aFADDBlpGZdwwU3farI4IQ6ffrqtw0iHtiKr3J_suL57mpJUJmstq5MPefUbAJanNzZhS2HAEZpwvxgUYVo9GZwQ0V1VBbBJCmE_L8WkTqwIU_yA1eRSRmFcEhD3KkW7YW_-dwfDM_ApPLwEGhQ6pLXCt_E7bP1fxaa1ncAHmXHqcg",

  "scope":"GOOGLE",

  "types":["sublocality_level_1","sublocality","political"],

  "url":"https://maps.google.com/?q=Somerville,+Auckland+2014,+New+Zealand&ftid=0x6d0d4b497190948d:0x500ef6143a2c980",

  "utc_offset":780,

  "vicinity":"Somerville",

  "html_attributions":[],

  "coords":{"lat":-36.9132773,"lng":174.92774029999998}}
*/
