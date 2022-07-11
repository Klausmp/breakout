import {System} from "ecsy";
import {PhysicsComponent} from "./physicsComponent";
import * as Matter from "matter-js"
import {PositionComponent} from "./positionComponent";

export class PhysicsSystem extends System {
    init(attributes) {
        this.engine = Matter.Engine.create();
        this.runner = Matter.Runner.create();
    }

}

PhysicsSystem.queries = {
    entities: {
        components: [PhysicsComponent, PositionComponent]
    }
}