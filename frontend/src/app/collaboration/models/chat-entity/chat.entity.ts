export class Chat {
  private id: any;
  private chatRoom_id: any;
  private title: any;
  private created_at: any;

  constructor(id: any, chatRoom_id: any, title: any, created_at: any) {
    this.id = id;
    this.chatRoom_id = chatRoom_id;
    this.title = title;
    this.created_at = created_at;
  }

  getId() {
    return this.id;
  }

  getChatRoomId() {
    return this.chatRoom_id;
  }

  getTitle() {
    return this.title;
  }

  getCreatedAt() {
    return this.created_at;
  }

  setId(id: any) {
    this.id = id;
  }

  setChatRoomId(chatRoom_id: any) {
    this.chatRoom_id = chatRoom_id;
  }

  setTitle(title: any) {
    this.title = title;
  }

  setCreatedAt(created_at: any) {
    this.created_at = created_at;
  }
}
