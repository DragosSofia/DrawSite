package com.smarthack.SmartApp.service;

import com.smarthack.SmartApp.model.Coordinate;
import com.smarthack.SmartApp.model.Image;
import com.smarthack.SmartApp.model.SiteElement;
import com.smarthack.SmartApp.model.SiteMockup;
import com.smarthack.SmartApp.repository.ImageRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.net.URL;
import java.util.ArrayList;

import static java.lang.Integer.parseInt;


@Service
@Getter
@Setter
public class SiteMockupService {
    static private SiteMockup siteMockup = new SiteMockup();

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

    public void postMockup(MultipartFile file) throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(file.getBytes());
        BufferedImage image = ImageIO.read(bis);
        ImageIO.write(image, "jpg", new File("src/main/resources/static/output.jpg"));

        Process p = Runtime.getRuntime().exec("C:\\Users\\Robert\\AppData\\Local\\Microsoft\\WindowsApps\\python.exe src\\main\\resources\\script.py");
    }
}
