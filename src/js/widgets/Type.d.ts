import { Dimensions } from 'app/js/canvas/Dimensions';

export interface WidgetStyle {
  fillColor: string,
  borderColor?: string,
  name?: string
}

export interface WidgetModel {
  dimensions: Dimensions,
  style: WidgetStyle,
  unitId?: number,
}
