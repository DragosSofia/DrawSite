package com.smarthack.SmartApp.controller;

import com.smarthack.SmartApp.model.SiteElement;
import com.smarthack.SmartApp.service.SiteMockupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

@RestController
public class SiteMockupController {
    @Autowired
    SiteMockupService siteMockupService;

    @GetMapping("/get")
    public ArrayList<SiteElement> getElements() throws IOException {
        return siteMockupService.getElements();
    }

    @PostMapping("/post")
    public ArrayList<SiteElement> post(@RequestBody MultipartFile file) throws IOException, InterruptedException {
        return siteMockupService.postMockup(file);

    }
}
