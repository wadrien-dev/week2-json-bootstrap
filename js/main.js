//run function when page has loaded
window.onload = function(){
    const singers = [
        {
            name: "Demi Lovato",
            song: "29",
            hometown: "Dallas, Texas"
        },
        {
            name: "Morgan Wallen",
            song: "Last Night",
            hometown: "Sneedwille, Tennessee"
        },
        {
            name: "Megan",
            song: "Bigger in Texas",
            hometown: "Houston, Texas"
        },
        {
            name: "Adele",
            song: "Hello",
            hometown: "West Norwood, London"
        }
    ]
    
    //create table body
    let tableBody = this.document.getElementById('tableBody');
    for(let i = 0; i < singers.length;i++){
        tableBody.innerHTML +=`
        <tr>
            <td>${singers[i].name}</td>
            <td>${singers[i].song}</td>
            <td>${singers[i].hometown}</td>
        </tr>
        `;
    }
}