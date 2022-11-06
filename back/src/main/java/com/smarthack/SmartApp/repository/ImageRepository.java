package com.smarthack.SmartApp.repository;

import com.smarthack.SmartApp.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    public Image findImageByName(String name);
}
