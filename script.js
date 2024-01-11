/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});

sr.reveal('.contact-headline, .project-headline',{
    delay:500,
});
sr.reveal('.nav, .footer-home,.footer-social, .skills-item, .projects-item',{
    origin:"top",
    interval:100,
});
sr.reveal(' .contact-description, .contact-form',{
    origin:"left",
    interval:100,
});
sr.reveal('.hero-image',{origin:"top"});
sr.reveal(' .hero-text');

/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById("contact-form"),
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail=async(e)=>{
    e.preventDefault();

    sendButton.disabled=true;
    sendButton.textContent="Sending...";

    try{
        await emailjs.sendForm(
        "service_45p4zsf",
        "template_xyy0ycd",
        "contact-form",
        "2UrbekLq3nxMTivDq"
        );
        contactMessage.textContent="Message sent successfully";
        setTimeout(()=>{
            contactMessage.textContent="";
        },4000);
        contactForm.reset();
    }
    catch(error){
        contactMessage.textContent="Message not sent(service error)";
    }

    finally{
        sendButton.disabled=false;
        sendButton.textContent="send message";
    }
};
contactForm.addEventListener("submit",sendEmail);