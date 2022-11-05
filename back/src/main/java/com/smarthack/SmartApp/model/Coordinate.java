package com.smarthack.SmartApp.model;

import lombok.Data;

@Data
public class Coordinate {
    private int x;
    private int y;

    public Coordinate(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
