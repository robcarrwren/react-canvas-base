import { Dimensions } from 'app/js/canvas/Dimensions';

export const WidgetModels = {
  BASE_UNIT_A: {
    dimensions: new Dimensions(600, 720, 620),
    style: { borderColor: '#72757B', fillColor: '#FFFEE7', },
    unitId: 10810
  },

  BASE_UNIT_B: {
    dimensions: new Dimensions(600, 720, 450),
    style: { borderColor: '#72757B', fillColor: '#FFFEE7', },
    unitId: 8874
  },

  DECOR_PANEL_A: {
    dimensions: new Dimensions(20, 870, 620),
    style: { fillColor: '#121214' }
  },

  DECOR_PANEL_B: {
    dimensions: new Dimensions(20, 870, 450),
    style: { fillColor: '#121214' }
  },

  DECOR_PANEL_C: {
    dimensions: new Dimensions(20, 720, 400),
    style: { fillColor: '#121214' }
  },

  DECOR_PANEL_D: {
    dimensions: new Dimensions(20, 720, 330),
    style: { fillColor: '#121214' }
  },

  DECOR_PANEL_E: {
    dimensions: new Dimensions(20, 2070, 620),
    style: { fillColor: '#121214' }
  },

  DECOR_PANEL_F: {
    dimensions: new Dimensions(20, 2070, 450),
    style: { fillColor: '#121214' }
  },

  TOWER_UNIT_A: {
    dimensions: new Dimensions(500, 1920, 620),
    style: { borderColor: '#72757B', fillColor: '#FCE5F1', },
    unitId: 11000
  },

  TOWER_UNIT_B: {
    dimensions: new Dimensions(500, 1920, 450),
    style: { borderColor: '#72757B', fillColor: '#FCE5F1', },
    unitId: 4240,
  },

  WALL_UNIT_A: {
    dimensions: new Dimensions(720, 720, 400),
    style: { borderColor: '#72757B', fillColor: '#E5EBF7', },
    unitId: 3762,
  },

  WALL_UNIT_B: {
    dimensions: new Dimensions(720, 720, 330),
    style: { borderColor: '#72757B', fillColor: '#E5EBF7', },
    unitId: 3568,
  },

  WORKTOP_A: {
    dimensions: new Dimensions(3000, 40, 600),
    style: { borderColor: '#E8A81A', fillColor: '#F0F0F0', name: 'African Teak', }
  },

  WORKTOP_B: {
    dimensions: new Dimensions(3000, 40, 600),
    style: { borderColor: '#44B84A', fillColor: '#F0F0F0', name: 'Vemeer', }
  },
}
