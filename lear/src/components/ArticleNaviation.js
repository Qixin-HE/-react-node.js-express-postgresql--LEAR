//This function provide navigation on the "About Us" page and "Laws, Penalties and News" page.
export default function navigateToElement (name)  {
    // const element = document.getElementById(name)
    // element.scrollIntoView();
    //const id = 'profilePhoto';
const yOffset = -122; 
const element = document.getElementById(name);
const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

window.scrollTo({top: y, behavior: 'smooth'});
};