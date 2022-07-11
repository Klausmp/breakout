import {RenderingSystem} from "../rendering/renderingSystem.js";
import {RenderingComponent} from "../rendering/renderingComponent";
import {PositionComponent} from "./positionComponent";
import {PhysicsComponent} from "./physicsComponent";
import {RectBuilder} from "../entityBuilder/rectBuilder";
import {World} from "ecsy";

export class Level extends World {
    constructor() {
        super();
        this.registerComponents()
        this.registerSystems()
        let box = new RectBuilder(this)
        box.createEntity(50, 10)

    }

    registerSystems() {
        this.registerSystem(RenderingSystem);
    }

    registerComponents() {
        this.registerComponent(PositionComponent);
        this.registerComponent(RenderingComponent);
        this.registerComponent(PhysicsComponent);
    }


}