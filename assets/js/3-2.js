let insertHTML = "";
const kyusyuPrefecture = ["福岡", "大分", "宮崎", "熊本", "佐賀", "長崎", "鹿児島"];

kyusyuPrefecture.forEach(function (prefecture){
    insertHTML += "<li>" + prefecture + "</li>";
    console.log(prefecture);
});

document.querySelector("#prefecture-list").innerHTML = insertHTML
