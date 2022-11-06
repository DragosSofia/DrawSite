package com.smarthack.SmartApp.service;

import com.smarthack.SmartApp.model.Coordinate;
import com.smarthack.SmartApp.model.SiteElement;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import static java.lang.Integer.parseInt;


@Service
public class SiteMockupService {

    public ArrayList<SiteElement> getElements() throws IOException {
        URL url = new URL("http://localhost:8080/site_mockup.txt");
        BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
        String line;
        ArrayList<SiteElement> siteElements = new ArrayList<>();

        while ((line = read.readLine()) != null){
            String[] strings = line.split(" ");
            Coordinate coordinate = new Coordinate(parseInt(strings[0]), parseInt(strings[1]));
            siteElements.add(new SiteElement(coordinate, parseInt(strings[2]), parseInt(strings[3]), strings[4]));
        }
        read.close();

        return siteElements;
    }

    public ArrayList<SiteElement> postMockup(MultipartFile file) throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(file.getBytes());
        BufferedImage image = ImageIO.read(bis);
        ImageIO.write(image, "jpg", new File("src/main/resources/static/output.jpg"));
        Process p = Runtime.getRuntime().exec("C:\\Users\\lucia\\AppData\\Local\\Programs\\Python\\Python311\\python.exe src\\main\\resources\\script.py");
        Process p1 = Runtime.getRuntime().exec("C:\\Users\\lucia\\AppData\\Local\\Programs\\Python\\Python311\\python.exe src\\main\\resources\\script.py");
        
        return this.getElements();
    }
}
