type Position = {
  x: number;
  y: number;
};

export class Sprite {
  positionX: number;
  positionY: number;
  ctx: CanvasRenderingContext2D;
  img: CanvasImageSource;

  constructor(
    position: Position,
    ctx: CanvasRenderingContext2D,
    img: CanvasImageSource
  ) {
    this.ctx = ctx;
    this.positionX = position.x;
    this.positionY = position.y;
    this.img = img;
  }

  draw(i: number) {
    this.ctx.drawImage(
      this.img,
      i * 16,
      3 * 18,
      16,
      18,
      this.positionX,
      this.positionY,
      32,
      36
    );
  }

  update() {}
}
