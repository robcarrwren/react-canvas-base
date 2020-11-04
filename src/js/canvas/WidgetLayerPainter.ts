import { WidgetPainter } from 'app/js/canvas/WidgetPainter';
import { WidgetRepository } from 'app/js/canvas/WidgetRepository';

export class WidgetLayerPainter {
  constructor(
    private repository: WidgetRepository,
    private painter: WidgetPainter,
  ) { }

  public paint(): void {
    for (const widget of this.repository.findAll()) {
      this.painter.paint(widget);
    }
  }
}
