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
<<<<<<< HEAD
    public ArrayList<SiteElement> post(@RequestBody MultipartFile file) throws IOException, InterruptedException {
=======
    public ArrayList<SiteElement> post(@RequestBody MultipartFile file) throws IOException {
>>>>>>> da57f09d2b68b2d0b014d1dcc2d33230e32059d4
        return siteMockupService.postMockup(file);

    }
}
