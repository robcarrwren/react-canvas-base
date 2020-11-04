import { Vector } from 'app/js/canvas/Vector';
import { Point } from 'app/js/canvas/Point';
import { Polygon } from 'app/js/canvas/Polygon';
import { Dimensions } from 'app/js/canvas/Dimensions'
import { WidgetStyle } from 'app/js/widgets/Type';

export class Widget {
  constructor(
    private id: number,
    private dimensions: Dimensions,
    private styles: WidgetStyle,
    private rotation: number,
    private polygon: Polygon,
    private unitId?: number,
  ) { }

  public getPolygon(): Polygon {
    return this.polygon;
  }

  public setPolygon(value: Polygon): void {
    this.polygon = value;
  }

  public getId(): number {
    return this.id;
  }

  public getStyles(): WidgetStyle {
    return this.styles;
  }

  public getRotation(): number {
    return this.rotation;
  }

  public setRotation(value: number): void {
    this.rotation = value;
  }

  public getPolygonStart(): Point {
    return this.polygon.getStart();
  }

  public getPolygonTail(): Point[] {
    return this.polygon.getTail();
  }

  public translateWidget(vector: Vector): void {
    this.polygon = this.polygon.translate(vector);
  }
}
