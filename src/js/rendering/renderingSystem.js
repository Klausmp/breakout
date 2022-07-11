import * as THREE from "three";
import {System} from "ecsy";
import {RenderingComponent} from "./renderingComponent";
import {PositionComponent} from "../world/positionComponent";

export class RenderingSystem extends System {
    init(attributes) {
        //SCENE
        this.scene = new THREE.Scene();

        //RENDERER
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        //CAMERA
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 100);
        this.camera.lookAt(0, 0, 0);
    }

    execute(delta, time) {
        this.addNewToScene()
        this.removeOldFromScene()
        this.updatePositions()
        this.renderer.render(this.scene, this.camera)
    }

    updatePositions() {
        this.queries.entities.changed.forEach(entity => {
            let rc = entity.getComponent(RenderingComponent);
            let pc = entity.getComponent(PositionComponent);
            rc.mesh.position.set(pc.x, pc.y, pc.z)
        });
    }

    addNewToScene() {
        this.queries.entities.added.forEach(entity => {
            let rc = entity.getComponent(RenderingComponent)
            console.log(rc)
            this.scene.add(rc.mesh)
        });
    }

    removeOldFromScene() {
        this.queries.entities.removed.forEach(entity => {
            let rc = entity.getComponent(RenderingComponent)
            this.scene.remove(rc.mesh)
        });
    }
}

RenderingSystem.queries = {
    entities: {
        components: [RenderingComponent, PositionComponent], listen: {
            added: true, removed: true, changed: [PositionComponent]
        }
    }
};