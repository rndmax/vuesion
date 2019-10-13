let canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  clickX: any[] = [],
  clickY: any[] = [],
  clickColor: any[] = [],
  clickTool: any[] = [],
  clickSize: any[] = [],
  clickDrag: any[] = [],
  paint = false;

const redraw = () => {
  let i;

  context.clearRect(0, 0, canvas.width, canvas.height);

  // For each point drawn
  for (i = 0; i < clickX.length; i += 1) {
    context.beginPath();

    if (clickDrag[i] && i) {
      context.moveTo(clickX[i - 1], clickY[i - 1]);
    } else {
      context.moveTo(clickX[i] - 1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);

    if (clickTool[i] === 'eraser') {
      context.strokeStyle = 'white';
    } else {
      context.strokeStyle = clickColor[i];
    }

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = clickSize[i];
    context.stroke();
  }
  context.closePath();
  context.restore();
};

const addClick = (x: number, y: number, dragging: boolean) => {
  clickX.push(x);
  clickY.push(y);
  clickTool.push('marker');
  clickColor.push('#f43b6c');
  clickSize.push(25);
  clickDrag.push(dragging);
};

const press = (e: any) => {
  // Mouse down location
  let mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - canvas.offsetLeft,
    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - canvas.offsetTop;

  paint = true;
  addClick(mouseX, mouseY, false);
  redraw();
};

const drag = (e: any) => {
  let mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - canvas.offsetLeft,
    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - canvas.offsetTop;

  if (paint) {
    addClick(mouseX, mouseY, true);
    redraw();
  }

  e.preventDefault();
};

const release = () => {
  paint = false;
  redraw();
};

const init = () => {
  context = canvas.getContext('2d');

  canvas.addEventListener('mousedown', press, false);
  canvas.addEventListener('mousemove', drag, false);
  canvas.addEventListener('mouseup', release);
  canvas.addEventListener('touchstart', press, false);
  canvas.addEventListener('touchmove', drag, false);
  canvas.addEventListener('touchend', release, false);
};

export const DrawingEngine = (c: HTMLCanvasElement | any) => {
  canvas = c;

  init();
};
