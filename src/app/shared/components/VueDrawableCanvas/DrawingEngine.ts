export interface IDrawEngine {
  setColor(color: string): void;
  setSize(size: number): void;
  setTool(tool: 'marker' | 'eraser'): void;
}

interface IPoint {
  x: number;
  y: number;
  color?: string;
  size?: number;
  tool?: 'marker' | 'eraser';
  moving: boolean;
}

let canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  _color: string = '#000',
  _size: number = 1,
  _tool: 'marker' | 'eraser' = 'marker',
  points: IPoint[] = [],
  paint = false;

const addPoint = (point: IPoint) => {
  point.color = _color;
  point.size = _size;
  point.tool = _tool;
  points.push(point);
};

const press = (e: any) => {
  let mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - canvas.offsetLeft,
    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - canvas.offsetTop;

  paint = true;
  addPoint({ x: mouseX, y: mouseY, moving: false });
  draw();
};

const drag = (e: any) => {
  let mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - canvas.offsetLeft,
    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - canvas.offsetTop;

  if (paint) {
    addPoint({ x: mouseX, y: mouseY, moving: true });
    draw();
  }

  e.preventDefault();
};

const release = () => {
  paint = false;
  draw();
};

const draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  points.forEach((point: IPoint, i: number) => {
    context.beginPath();

    if (point.moving && i) {
      context.moveTo(points[i - 1].x, points[i - 1].y);
    } else {
      context.moveTo(point.x - 1, point.y);
    }
    context.lineTo(point.x, point.y);

    if (point.tool === 'eraser') {
      context.globalCompositeOperation = 'destination-out';
    } else {
      context.globalCompositeOperation = 'source-over';
    }

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = point.size;
    context.stroke();
  });

  context.closePath();
  context.restore();
};

export const DrawingEngine = (c: HTMLCanvasElement | any): IDrawEngine => {
  canvas = c;
  context = canvas.getContext('2d');

  canvas.addEventListener('mousedown', press, false);
  canvas.addEventListener('mousemove', drag, false);
  canvas.addEventListener('mouseup', release);
  canvas.addEventListener('touchstart', press, false);
  canvas.addEventListener('touchmove', drag, false);
  canvas.addEventListener('touchend', release, false);

  return {
    setColor(color: string): void {
      _color = color;
    },
    setSize(size: number): void {
      _size = size;
    },
    setTool(tool: 'marker' | 'eraser'): void {
      _tool = tool;
    },
  };
};
