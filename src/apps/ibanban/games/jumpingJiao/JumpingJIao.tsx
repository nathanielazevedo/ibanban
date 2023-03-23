import { useEffect } from "react";
import { Sprite } from "./components/Sprite";

export const SCALE = 2;
export const WIDTH = 16;
export const HEIGHT = 18;
export const SCALED_WIDTH = SCALE * WIDTH;
export const SCALED_HEIGHT = SCALE * HEIGHT;
export let c: any;

let ctx: CanvasRenderingContext2D;
let frameCount = 0;
let i = 0;
let character1: Sprite;

const Jumper = () => {
  useEffect(() => {
    c = document.getElementById("myCanvas") as HTMLElement;
    c.width = 1024;
    c.height = 576;
    ctx = c.getContext("2d") as CanvasRenderingContext2D;
    console.log("hello");
    const img = new Image();
    img.src =
      "https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png";
    let w: any;
    img.onload = () => {
      character1 = new Sprite({ x: 0, y: 0 }, ctx, img);
      console.log("heys");
      w = window.requestAnimationFrame(mainLoop);
    };
    function mainLoop() {
      console.log("running");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      frameCount++;
      if (i >= 3) i = 0;
      if (frameCount < 15) {
        w = window.requestAnimationFrame(mainLoop);
        character1.update();
        character1.draw(i);
        return;
      } else {
        character1.update(); // move character1
        i++;
      }
      frameCount = 0;
      character1.draw(i);
      w = window.requestAnimationFrame(mainLoop);
    }
    return () => {
      window.cancelAnimationFrame(w);
    };
  }, []);

  return <canvas id="myCanvas" style={{ border: "solid white 1px" }}></canvas>;
};

export default Jumper;
