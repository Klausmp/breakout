import {RenderingSystem} from "../rendering/renderingSystem.js";
import {RenderingComponent} from "../rendering/renderingComponent";
import {PositionComponent} from "./positionComponent";
import {World} from "ecsy";
import * as THREE from "three"

export class Level extends World {
    constructor() {
        super();
        this.registerComponents()
        this.registerSystems()

        const points = [];
        points.push(new THREE.Vector3(-10, 0, 0));
        points.push(new THREE.Vector3(0, 10, 0));
        points.push(new THREE.Vector3(10, 0, 0));

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({color: "red"});

        const line = new THREE.Line(geometry, material);

        this.createEntity().addComponent(RenderingComponent, {mesh: line}).addComponent(PositionComponent, {
            x: 15,
            y: 15
        })
    }

    registerSystems() {
        this.registerSystem(RenderingSystem)
    }

    registerComponents() {
        this.registerComponent(RenderingComponent)
        this.registerComponent(PositionComponent)
    }

}