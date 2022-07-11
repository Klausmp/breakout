import {EntityBuilder} from "./EntityBuilder";
import {RenderingComponent} from "../rendering/renderingComponent";
import {PositionComponent} from "../world/positionComponent";
import * as THREE from "three"

export class RectBuilder extends EntityBuilder {

    createEntity(x, y) {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, y, 0)
        console.log()

        this.entity = this.world.createEntity("rect")
            .addComponent(RenderingComponent, {mesh: cube})
            .addComponent(PositionComponent, {x: x, y: y, z: 0});
    }
}