package com.smarthack.SmartApp.model;

import lombok.Data;

import java.util.ArrayList;

@Data
public class SiteMockup {
    private String siteName;
    private ArrayList<SiteElement> elements;
}
