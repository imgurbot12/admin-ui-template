/*
   Basic library for managing cookies through JS
*/

/* Classes */

class CookieJar {

  // parse cookies into key/value pairs and assign to self
  constructor() {
    this.cookies = {};
    cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
      c = cookies[i].trim().split('=');
      if (c[0]) {
        this.cookies[c[0]] = c[1];
      }
    }
  }

  has(name) {
    return this.cookies[name] != undefined;
  }

  get(name) {
    return this.cookies[name];
  }

  set(name, value) {
    this.cookies[name] = value;
    document.cookie = `${name}=${value}`
  }

  bool(name) {
    return this.get(name) == "true";
  }

  toggle(name) {
    this.set(name, !this.get(name))
  }

  delete(name) {
    delete this.cookies[name];
    this.set(name, '; Max-Age=0');
  }

}

/* Init */

// expose cookie-jar instance
window.addEventListener('DOMContentLoaded', () => {
  window.CookieJar = new CookieJar();
  console.log(window.CookieJar.cookies);
});
