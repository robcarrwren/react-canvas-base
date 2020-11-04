import { Point } from 'app/js/canvas/Point';
import { PolygonFactory } from 'app/js/canvas/PolygonFactory';
import { Widget } from 'app/js/widgets/Widget';
import { WidgetRepository } from 'app/js/canvas/WidgetRepository';
import { WidgetModel } from 'app/js/widgets/Type';
import { SerialIdGenerator } from 'app/js/widgets/SerialIdGenerator';

export class WidgetFactory {
  constructor(
    private widgetRepository: WidgetRepository,
    private polygonFactory: PolygonFactory,
    private serialIdGenerator: SerialIdGenerator
  ) { }

  public generateWidget(
    point: Point,
    widgetModel: WidgetModel,
    rotation: number
  ): void {

    const uniqueId = this.serialIdGenerator.generateId();
    const polygon = this.polygonFactory
      .createRectangle(widgetModel.dimensions)
      .translate(point.toVector());

    const newWidget = new Widget(
      uniqueId,
      widgetModel.dimensions,
      widgetModel.style,
      0,
      polygon,
      widgetModel.unitId
    );

    this.widgetRepository.push(newWidget);
  }
}
