export default class Task {
  private title: String;
  private description: String;
  private createdAt: Date;

  public constructor(title: String)
  {
    this.title = title;
    this.description = '';
    this.createdAt = new Date;
  }

  public getTitle(): String
  {
    return this.title;
  }

  public setDescription(description: String)
  {
    this.description = description;
  }

  public getDescription(): String
  {
    return this.description;
  }

  public getCreatedAt(): Date
  {
    return this.createdAt;
  }
}
