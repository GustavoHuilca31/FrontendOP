export class User {
  _id: any;
  _name: any;
  _username: any;
  _email: any;
  _type: any;
  _subscription_id: any;
  _imgUrl: any;
  _password: any;

  constructor(id: any, name: any, email: any, type: any, subscription: any, imgUrl: any, password: any, username: any) {
    this._id = id;
    this._username = username;
    this._name = name;

    this._email = email;
    this._type = type;
    this._subscription_id = subscription;
    this._imgUrl = imgUrl;
    this._password = password;
  }

  get getId() {
    return this._id;
  }

  set id(value: any) {
    this._id = value;
  }

  get getFirstName() {
    return this._name;
  }

  set firstName(value: any) {
    this._name = value;
  }


  get getEmail() {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }

  get getType() {
    return this._type;
  }

  set type(value: any) {
    this._type = value;
  }

  get getSubscription() {
    return this._subscription_id;
  }

  set subscription(value: any) {
    this._subscription_id = value;
  }

  get getImgUrl() {
    return this._imgUrl;
  }

  set imgUrl(value: any) {
    this._imgUrl = value;
  }

  get getPassword() {
    return this._password;
  }

  set password(value: any) {
    this._password = value;
  }
}
