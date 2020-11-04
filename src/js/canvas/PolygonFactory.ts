import { Dimensions } from 'app/js/canvas/Dimensions';
import { Point } from 'app/js/canvas/Point';
import { Polygon } from 'app/js/canvas/Polygon';

export class PolygonFactory {
  public createRectangle(dimensions: Dimensions): Polygon {
    const width = dimensions.getWidth();
    const depth = dimensions.getDepth();

    const topLeft = new Point(0, 0, depth);
    const topRight = new Point(width, 0, depth);
    const bottomRight = new Point(width, 0, 0);
    const bottomLeft = new Point(0, 0, 0);

    return new Polygon([topLeft, topRight, bottomRight, bottomLeft]);
  }
}
