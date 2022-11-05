package com.smarthack.SmartApp.service;

import com.smarthack.SmartApp.model.SiteMockup;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.fileupload.FileUpload;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.lang.Integer.parseInt;


@Service
@Getter
@Setter
public class SiteMockupService {
    static private SiteMockup siteMockup = new SiteMockup();

    public void getElements() throws IOException {
        URL url = new URL("http://localhost:8080/site_mockup.txt");
        BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
        String line;
        int numberOfElements  = parseInt(read.readLine());

        for (int i = 0 ; i < numberOfElements; i++) {
            line = read.readLine();
            //System.out.println(line);
        }
        read.close();
    }

    public void postMockup(MultipartFile file) throws IOException {
        Path filePath = Paths.get("http://localhost:8080/image.jpg");

        Files.write(filePath, file.getBytes());
        //System.out.println(file.getName());
    }
}
