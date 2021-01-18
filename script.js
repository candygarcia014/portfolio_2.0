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
            general: ['Web development',  'Team collaboration', 'Teaching and training', 'Attentive to detail', 'Malleable and adaptable'],
            codingSpecific: ['HTML', 'CSS', 'Javascript']
        },
    
         workExperience: {
            'Peace Corps': 'Taught English as a second language to Ecuadorian high school students',
            'Restaurant manager': 'Trained numerous employees, delegated work duties, counted and balanced cash register',
            'U of Miss Tutor': 'Provided Spanish help and practice to university students'
        }, 
    
        leadershipOther: {
            'Reasearch assistant': 'Worked with a team to study cognitive function in children; handled data collection and entry',
            'President of Sport Club Council': 'Collaborated with council members to make decisions about the organization as a whole as well as decisions about each sport club',
            'Vice president of Wellness Ambassadors': 'Assisted each of 4 wellness subgroups in running their programs and events'
        }, 
    
        education: {
            university: 'University of Mississippi', 
            years: 'August 2015-May 2019',
            major: 'B.A. Psychology', 
            minors: 'Spanish, chemistry, biology',
            GPA: 3.74
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
    
        // $("#education").mouseover(function() {
        //     let newPar = $('<p>');
        //     newPar.html(`${resumeInfo.education.university}
    
        //     ${resumeInfo.education.years}
        
        //     Major: ${resumeInfo.education.major}
        
        //     Minors: ${resumeInfo.education.minors}
    
        //     GPA: ${resumeInfo.education.GPA}`);
        //     populateInfo.append(newPar);
        // })
    
        $(".brand").mouseover(function() {
            let email = $('<p>');
            let phone = $('<p>');
            phone.html('(601) 668-9467');
            email.html('jessicacrump7@gmail.com');
            contactInfo.append(phone);
            contactInfo.append(email);
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
    