import { RenderingContext } from 'app/js/canvas/RenderingContext';
import { Widget } from 'app/js/widgets/Widget';

export class WidgetPainter {
  constructor(private context: RenderingContext) { }

  public paint(widget: Widget): void {
    this.context.setFillStyle(widget.getStyles().fillColor);
    this.context.setStrokeStyle(widget.getStyles().borderColor);
    this.context.setLineWidth(2);
    this.context.beginPath();
    this.context.moveTo(widget.getPolygonStart());

    for (const point of widget.getPolygonTail()) {
      this.context.lineTo(point);
    }

    this.context.closePath();
  }
}
