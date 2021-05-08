

export default function navigateToElement (name)  {
    const element = document.getElementById(name)
    element.scrollIntoView();
};