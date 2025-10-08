function createElement(tag, { text, classes = [], children = [],  attrs = {}} = {}) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (classes.length) el.classList.add(...classes);
  children.forEach(child => el.appendChild(child));

    if (attrs && typeof attrs === "object") {
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }




  return el;
}



export {createElement};