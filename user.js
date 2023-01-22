var dishes = [
    {
        dish: "Biryani",
        price: 300,
        img: "https://firebasestorage.googleapis.com/v0/b/mini-3767b.appspot.com/o/images%2Fbiryani.jpg?alt=media&token=b6b1193e-2890-43f2-af92-4dc9a7f7c226",
    },
    {
        dish: "Reshmi kabab",
        price: 200,
        img: "https://firebasestorage.googleapis.com/v0/b/mini-3767b.appspot.com/o/images%2Freshmi%20kabab.jpg?alt=media&token=d11ba3ab-ac10-4377-9273-162af7370363",
    },
    {
        dish: "chicken karhai with naan",
        price: 450,
        img: "https://firebasestorage.googleapis.com/v0/b/mini-3767b.appspot.com/o/images%2Fchicken%20karhai.jpg?alt=media&token=4f169cec-18ec-405a-a7f0-f13f9b760054",
    },
    {
        dish: "Paratha",
        price: 50,
        img: "https://firebasestorage.googleapis.com/v0/b/mini-3767b.appspot.com/o/images%2Fparatha.jpg?alt=media&token=db1f7073-596a-4e27-bd6c-7f3df0e379fe",
    }
]

var div = document.getElementsByClassName("container")
for(var i in dishes){
    // console.log(dishes[i])
    var values =    Object.values(dishes[i])
    var img = Object.keys(dishes[i])
    // console.log(values)

    var row = document.createElement("div")
    row.setAttribute("class","row")
    var col = document.createElement("div")
    col.setAttribute("class","col col-lg-3")
    for(var j in values){
        if(img[j]=="img"){
            var img_tag = document.createElement("img")
            img_tag.setAttribute("src",values[j])
            // console.log(img_tag)

            // row.appendChild(img_tag)
            col.appendChild(img_tag)
        }
        else{
            var h1 = document.createElement("h5")
            var textnode = document.createTextNode(values[j])
            h1.appendChild(textnode)
            // console.log(h1)
            col.appendChild(h1)
            // row.appendChild(img_tag)

        }
    }
    row.appendChild(col)
    console.log(row)
    div[0].appendChild(row)

}