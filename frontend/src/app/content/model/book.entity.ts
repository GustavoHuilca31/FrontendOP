export class Book {
  private _title: any;
  private _description: any;
  private _date_publish: any;
  private _type: any;
  private _id: any;
  private _imgUrl:any;
  private _likes: any;
  private _views:any;
  private _revenue:any;
  private _genre:any;


  constructor(title: any, description: any, date_publish: any, type: any, id: any, imgUrl:any, likes:any, views:any, revenue:any, genre:any) {
    this._title = title;
    this._description = description;
    this._date_publish = date_publish;
    this._type = type;
    this._id = id;
    this._imgUrl = imgUrl;
    this._likes=likes;
    this._views=views;
    this._revenue=revenue;
    this._genre=genre;
  }

  get title() {
    return this._title;
  }

  set title(value: any) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value: any) {
    this._description = value;
  }

  get date_publish() {
    return this._date_publish;
  }

  set date_publish(value: any) {
    this._date_publish = value;
  }

  get type() {
    return this._type;
  }

  set type(value: any) {
    this._type = value;
  }

  get id() {
    return this._id;
  }

  set id(value: any) {
    this._id = value;
  }

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(value: any) {
    this._imgUrl = value;
  }

  get likes() {
    return this._likes;
  }

  set likes(value: any) {
    this._likes = value;
  }

  get views() {
    return this._views;
  }

  set views(value: any) {
    this._views = value;
  }

  get revenue() {
    return this._revenue;
  }

  set revenue(value: any) {
    this._revenue = value;
  }
}
