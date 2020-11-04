import * as React from 'react';
import { Camera } from 'app/js/canvas/Camera';
import { GridLayerPainter } from 'app/js/canvas/GridLayerPainter';
import { MouseEventRouter } from 'app/js/canvas/MouseEventRouter';
import { WidgetLayerPainter } from 'app/js/canvas/WidgetLayerPainter';
import { WidgetPainter } from 'app/js/canvas/WidgetPainter';
import { WidgetRepository } from 'app/js/canvas/WidgetRepository';
import { RenderingContext } from 'app/js/canvas/RenderingContext';
import { WorldPainter } from 'app/js/canvas/WorldPainter';
import { WidgetFactory } from 'app/js/widgets/WidgetFactory';
import { Point } from 'app/js/canvas/Point';
import { PolygonFactory } from 'app/js/canvas/PolygonFactory';
import { WidgetModels } from 'app/js/widgets/WidgetModels';
import { WidgetModel } from 'app/js/widgets/Type';
import { SerialIdGenerator } from 'app/js/widgets/SerialIdGenerator';

type Props = {};

class Canvas extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const canvas: any = document.querySelector('#canvas');
    const camera = new Camera();
    const renderingContext = new RenderingContext(
      canvas.getContext('2d'),
      camera
    );
    const gridLayerPainter = new GridLayerPainter(renderingContext);
    const widgetPainter = new WidgetPainter(renderingContext);
    const widgetRepository = new WidgetRepository();
    const widgetLayerPainter = new WidgetLayerPainter(
      widgetRepository,
      widgetPainter
    );
    const polygonFactory = new PolygonFactory();
    const serialIdGenerator = new SerialIdGenerator();
    const widgetModels: { [index: string]: WidgetModel } = WidgetModels;
    const widgetFactory = new WidgetFactory(
      widgetRepository,
      polygonFactory,
      serialIdGenerator
    );
    widgetFactory.generateWidget(
      new Point(300, 400, 400),
      widgetModels.BASE_UNIT_A,
      0
    );
    const mouseEventRouter = new MouseEventRouter(camera);
    mouseEventRouter.register(document);

    const worldPainter = new WorldPainter(renderingContext, [
      gridLayerPainter,
      widgetLayerPainter,
    ]);
    const ticksPerSecond = 60;
    const msPerTick = 1000 / ticksPerSecond;

    setInterval(() => {
      renderingContext.fitToScreen();
      worldPainter.paint();
    }, msPerTick);
  }

  render() {
    return <canvas id='canvas' className='h-full w-full'></canvas>;
  }
}

export default Canvas;
