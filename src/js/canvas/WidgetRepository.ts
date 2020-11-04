import { Widget } from 'app/js/widgets/Widget';

export class WidgetRepository {
  private widgets: Widget[] = [];

  public findAll(): Widget[] {
    return this.widgets;
  }

  public push(widget: Widget): void {
    this.widgets.push(widget);
  }

  public getLength(): number {
    return this.widgets.length;
  }
}
