# Bounce
[Live Site](https://heyitswilson.github.io/Bounce/)

Bounce is a visual demo built with JavaScript which features particle collisions and oscillations.

![Bounce](https://toasty-dev.s3-us-west-1.amazonaws.com/icons/Bounce.png)

## Features
* Particle collisions
* Oscillations

## Code

#### Particle Collisions
Particle collisions were animated by taking into account one particle's position, radius and velocity and checking whether its edge will cross over the edge of another particle in the next frame. If it would cross, the velocities of both particles are reversed, resulting in different travel directions upon collision. 

```javascript
MovingObject.prototype.collideMoveObj = function(particle2) {
    let x1 = this.pos[0];
    let x2 = particle2.pos[0];
    let r1 = this.radius;
    let r2 = particle2.radius;

    //Reverses the velocity of both particles if their next positions places them inside each other. 
    if (x1 + r1 + this.vel[0] > x2 - r2) {
        this.vel[0] *= -1
        this.vel[1] *= -1
        particle2.vel[0] *= -1
        particle2.vel[1] *= -1
    }
}
```

#### Oscillations
The factor which causes particle oscillation is an everchanging angle value.
```javascript
class WindParticle extends MovingObject{
    constructor(args) {
        super(args)
        this.name = windAttrs.name;
        this.radius = windAttrs.radius;
        this.pos = args.pos;
        this.angle = 0;
        this.vel = Util.setVec(5, args.mouseX, args.mouseY, windAttrs.angle) || args.vel
        windAttrs.angle += 2
    }

}
```
As the angle variable increases with each frame, it increases the deg constant and eventually changes its sine value from a positive number to a negative number, or vice versa, thus causing a change in velocity and the oscillation effect. 
```javascript
setVec(length, mouseX, mouseY, angle) {
        //Angle is divided by the sum of the mouse X and Y coordinates, resulting in faster 
        //oscillations with smaller coordinate sums and slower oscillations 
        //with larger coordinate sums.
        const deg = 2 * Math.PI * (angle/(mouseY + mouseX));
        return Util.scale([Math.sin(deg), Math.sin(deg)], length);
    }
 ```

## To-do
* Different oscillation directions
* Different travel paths
