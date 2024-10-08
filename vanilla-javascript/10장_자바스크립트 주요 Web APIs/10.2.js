let tourlist = [
  {
    name: "오설록",
    addr: "제주특별자치도 서귀포시 안덕면 신화역사로 15",
    latitude: 33.3046315,
    longitude: 126.2888373,
  },
  {
    name: "섭지코지",
    addr: "제주특별자치도 서귀포시 성산읍 섭지코지로",
    latitude: 33.424214,
    longitude: 126.9289223,
  },
  {
    name: "성산일출봉",
    addr: "서귀포시 성산읍",
    latitude: 33.4580731,
    longitude: 126.9337452,
  },
  {
    name: "함덕해수욕장",
    addr: "제주특별자치도 제주시 조천읍 신북로",
    latitude: 33.5434402,
    longitude: 126.6610204,
  },
];

function getDistance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var radlon1 = (Math.PI * lon1) / 180;
  var radlon2 = (Math.PI * lon2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") {
    dist = dist * 1.609344;
  }
  if (unit == "N") {
    dist = dist * 0.8684;
  }
  return dist;
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log("latitude", latitude);
    console.log("longitude", longitude);

    for (let i = 0; i < tourlist.length; i++) {
      let distance = getDistance(
        latitude,
        longitude,
        tourlist[i].latitude,
        tourlist[i].longitude,
        "K"
      );
      tourlist[i].distance = distance;
    }

    let newTourList = tourlist.sort(function (a, b) {
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });

    console.log(newTourList);
  },
  (err) => {}
);
