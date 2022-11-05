package com.smarthack.SmartApp.controller;

import com.smarthack.SmartApp.service.SiteMockupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class SiteMockupController {
    @Autowired
    SiteMockupService siteMockupService;

    @GetMapping("/get")
    public void getElements() throws IOException {
        siteMockupService.getElements();
    }

    @PostMapping("/post")
    public void post(@RequestBody String siteName, @RequestBody MultipartFile file) throws IOException {
        siteMockupService.post(siteName, file);
    }
}
