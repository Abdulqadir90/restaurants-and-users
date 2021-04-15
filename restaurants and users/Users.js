const users = [
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Olivia",
      "last": "Maunu"
    },
    "location": {
      "street": {
        "number": 9167,
        "name": "Suvantokatu"
      },
      "city": "Somero",
      "state": "Åland",
      "country": "Finland",
      "postcode": 12572,
      "coordinates": {
        "latitude": "-8.0951",
        "longitude": "27.4183"
      },
      "timezone": {
        "offset": "-12:00",
        "description": "Eniwetok, Kwajalein"
      }
    },
    "email": "olivia.maunu@example.com",
    "login": {
      "uuid": "b970eddf-08bb-46cf-9519-1edce70f1884",
      "username": "organicbird898",
      "password": "batman1",
      "salt": "GSRxV0ft",
      "md5": "5b3ef798d0271d0f393a9006e1185ed9",
      "sha1": "2b6ba9c75dc6ddb1ec20e17b35cdf7ee6a59ea5a",
      "sha256": "463ac9895aa51c8670f04b18101f4aecaa4b744d74abebe481b51360a15d2648"
    },
    "dob": {
      "date": "1989-12-23T21:48:16.846Z",
      "age": 32
    },
    "registered": {
      "date": "2016-04-08T03:08:56.658Z",
      "age": 5
    },
    "phone": "05-090-553",
    "cell": "045-112-19-13",
    "id": {
      "name": "HETU",
      "value": "NaNNA292undefined"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/90.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
    },
    "nat": "FI"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Johnny",
      "last": "Schmidt"
    },
    "location": {
      "street": {
        "number": 8808,
        "name": "Harrison Ct"
      },
      "city": "Fremont",
      "state": "California",
      "country": "United States",
      "postcode": 86728,
      "coordinates": {
        "latitude": "15.3966",
        "longitude": "-138.8777"
      },
      "timezone": {
        "offset": "+5:45",
        "description": "Kathmandu"
      }
    },
    "email": "johnny.schmidt@example.com",
    "login": {
      "uuid": "242f354f-3f18-4dce-951d-039607faba70",
      "username": "redkoala130",
      "password": "potter",
      "salt": "dmJAaB0P",
      "md5": "562d88fadef038b3379a7b35f52b9f7d",
      "sha1": "69e5e34bd9852370cdec211b9c2ffb5665259ff4",
      "sha256": "64fe445858f79e3c541a376de84043b8f2aa36021c61557c112fdb9e37990d34"
    },
    "dob": {
      "date": "1959-07-27T16:18:23.255Z",
      "age": 62
    },
    "registered": {
      "date": "2018-03-09T19:04:11.289Z",
      "age": 3
    },
    "phone": "(065)-775-1946",
    "cell": "(771)-290-4761",
    "id": {
      "name": "SSN",
      "value": "795-40-5160"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/90.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
    },
    "nat": "US"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Milton",
      "last": "Dunne"
    },
    "location": {
      "street": {
        "number": 8864,
        "name": "Mill Lane"
      },
      "city": "Athy",
      "state": "Laois",
      "country": "Ireland",
      "postcode": 47404,
      "coordinates": {
        "latitude": "-40.3619",
        "longitude": "148.2001"
      },
      "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
      }
    },
    "email": "milton.dunne@example.com",
    "login": {
      "uuid": "e0a8cc82-f7bc-4c33-a07c-a2ce86182a1a",
      "username": "goldenlion155",
      "password": "fellatio",
      "salt": "inpMW2Cl",
      "md5": "2960c24e45ad20683120b0615155575e",
      "sha1": "3a35da7c674b3c66bcc447b96926ddf0be46e64d",
      "sha256": "cc0c94ed4d1f8c7e224959232f7ad946b9d2f81781354c33391fb94ff461d571"
    },
    "dob": {
      "date": "1948-02-13T02:45:49.251Z",
      "age": 73
    },
    "registered": {
      "date": "2011-03-22T06:13:38.190Z",
      "age": 10
    },
    "phone": "061-527-2482",
    "cell": "081-029-5429",
    "id": {
      "name": "PPS",
      "value": "9680922T"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/31.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
    },
    "nat": "IE"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Leif",
      "last": "Svendsen"
    },
    "location": {
      "street": {
        "number": 7805,
        "name": "Hansemyrveien"
      },
      "city": "Mandal",
      "state": "Møre og Romsdal",
      "country": "Norway",
      "postcode": "4346",
      "coordinates": {
        "latitude": "-29.4700",
        "longitude": "76.6135"
      },
      "timezone": {
        "offset": "-10:00",
        "description": "Hawaii"
      }
    },
    "email": "leif.svendsen@example.com",
    "login": {
      "uuid": "36e60762-349c-4d72-9590-185d93b37c30",
      "username": "organicbutterfly217",
      "password": "zxczxc",
      "salt": "eBYg1cAn",
      "md5": "728ffed6f39a522faa36f74d62e99b44",
      "sha1": "574c4c104d644a0777d4d8e16df293de059fea75",
      "sha256": "6924f6945a0fb3511339b029ada2ae72ca7e9779d21445e8f02bcbc83fa0b3b2"
    },
    "dob": {
      "date": "1981-05-20T08:08:47.556Z",
      "age": 40
    },
    "registered": {
      "date": "2006-11-11T05:01:16.267Z",
      "age": 15
    },
    "phone": "32970427",
    "cell": "94882278",
    "id": {
      "name": "FN",
      "value": "20058134997"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/5.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
    },
    "nat": "NO"
  },
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Wade",
      "last": "Douglas"
    },
    "location": {
      "street": {
        "number": 174,
        "name": "Broadway"
      },
      "city": "Cardiff",
      "state": "South Yorkshire",
      "country": "United Kingdom",
      "postcode": "QO2S 9EB",
      "coordinates": {
        "latitude": "-46.4577",
        "longitude": "179.6640"
      },
      "timezone": {
        "offset": "+9:30",
        "description": "Adelaide, Darwin"
      }
    },
    "email": "wade.douglas@example.com",
    "login": {
      "uuid": "874efae1-e33c-468d-9c48-6f17c1d063f9",
      "username": "yellowdog256",
      "password": "12344321",
      "salt": "q73ZJjfz",
      "md5": "b9b9330873da50fa5c59446212e61dce",
      "sha1": "c034d3785c48f975f2f0770b134b95e42e3d669a",
      "sha256": "16cbbdb516225a665e0e3bf9ae0bbd92fffc76057242cb3a35029ad970003457"
    },
    "dob": {
      "date": "1983-11-20T03:33:57.444Z",
      "age": 38
    },
    "registered": {
      "date": "2006-01-06T00:30:26.393Z",
      "age": 15
    },
    "phone": "020 0076 2969",
    "cell": "0703-476-659",
    "id": {
      "name": "NINO",
      "value": "HR 28 86 66 A"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/36.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Milja",
      "last": "Ramo"
    },
    "location": {
      "street": {
        "number": 8808,
        "name": "Pyynikintie"
      },
      "city": "Kitee",
      "state": "Uusimaa",
      "country": "Finland",
      "postcode": 77410,
      "coordinates": {
        "latitude": "-69.7234",
        "longitude": "-133.0861"
      },
      "timezone": {
        "offset": "-3:00",
        "description": "Brazil, Buenos Aires, Georgetown"
      }
    },
    "email": "milja.ramo@example.com",
    "login": {
      "uuid": "a4033ec1-74bd-47ed-84bd-a4792f3e002c",
      "username": "bigcat806",
      "password": "morgan",
      "salt": "pMdTK27a",
      "md5": "cd17ee32de59122e74e0f42c7cb22c40",
      "sha1": "3d75567d6ca392c02d983c7755238d436f424245",
      "sha256": "b44675b9711063c5623d9192c12ade5ca67550412210112102305963ddf52b7b"
    },
    "dob": {
      "date": "1968-02-23T08:13:33.233Z",
      "age": 53
    },
    "registered": {
      "date": "2018-01-31T15:38:07.797Z",
      "age": 3
    },
    "phone": "02-369-898",
    "cell": "041-879-22-79",
    "id": {
      "name": "HETU",
      "value": "NaNNA394undefined"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/58.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
    },
    "nat": "FI"
  },
  {
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Peppi",
      "last": "Palo"
    },
    "location": {
      "street": {
        "number": 8895,
        "name": "Hatanpään Valtatie"
      },
      "city": "Varkaus",
      "state": "Kainuu",
      "country": "Finland",
      "postcode": 18337,
      "coordinates": {
        "latitude": "-27.7975",
        "longitude": "-83.6756"
      },
      "timezone": {
        "offset": "-12:00",
        "description": "Eniwetok, Kwajalein"
      }
    },
    "email": "peppi.palo@example.com",
    "login": {
      "uuid": "fdd92160-f22b-435d-aa51-eb8394085252",
      "username": "sadpanda659",
      "password": "north",
      "salt": "3DH1mkGI",
      "md5": "02361166bef123b120c1d1e7f336107f",
      "sha1": "51489417f1adb70c827bb3fb28e16bdc7390a177",
      "sha256": "c9f89060f97eb672d8d7e3c5f3814a407b8d0a756f2891caf84d173921813e95"
    },
    "dob": {
      "date": "1995-01-24T05:49:46.191Z",
      "age": 26
    },
    "registered": {
      "date": "2012-08-24T17:06:42.408Z",
      "age": 9
    },
    "phone": "03-531-510",
    "cell": "042-578-11-67",
    "id": {
      "name": "HETU",
      "value": "NaNNA506undefined"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/55.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
    },
    "nat": "FI"
  },
  {
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Carla",
      "last": "Perez"
    },
    "location": {
      "street": {
        "number": 9672,
        "name": "Oak Lawn Ave"
      },
      "city": "Geelong",
      "state": "Tasmania",
      "country": "Australia",
      "postcode": 7731,
      "coordinates": {
        "latitude": "-47.4972",
        "longitude": "139.2381"
      },
      "timezone": {
        "offset": "+2:00",
        "description": "Kaliningrad, South Africa"
      }
    },
    "email": "carla.perez@example.com",
    "login": {
      "uuid": "27789de8-0013-46f4-82ef-448948e35d49",
      "username": "ticklishswan621",
      "password": "japanes",
      "salt": "476VqDEW",
      "md5": "3702b58546a86c46a15a4fe9746f7529",
      "sha1": "53fbea01e72e466a24ac470c46598aa0ff77c123",
      "sha256": "60eb52d4327856413614bc8e4c968a6e72c3a6964e230204cc6cc36a3b17f448"
    },
    "dob": {
      "date": "1983-05-31T18:50:28.746Z",
      "age": 38
    },
    "registered": {
      "date": "2015-04-27T06:58:57.596Z",
      "age": 6
    },
    "phone": "01-2382-0011",
    "cell": "0460-863-210",
    "id": {
      "name": "TFN",
      "value": "021748754"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/77.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
    },
    "nat": "AU"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mademoiselle",
      "first": "Biljana",
      "last": "Blanc"
    },
    "location": {
      "street": {
        "number": 9972,
        "name": "Rue Duguesclin"
      },
      "city": "Pratteln",
      "state": "Glarus",
      "country": "Switzerland",
      "postcode": 1810,
      "coordinates": {
        "latitude": "73.6641",
        "longitude": "-125.4051"
      },
      "timezone": {
        "offset": "-8:00",
        "description": "Pacific Time (US & Canada)"
      }
    },
    "email": "biljana.blanc@example.com",
    "login": {
      "uuid": "2c2d6c51-e1ab-4869-b4db-dcd5767edce5",
      "username": "lazyduck148",
      "password": "nookie",
      "salt": "AtyKIpfH",
      "md5": "bbc918650b29bd15b0f2e38cfc8c2e12",
      "sha1": "934c7b1d9df7419bb4de2eb844faa272bdd1652b",
      "sha256": "c99c5f9f098a4d7cff919f7b8a21fbd1bfc4e4a875ece28033e7c8ff4e84455f"
    },
    "dob": {
      "date": "1946-11-25T19:19:34.256Z",
      "age": 75
    },
    "registered": {
      "date": "2002-10-02T02:17:08.315Z",
      "age": 19
    },
    "phone": "076 902 47 15",
    "cell": "078 948 29 89",
    "id": {
      "name": "AVS",
      "value": "756.2680.6387.95"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/80.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
    },
    "nat": "CH"
  },
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Juana",
      "last": "Duran"
    },
    "location": {
      "street": {
        "number": 1626,
        "name": "Calle de Arturo Soria"
      },
      "city": "Oviedo",
      "state": "Castilla y León",
      "country": "Spain",
      "postcode": 21253,
      "coordinates": {
        "latitude": "32.6750",
        "longitude": "-71.4599"
      },
      "timezone": {
        "offset": "+1:00",
        "description": "Brussels, Copenhagen, Madrid, Paris"
      }
    },
    "email": "juana.duran@example.com",
    "login": {
      "uuid": "4119ec3b-3972-473c-801b-a3eaef166caa",
      "username": "yellowduck181",
      "password": "hitler",
      "salt": "mVkfT72z",
      "md5": "c2da2ab311a83cda1d05f6f006528eeb",
      "sha1": "de28b12b032f16ba05d85e424cdbf727873a3f98",
      "sha256": "6e5a8ed459445ab6b0a74ddecf89c008962a8ad572970daba9a5d24c446804b0"
    },
    "dob": {
      "date": "1982-07-30T16:55:35.202Z",
      "age": 39
    },
    "registered": {
      "date": "2014-11-21T12:20:06.600Z",
      "age": 7
    },
    "phone": "915-584-002",
    "cell": "699-713-954",
    "id": {
      "name": "DNI",
      "value": "77434789-E"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/22.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
    },
    "nat": "ES"
  }
]

let user = users[2];



// print the full name of everyone in the list.  You should see 10 names

let user = users[2];

// users.forEach((user) =>{
  // console.log(`${user.gender} ${user.name.first} ${user.name.last} ${user.dob.age}`)

// })

// Write a function to return the average age of everyone in the list
let total = 0;
users.forEach((user, index) => {

  let age = user.dob.age;

  total = total + age;
})

let average = total/users.length;
console.log(average);

//  print only those people who are older than the average age.
// let averageNum = 47.6;

users.forEach((user) => {
  if (user.dob.age > average -10 && user.dob.age < average +10 ) {
console.log(`${user.gender} ${user.name.first} ${user.name.last} ${user.dob.age}`)
  }
}); 




// write a function to take a country as a parameter and return all the users who live in that country.  This search should not be case sensitive.  Test your function by passing "finland" as the country to search for.


function findUsers(country) {
let results = users.filter((user) => {
if (user.location.country.toLowerCase() === country.toLowerCase()){
  return true; 
} else {
  return false;
}
});
return results;
}

let allFrom = findUsers("finland");
console.log(allFrom.length);


