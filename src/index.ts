/* based */

const VIEW_HOME       = "homeView";
const VIEW_ARTICLE    = "articleView";

const TAG_CLASS       = "class";

const ATTR_NONE       = "none";
const ATTR_VISIBLE    = "visible";


class Route {

  private _id:        string;
  private _parent:    string;


  constructor(id: string, parent: string) {

    this._id      = id;
    this._parent  = parent;

  } // constructor


  get id(): string {
    return this._id;
  } // id


  get parent(): string {
    return this._parent;
  } // parent


} // Route


export default class Based {

  private _page:      string;
  private _hash:      string;
  private _routes:    Map<string, Route>;


  constructor() {

    window.onload = this.routeHandler;

    this._page      = "";
    this._hash      = "";
    this._routes    = new Map();
    
    window.addEventListener("hashchange",
      this.routeHandler);

  } // constructor


  routeHandler() {

    var u = new URL(document.URL);

    this._page = u.href;

    if(u.hash.length > 0) {

      this._hash = u.hash.substring(1);

    }

  } // routeHandler


  addRoute(id: string) {

    this._routes.set(id, new Route(id, VIEW_ARTICLE));

  } // addRoute


  showArticle(id: string) {

    const r = this._routes.get(id);

    this.hideView(VIEW_HOME);

    const keys = this.routes.keys();

    for(const k in keys) {
      this.hideView(k);
    }

    const e = document.getElementById(id);

    if(e !== undefined && e !== null) {
      e.setAttribute(TAG_CLASS, ATTR_VISIBLE);
    }

  } // showArticle


  showHome() {

  } // showHome


  hideView(id: string) {

    const e = document.getElementById(id);

    if(e !== undefined && e !== null) {
      e.setAttribute(TAG_CLASS, ATTR_NONE);
    }

  } // hideView


  get page(): string {
    return this._page;
  } // page


  get hash(): string {
    return this._hash;
  } // hash


  get routes(): Map<string, Route> {
    return this._routes;
  } // routes


} // Based
