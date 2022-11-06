package com.smarthack.SmartApp.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SiteElement {
    private Coordinate upLeftCorner;
    private int height;
    private int width;
    private String type;

    public SiteElement(Coordinate upLeftCorner, int height, int width, String type) {
        this.upLeftCorner = upLeftCorner;
        this.height = height;
        this.width = width;
        this.type = type;
    }

    @Override
    public String toString() {
        return "SiteElement{" +
                "upLeftCorner=" + upLeftCorner +
                ", height=" + height +
                ", width=" + width +
                ", type='" + type + '\'' +
                '}';
    }
}
