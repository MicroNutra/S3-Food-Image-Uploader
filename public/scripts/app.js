$(() => {
  displayImages()
  getNeuralNet()
  $('form').submit(uploadImage)
})

function uploadImage(event) {
  event.preventDefault()
  let img = $('input[type=file]').prop('files')[0]
  let formData = new FormData();
  formData.append("image", img);
  $.ajax({
    url: '/image',
    data: formData,
    processData: false,
    contentType: false,
    type: 'POST',
    success: data => {
      displayImages()
    },
    fail: error => {
      console.log(error)
    }
  });
}


var key = []

function displayImages() {
  const baseUrl = "https://s3-us-west-2.amazonaws.com/microlens/"
  $.get('/image')
    .then(result => {
      $('section').html('')
      result.resp.Contents.forEach(image => {
        $('section').append(`<img src= ${baseUrl + image.Key} alt="not an image">`)
        console.log($('img').attr('src')); //logs first in alphanumeric array
        key.push(image.Key);
      })
    //   return $('img').attr('src')
    })
    .then(() => {
      getNeuralNet()
    })
    .catch(err => console.log(err))
}

function getNeuralNet () {
  const baseUrl = "https://s3-us-west-2.amazonaws.com/microlens/"
  // console.log(key);
  console.log(baseUrl + key[key.length-1]); //logs last in alphanumeric array

  // key.forEach(item => {
  //   console.log(baseUrl + item);
  // })

  let url = 'https://dsi-seefood.herokuapp.com/api?key=89477&link='
  let requestUrl = url + baseUrl + key[key.length-1]
  console.log(requestUrl);
  $.get('http://microlens-proxy.herokuapp.com/?url=' + requestUrl)
    .then(result => {
        console.log(result);

    })

}


function normalizeData(item) {
      console.log(item);
      if (item.name.includes("Calcium")){
         item.name = "calcium"
      }
      else if(item.name.includes("Chromium")){
          item.name = "chromium"
       }
      else if(item.name.includes("Flouride")){
          item.name = "flouride"
       }
      else if(item.name.includes("Niacin")){
          item.name = "niacin"
       }
      else if(item.name.includes("Iodine")){
          item.name = "iodine"
       }
      else if(item.name.includes("Iron")){
          item.name = "iron"
       }
      else if(item.name.includes("Magnesium")){
          item.name = "magnesium"
       }
      else if(item.name.includes("Manganese")){
          item.name = "manganese"
       }
      else if(item.name.includes("Molybdenum")){
          item.name = "molybdenum"
       }
      else if(item.name.includes("Phosphorus")){
          item.name = "phosphorus"
       }
      else if(item.name.includes("Selenium")){
          item.name = "selenium"
       }
      else if(item.name.includes("Zinc")){
          item.name = "zinc"
       }
      else if(item.name.includes("Potassium")){
          item.name = "potassium"
       }
      else if(item.name.includes("Sodium")){
          item.name = "sodium"
       }
      else if(item.name.includes("Chloride")){
          item.name = "chloride"
       }
      else if(item.name.includes("Vitamin A")){
          item.name = "vitamin_a"
       }
      else if(item.name.includes("Vitamin B-6")){
          item.name = "vitamin_b12"
       }
      else if(item.name.includes("Vitamin B-12")){
          item.name = "vitamin_b12"
       }
      else if(item.name.includes("Vitamin C")){
          item.name = "vitamin_c"
       }
      else if(item.name.includes("Vitamin D")){
          item.name = "vitamin_d"
       }
      else if(item.name.includes("Vitamin E")){
          item.name = "vitamin_e"
       }
      else if(item.name.includes("Vitamin K")){
          item.name = "vitamin_k"
       }
      else if(item.name.includes("Thiamin")){
          item.name = "thiamin"
       }
      else if(item.name.includes("Riboflavin")){
          item.name = "riboflavin"
       }
      else if(item.name.includes("Pathoethenic")){
          item.name = "pathoethenic_acid"
       }
      else if(item.name.includes("Biotin")){
          item.name = "biotin"
       }
      else if(item.name.includes("Choline")){
          item.name = "choline"
       }
      else if(item.name.includes("Protein")){
          item.name = "protein"
       }
      else if(item.name.includes("Total lipid")){
          item.name = "fats"
       }
      else if(item.name.includes("Carbohydrate")){
          item.name = "carbohydrates"
       }
      else if(item.name.includes("Fiber")){
          item.name = "fibers"
       }
      else if(item.name.includes("Sugars")){
          item.name = "sugars"
       }
      else if(item.name.includes("Water")){
          item.name = "water"
       }
       return item.name
    }
