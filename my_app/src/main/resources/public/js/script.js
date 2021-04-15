const all_photos = document.querySelectorAll(".item");
const last_photo_index = 13;
const first_photo_index = 0;



function change_modal_content(the_id) {

    document.querySelector('.modal_content').src = document.getElementById(the_id).src;
    document.querySelector('.modal_content').id = the_id;
}



function change_modal_arrows(the_id) {

    if (parseInt(the_id) === first_photo_index) {
        change_modal_content(the_id);

        // hide backwards arrow
        document.querySelector('.backwards').style.display = 'none';
        document.querySelector('.forward').style.display = 'inline';
    }
    else if (parseInt(the_id) === last_photo_index) {
        change_modal_content(the_id);

        document.querySelector('.backwards').style.display = 'inline';
        // hide forward arrow
        document.querySelector('.forward').style.display = 'none';
    }
    else {
        change_modal_content(the_id);

        // display both arrows
        document.querySelector('.backwards').style.display = 'inline';
        document.querySelector('.forward').style.display = 'inline';
    }
    
}



document.addEventListener('click', function(e) {
    
    if (e.target.className == 'item') {
        let current_item = e.target;

        // display the container modal (when user clicks an image).
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    
        // display the image on the container modal.
        let modal_content = document.querySelector(".modal_content");
        modal_content.src = current_item.src; 
        modal_content.id = current_item.id; 
        
        change_modal_arrows(e.target.id);
        
    }
    
    // close the modal window
    else if (e.target.className == 'close') {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    // if you click on the front arrow 
    else if (e.target.className == 'forward') {
        let modal_content = document.querySelector(".modal_content");

        let new_id = parseInt(modal_content.id); 
        new_id = new_id + 1;
        new_id = new_id.toString();
        
        change_modal_arrows(new_id); 
        
     }
     
     // if you click on the back arrow
     else if (e.target.className == 'backwards') {
        let modal_content = document.querySelector(".modal_content");
        
        let new_id = parseInt(modal_content.id);
        new_id = new_id - 1;
        new_id = new_id.toString();
        
        change_modal_arrows(new_id); 
     }
        
}); 
