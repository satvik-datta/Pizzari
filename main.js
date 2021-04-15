menu_list_array ["Chicken Tandooi Pizza","Margarita Pizza","Indian tandoori Pizza","Extravagenza Pizza","Paneer Tikka Pizza"]





function getmenu() {
    var HTMLdata;
HTMLdata="<ol clall='menulist'>";
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++){
    HTMLdata=HTMLdata+"<li>"+menu_list_array + "</li>";
}
HTMLdata=HTMLdata+"</ol>";
document.getElementById("display_menu").innerHTML=HTMLdata ;
}






function add_item() {
    var HTMLdata
    var new_pizza
    var item =document.getElementById("add_item").value;
    menu_list_array.push(item);
    new_pizza = menu_list_array.sort();
    HTMLdata="<section class='cards'>";
    for (var i=0;i<menu_list_array.length;i++) {
        HTMLdata=HTMLdata+"<div class='cards'>" + '<img src="pizzalamg.png"/>' + menu_list_array[i] + "</div>";
        
    }
    HTMLdata=HTMLdata+"</section>";
    document.getElementById("display_addedmenu").innerHTML=HTMLdata ;
}