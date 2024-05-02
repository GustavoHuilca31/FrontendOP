export class Message {
  private id: any;
  private content: any;
  private chat_id: any;
  private isRead: any;
  private isSend: any;

  constructor(id: any, content: any, chat_id: any, isRead: any, isSend: any) {
    this.id = id;
    this.content = content;
    this.chat_id = chat_id;
    this.isRead = isRead;
    this.isSend = isSend;
  }

  getId() {
    return this.id;
  }

  getContent() {
    return this.content;
  }

  getChatId() {
    return this.chat_id;
  }

  getIsRead() {
    return this.isRead;
  }

  getIsSend() {
    return this.isSend;
  }

  setId(id: any) {
    this.id = id;
  }

  setContent(content: any) {
    this.content = content;
  }

  setChatId(chat_id: any) {
    this.chat_id = chat_id;
  }

  setIsRead(isRead: any) {
    this.isRead = isRead;
  }

  setIsSend(isSend: any) {
    this.isSend = isSend;
  }
}
