export default class Task {
  private id: string;
  private title: string;
  private description: string;
  private createdAt: Date;

  public constructor(id: string, title: string, description = '')
  {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = new Date;
  }

  public getId(): string
  {
    return this.id;
  }

  public getTitle(): string
  {
    return this.title;
  }

  public setDescription(description: string)
  {
    this.description = description;
  }

  public getDescription(): string
  {
    return this.description;
  }

  public getCreatedAt(): Date
  {
    return this.createdAt;
  }
}
