package com.smarthack.SmartApp.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SiteElement {
    private Coordinate upLeftCorner;
    private Coordinate upRightCorner;
    private Coordinate downLeftCorner;
    private Coordinate downRightCorner;
    private SiteElementType type;

    private int height;
    private int width;

    public SiteElement(Coordinate upLeftCorner, Coordinate upRightCorner, Coordinate downLeftCorner,
                       Coordinate downRightCorner, SiteElementType type) {
        this.upLeftCorner = upLeftCorner;
        this.upRightCorner = upRightCorner;
        this.downLeftCorner = downLeftCorner;
        this.downRightCorner = downRightCorner;
        this.type = type;

        setDimensions();
    }

    public void setDimensions() {
        this.height = ((downLeftCorner.getY() + downRightCorner.getY()) / 2)
                - ((upLeftCorner.getY() + upRightCorner.getY()) / 2);
        this.width = ((upRightCorner.getX() + downRightCorner.getX()) / 2)
                -((upLeftCorner.getX() + downLeftCorner.getX()) / 2);
    }
}
