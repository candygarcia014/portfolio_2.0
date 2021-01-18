$( document ).ready(function() {

    const messageIcon = $('.message-icon');
    const emailIcon = $('.email-icon');
    const form = $('.form');
    const contactLabels = $('.contact');
    const populateInfo = $('.populate-info');
    const contactInfo = $('.email-and-phone');
    
    
    
        messageIcon.on('click', function(){
            form.css('visibility', 'visible');
            messageIcon.css('visibility', 'hidden');
            emailIcon.css('visibility', 'hidden');
            emailIcon.css('visibility', 'hidden');
            contactLabels.css('visibility', 'hidden');
        })
    
    const resumeInfo = {
        skills: {
            
        },
    
         workExperience: {
     
        }, 
    
        leadershipOther: {

        }, 
    
        education: {

        }
    };
    
        $("#skills").mouseover(function() {
            
            for (i = 0; i < resumeInfo.skills.general.length; i++) {
                let newList = $('<ul>');
                let newListItem = $('<li>');
                newListItem.html(`${resumeInfo.skills.general[i]}`);
                newList.append(newListItem);
                populateInfo.append(newList);
               
            }
            
        })
    
        $("#experience").mouseover(function() {
            let newList = $('<ul>');
            let newListItem1 = $('<li>');
            let newListItem2 = $('<li>');
            let newListItem3 = $('<li>');
            newListItem1.html(`Reasearch assistant: ${resumeInfo.workExperience["Peace Corps"]}`);
            newListItem2.html(`Restaurant manager: ${resumeInfo.workExperience["Restaurant manager"]}`)
            newListItem3.html(`U of Miss Tutor: ${resumeInfo.workExperience["U of Miss Tutor"]}`);
            newList.append(newListItem1);
            newList.append(newListItem2);
            newList.append(newListItem3);
            populateInfo.append(newList);
        })
    
        $("#education").mouseover(function() {
            const {university, years, major, minors, GPA} = resumeInfo.education;
            let newList = $('<ul>');
            let newListItem1 = $('<li>');
            let newListItem2 = $('<li>');
            let newListItem3 = $('<li>');
            let newListItem4 = $('<li>');
            let newListItem5 = $('<li>');
    
            newListItem1.html(`${university}`);
    
            newListItem2.html(`${years}`);
        
            newListItem3.html(`Major: ${major}`);
        
            newListItem4.html(`Minors: ${minors}`);
    
            newListItem5.html(`GPA: ${GPA}`);
            newList.append(newListItem1);
            newList.append(newListItem2);
            newList.append(newListItem3);
            newList.append(newListItem4);
            newList.append(newListItem5);
            populateInfo.append(newList);
        })
    
      
    
    $("#skills").mouseleave(function(){
        populateInfo.empty();
    })
    
    $("#experience").mouseleave(function(){
            populateInfo.empty();
        })
    
    $("#education").mouseleave(function(){
        populateInfo.empty();
    })
    
    $(".brand").mouseleave(function(){
        contactInfo.empty();
    })
    
    })
    