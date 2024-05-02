export class Chatroom {
  private id: any;
  private created_date: any;
  private end_date: any;
  private topic: any;
  private active: any;

  constructor(id: any, created_date: any, end_date: any, topic: any, active: any) {
    this.id = id;
    this.created_date = created_date;
    this.end_date = end_date;
    this.topic = topic;
    this.active = active;
  }

  getId() {
    return this.id;
  }

  getCreatedDate() {
    return this.created_date;
  }

  getEndDate() {
    return this.end_date;
  }

  getTopic() {
    return this.topic;
  }

  getActive() {
    return this.active;
  }

  setId(id: any) {
    this.id = id;
  }

  setCreatedDate(created_date: any) {
    this.created_date = created_date;
  }

  setEndDate(end_date: any) {
    this.end_date = end_date;
  }

  setTopic(topic: any) {
    this.topic = topic;
  }

  setActive(active: any) {
    this.active = active;
  }
}
